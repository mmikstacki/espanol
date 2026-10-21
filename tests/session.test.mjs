import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createSession, pickTest, shuffle, isPassed, PASS_THRESHOLD } from '../src/core/session.js';

const items = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];

// Deterministic rng: cycles through given values.
const seq = (...values) => { let i = 0; return () => values[i++ % values.length]; };

test('practice: wrong answer sends the item to the end of the queue', () => {
  const s = createSession(items, { mode: 'practice' });
  assert.equal(s.current().id, 'a');
  s.answer('wrong');
  assert.equal(s.current().id, 'b');
  s.answer('correct');
  s.answer('correct'); // c
  assert.equal(s.current().id, 'a');
  assert.equal(s.done(), false);
  s.answer('correct');
  assert.equal(s.done(), true);
  assert.equal(s.current(), null);
});

test('practice: percent counts first-try answers, almost counts as correct', () => {
  const s = createSession(items, { mode: 'practice' });
  s.answer('wrong');   // a
  s.answer('almost');  // b
  s.answer('correct'); // c
  s.answer('correct'); // a again
  const sum = s.summary();
  assert.equal(sum.total, 3);
  assert.equal(sum.firstTryCorrect, 2);
  assert.equal(sum.percent, 67);
  assert.deepEqual(sum.mistakes.map((i) => i.id), ['a']);
});

test('test mode: wrong answers are not repeated', () => {
  const s = createSession(items, { mode: 'test' });
  s.answer('wrong');
  s.answer('correct');
  s.answer('wrong');
  assert.equal(s.done(), true);
  const sum = s.summary();
  assert.equal(sum.percent, 33);
  assert.deepEqual(sum.mistakes.map((i) => i.id), ['a', 'c']);
});

test('progress reports finished items out of total', () => {
  const s = createSession(items, { mode: 'practice' });
  assert.deepEqual(s.progress(), { done: 0, total: 3 });
  s.answer('wrong');
  assert.deepEqual(s.progress(), { done: 0, total: 3 });
  s.answer('correct');
  assert.deepEqual(s.progress(), { done: 1, total: 3 });
});

test('pickTest returns at most n unique items', () => {
  const pool = Array.from({ length: 15 }, (_, i) => ({ id: i }));
  const picked = pickTest(pool, 10, seq(0.3, 0.7, 0.1, 0.9));
  assert.equal(picked.length, 10);
  assert.equal(new Set(picked.map((p) => p.id)).size, 10);
  assert.equal(pickTest(items, 10).length, 3);
});

test('shuffle keeps all elements and does not mutate input', () => {
  const input = [1, 2, 3, 4];
  const out = shuffle(input, seq(0.5));
  assert.deepEqual([...out].sort(), [1, 2, 3, 4]);
  assert.deepEqual(input, [1, 2, 3, 4]);
});

test('pass threshold is 80 percent', () => {
  assert.equal(PASS_THRESHOLD, 80);
  assert.equal(isPassed(80), true);
  assert.equal(isPassed(79), false);
});
