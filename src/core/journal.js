// Progress journal in a Google Sheet (via an Apps Script web app).
// Entries wait in state.outbox until the network accepts them.

/** Short human-readable label of an exercise item for the "mistakes" column. */
export function mistakeLabel(item) {
  if (item.prompt) return item.prompt;
  if (item.sentence) return item.sentence;
  if (item.statement) return item.statement;
  if (item.say) return `🔊 ${item.say}`;
  if (item.title) return item.title;
  return item.id ?? '?';
}

export function buildEntry({ name, step, mode, percent, passed, mistakes = [], seconds, when = new Date() }) {
  return {
    date: when.toISOString(),
    name,
    stepId: step.id,
    step: `${step.num}. ${step.title}`,
    mode: mode === 'test' ? 'sprawdzian' : 'ćwiczenia',
    percent,
    passed: Boolean(passed),
    mistakes: mistakes.map(mistakeLabel).join(' | '),
    seconds: Math.round(seconds),
  };
}

/**
 * @param {{url: string, fetchFn?: typeof fetch, getState: () => object, setState: (s: object) => void}} deps
 */
export function createJournal({ url, fetchFn = globalThis.fetch?.bind(globalThis), getState, setState }) {
  let flushing = null;

  // text/plain avoids a CORS preflight, which Apps Script does not answer.
  const post = (body) => fetchFn(url, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(body),
  });

  async function sendAll() {
    while (getState().outbox.length) {
      const [entry] = getState().outbox;
      try {
        const res = await post(entry);
        if (!res.ok) return;
      } catch {
        return; // offline: try again on the next flush
      }
      setState({ ...getState(), outbox: getState().outbox.slice(1) });
    }
  }

  const flush = () => {
    if (!url) return Promise.resolve();
    flushing ??= sendAll().finally(() => { flushing = null; });
    return flushing;
  };

  return {
    flush,
    async log(entry) {
      if (!url) return;
      setState({ ...getState(), outbox: [...getState().outbox, entry] });
      await flush();
    },
    /** Test results stored in the sheet for this learner, or null when unavailable. */
    async pull(name) {
      if (!url || !name) return null;
      try {
        const res = await post({ action: 'pull', name });
        if (!res.ok) return null;
        const data = await res.json();
        return data?.steps ?? null;
      } catch {
        return null;
      }
    },
  };
}
