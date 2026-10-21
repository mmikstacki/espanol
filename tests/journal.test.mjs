import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildEntry, createJournal, mistakeLabel } from '../src/core/journal.js';

const step = { id: 'osoby', num: 1, title: 'Kto? Osoby i odmiana' };

function harness({ url = 'https://script.example/exec', fetchFn } = {}) {
  let state = { outbox: [] };
  const journal = createJournal({
    url,
    fetchFn,
    getState: () => state,
    setState: (s) => { state = s; },
  });
  return { journal, state: () => state };
}

test('buildEntry flattens a result into one sheet row', () => {
  const entry = buildEntry({
    name: 'Kuba', step, mode: 'test', percent: 85, passed: true, seconds: 120.4,
    mistakes: [{ prompt: 'Co znaczy „ellos”?' }, { sentence: 'Yo ___ una falda.' }],
    when: new Date('2026-10-21T15:00:00Z'),
  });
  assert.deepEqual(entry, {
    date: '2026-10-21T15:00:00.000Z',
    name: 'Kuba',
    stepId: 'osoby',
    step: '1. Kto? Osoby i odmiana',
    mode: 'sprawdzian',
    percent: 85,
    passed: true,
    mistakes: 'Co znaczy „ellos”? | Yo ___ una falda.',
    seconds: 120,
  });
});

test('mistakeLabel falls back through the item fields', () => {
  assert.equal(mistakeLabel({ statement: 'El traje es negro.' }), 'El traje es negro.');
  assert.equal(mistakeLabel({ say: 'las botas', type: 'listen' }), '🔊 las botas');
  assert.equal(mistakeLabel({ id: 'x-1' }), 'x-1');
});

test('without a URL nothing is sent or queued', async () => {
  let calls = 0;
  const { journal, state } = harness({ url: '', fetchFn: async () => { calls++; } });
  await journal.log({ a: 1 });
  assert.equal(calls, 0);
  assert.deepEqual(state().outbox, []);
  assert.equal(await journal.pull('Kuba'), null);
});

test('a sent entry leaves the outbox', async () => {
  const sent = [];
  const fetchFn = async (url, opts) => { sent.push(JSON.parse(opts.body)); return { ok: true }; };
  const { journal, state } = harness({ fetchFn });
  await journal.log({ a: 1 });
  assert.deepEqual(sent, [{ a: 1 }]);
  assert.deepEqual(state().outbox, []);
});

test('a network error keeps the entry queued and a later flush sends it', async () => {
  let online = false;
  const fetchFn = async () => { if (!online) throw new Error('offline'); return { ok: true }; };
  const { journal, state } = harness({ fetchFn });
  await journal.log({ a: 1 });
  await journal.log({ b: 2 });
  assert.equal(state().outbox.length, 2);
  online = true;
  await journal.flush();
  assert.deepEqual(state().outbox, []);
});

test('pull returns remote steps or null on failure', async () => {
  let request;
  const ok = harness({
    fetchFn: async (url, opts) => {
      request = { url, body: JSON.parse(opts.body) };
      return { ok: true, json: async () => ({ steps: { osoby: { best: 90, passed: true } } }) };
    },
  });
  assert.deepEqual(await ok.journal.pull('Kuba'), { osoby: { best: 90, passed: true } });
  assert.deepEqual(request, { url: 'https://script.example/exec', body: { action: 'pull', name: 'Kuba' } });
  const bad = harness({ fetchFn: async () => { throw new Error('offline'); } });
  assert.equal(await bad.journal.pull('Kuba'), null);
});
