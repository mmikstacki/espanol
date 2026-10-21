// Learner progress: unlocking, results, day streak, sync merge. Pure functions
// plus a storage adapter that never throws.
import { isPassed } from './session.js';

export const STORAGE_KEY = 'espanol.v1';

export const emptyState = () => ({
  name: '',
  steps: {},
  known: {},
  streak: { lastDay: null, count: 0 },
  outbox: [],
});

const emptyStep = () => ({ best: 0, passed: false, attempts: 0, practiceBest: 0 });

export function loadState(storage) {
  try {
    const raw = storage?.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    return { ...emptyState(), ...JSON.parse(raw) };
  } catch {
    return emptyState();
  }
}

export function saveState(storage, state) {
  try {
    storage?.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Private mode or full storage: progress still lives in memory and the sheet.
  }
}

export function isUnlocked(state, steps, stepId) {
  const index = steps.findIndex((s) => s.id === stepId);
  if (index <= 0) return index === 0;
  return Boolean(state.steps[steps[index - 1].id]?.passed);
}

/** First unlocked, not yet passed step that has content. */
export const currentStep = (state, steps) =>
  steps.find((s) => !s.soon && isUnlocked(state, steps, s.id) && !state.steps[s.id]?.passed) ?? null;

/** Local calendar day as YYYY-MM-DD. */
export function today(date = new Date()) {
  const pad = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function nextDay(day) {
  const [y, m, d] = day.split('-').map(Number);
  return today(new Date(y, m - 1, d + 1));
}

export function updateStreak(streak, day) {
  if (streak.lastDay === day) return streak;
  const count = streak.lastDay && nextDay(streak.lastDay) === day ? streak.count + 1 : 1;
  return { lastDay: day, count };
}

/** @param {{mode: 'practice'|'test', percent: number, today: string}} result */
export function recordResult(state, stepId, { mode, percent, today: day }) {
  const prev = { ...emptyStep(), ...state.steps[stepId] };
  const next =
    mode === 'test'
      ? { ...prev, best: Math.max(prev.best, percent), passed: prev.passed || isPassed(percent), attempts: prev.attempts + 1 }
      : { ...prev, practiceBest: Math.max(prev.practiceBest, percent) };
  return {
    ...state,
    steps: { ...state.steps, [stepId]: next },
    streak: updateStreak(state.streak, day),
  };
}

/** Merge test results pulled from the sheet: max score, passed if passed anywhere. */
export function mergeRemote(state, remoteSteps) {
  const steps = { ...state.steps };
  for (const [id, remote] of Object.entries(remoteSteps ?? {})) {
    const local = { ...emptyStep(), ...steps[id] };
    steps[id] = {
      ...local,
      best: Math.max(local.best, Number(remote.best) || 0),
      passed: local.passed || Boolean(remote.passed),
    };
  }
  return { ...state, steps };
}

export function markKnown(state, stepId, es) {
  const list = state.known[stepId] ?? [];
  if (list.includes(es)) return state;
  return { ...state, known: { ...state.known, [stepId]: [...list, es] } };
}
