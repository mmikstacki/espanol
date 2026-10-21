// Practice/test session queue. Pure logic, no DOM.

export const PASS_THRESHOLD = 80;

export const isPassed = (percent) => percent >= PASS_THRESHOLD;

/** Fisher–Yates shuffle returning a new array. */
export function shuffle(list, rng = Math.random) {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export const pickTest = (pool, n = 10, rng = Math.random) => shuffle(pool, rng).slice(0, n);

/**
 * @param {object[]} items exercise items in play order
 * @param {{mode: 'practice'|'test'}} options practice repeats wrong items at the end
 */
export function createSession(items, { mode = 'practice' } = {}) {
  const queue = [...items];
  const firstResult = new Map(); // item -> result of its first attempt
  let finished = 0;

  return {
    current: () => queue[0] ?? null,
    done: () => queue.length === 0,
    progress: () => ({ done: finished, total: items.length }),

    /** Record the result for the current item and advance. */
    answer(result) {
      const item = queue.shift();
      if (!item) return;
      if (!firstResult.has(item)) firstResult.set(item, result);
      if (result === 'wrong' && mode === 'practice') queue.push(item);
      else finished++;
    },

    summary() {
      const mistakes = items.filter((i) => firstResult.get(i) === 'wrong');
      const firstTryCorrect = items.length - mistakes.length;
      const percent = items.length ? Math.round((100 * firstTryCorrect) / items.length) : 0;
      return { total: items.length, firstTryCorrect, percent, mistakes };
    },
  };
}
