import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  emptyState, loadState, saveState, isUnlocked, recordResult, updateStreak,
  mergeRemote, markKnown, today, currentStep, STORAGE_KEY,
} from '../src/core/progress.js';

const steps = [{ id: 's1' }, { id: 's2' }, { id: 's3' }];

const memoryStorage = (initial = {}) => {
  const data = { ...initial };
  return { getItem: (k) => data[k] ?? null, setItem: (k, v) => { data[k] = v; }, data };
};

test('first step is always unlocked, the next one only after passing', () => {
  let state = emptyState();
  assert.equal(isUnlocked(state, steps, 's1'), true);
  assert.equal(isUnlocked(state, steps, 's2'), false);
  state = recordResult(state, 's1', { mode: 'test', percent: 85, today: '2026-10-21' });
  assert.equal(isUnlocked(state, steps, 's2'), true);
  assert.equal(isUnlocked(state, steps, 's3'), false);
});

test('recordResult for a test keeps the best score, counts attempts and never un-passes', () => {
  let state = emptyState();
  state = recordResult(state, 's1', { mode: 'test', percent: 90, today: '2026-10-21' });
  state = recordResult(state, 's1', { mode: 'test', percent: 50, today: '2026-10-21' });
  assert.deepEqual(state.steps.s1, { best: 90, passed: true, attempts: 2, practiceBest: 0 });
});

test('recordResult for practice does not pass the step', () => {
  const state = recordResult(emptyState(), 's1', { mode: 'practice', percent: 100, today: '2026-10-21' });
  assert.equal(state.steps.s1.passed, false);
  assert.equal(state.steps.s1.practiceBest, 100);
  assert.equal(state.steps.s1.attempts, 0);
});

test('recordResult does not mutate the input state and updates the streak', () => {
  const before = emptyState();
  const after = recordResult(before, 's1', { mode: 'practice', percent: 40, today: '2026-10-21' });
  assert.deepEqual(before, emptyState());
  assert.deepEqual(after.streak, { lastDay: '2026-10-21', count: 1 });
});

test('updateStreak: same day, next day, gap', () => {
  assert.deepEqual(updateStreak({ lastDay: null, count: 0 }, '2026-10-21'), { lastDay: '2026-10-21', count: 1 });
  assert.deepEqual(updateStreak({ lastDay: '2026-10-21', count: 3 }, '2026-10-21'), { lastDay: '2026-10-21', count: 3 });
  assert.deepEqual(updateStreak({ lastDay: '2026-10-21', count: 3 }, '2026-10-22'), { lastDay: '2026-10-22', count: 4 });
  assert.deepEqual(updateStreak({ lastDay: '2026-10-31', count: 2 }, '2026-11-01'), { lastDay: '2026-11-01', count: 3 });
  assert.deepEqual(updateStreak({ lastDay: '2026-10-21', count: 3 }, '2026-10-24'), { lastDay: '2026-10-24', count: 1 });
});

test('mergeRemote takes the max score and ORs passed', () => {
  let state = recordResult(emptyState(), 's1', { mode: 'test', percent: 70, today: '2026-10-21' });
  state = mergeRemote(state, { s1: { best: 85, passed: true }, s2: { best: 60, passed: false } });
  assert.equal(state.steps.s1.best, 85);
  assert.equal(state.steps.s1.passed, true);
  assert.equal(state.steps.s2.best, 60);
  assert.equal(state.steps.s2.passed, false);
});

test('markKnown stores each word once', () => {
  let state = markKnown(emptyState(), 's3', 'la falda');
  state = markKnown(state, 's3', 'la falda');
  assert.deepEqual(state.known.s3, ['la falda']);
});

test('loadState falls back to an empty state on missing or broken data', () => {
  assert.deepEqual(loadState(memoryStorage()), emptyState());
  assert.deepEqual(loadState(memoryStorage({ [STORAGE_KEY]: '{oops' })), emptyState());
  assert.deepEqual(loadState(null), emptyState());
});

test('saveState then loadState round-trips', () => {
  const storage = memoryStorage();
  const state = { ...emptyState(), name: 'Kuba' };
  saveState(storage, state);
  assert.equal(loadState(storage).name, 'Kuba');
});

test('saveState swallows storage errors', () => {
  const broken = { getItem: () => { throw new Error('x'); }, setItem: () => { throw new Error('x'); } };
  assert.doesNotThrow(() => saveState(broken, emptyState()));
  assert.deepEqual(loadState(broken), emptyState());
});

test('today formats a local date as YYYY-MM-DD', () => {
  assert.equal(today(new Date(2026, 0, 5)), '2026-01-05');
});

test('currentStep is the first unlocked step that is not passed and not marked soon', () => {
  const withSoon = [{ id: 's1' }, { id: 's2' }, { id: 's3', soon: true }];
  let state = emptyState();
  assert.equal(currentStep(state, withSoon).id, 's1');
  state = recordResult(state, 's1', { mode: 'test', percent: 100, today: '2026-10-21' });
  assert.equal(currentStep(state, withSoon).id, 's2');
  state = recordResult(state, 's2', { mode: 'test', percent: 100, today: '2026-10-21' });
  assert.equal(currentStep(state, withSoon), null);
});
