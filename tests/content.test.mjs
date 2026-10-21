import { test } from 'node:test';
import assert from 'node:assert/strict';
import lesson from '../content/leccion-2.js';
import { getExercise, TYPES } from '../src/exercises/index.js';

const ready = lesson.steps.filter((s) => !s.soon);
const allItems = ready.flatMap((s) => [...s.exercises, ...s.test].map((item) => ({ step: s, item })));

const REQUIRED = {
  choice: (i) => Array.isArray(i.options) && i.options.includes(i.answer),
  listen: (i) => typeof i.say === 'string' && Array.isArray(i.options) && i.options.includes(i.answer),
  type: (i) => Array.isArray(i.answer) && i.answer.length > 0 && typeof i.prompt === 'string',
  gap: (i) => i.sentence?.split('___').length === 2 && Array.isArray(i.answer) && (!i.options || i.options.includes(i.answer[0])),
  pairs: (i) => i.pairs?.length >= 3 && i.pairs.length <= 5
    && new Set(i.pairs.map((p) => p[0])).size === i.pairs.length
    && new Set(i.pairs.map((p) => p[1])).size === i.pairs.length,
  order: (i) => typeof i.answer === 'string' && i.answer.split(' ').length >= 2,
  // ≤ 6 lines and ≤ 3 categories: more does not fit a phone screen.
  dialog: (i) => i.lines?.length >= 3 && i.lines.length <= 6 && new Set(i.lines).size === i.lines.length,
  sort: (i) => i.categories?.length >= 2 && i.categories.length <= 3 && i.items?.every(([, c]) => i.categories.includes(c))
    && new Set(i.items.map(([t]) => t)).size === i.items.length,
  table: (i) => i.rows?.length >= 2 && i.rows.every((r) => r.length === 2),
  truefalse: (i) => typeof i.statement === 'string' && typeof i.answer === 'boolean',
};

test('passages referenced by true/false items exist in their step', () => {
  for (const { step, item } of allItems) {
    if (item.passage) assert.ok(step.passages?.[item.passage]?.text, `${item.id}: brak tekstu ${item.passage}`);
  }
});

test('choice-like options are unique', () => {
  for (const { item } of allItems) {
    if (item.options) assert.equal(new Set(item.options).size, item.options.length, `${item.id}: powtórzona opcja`);
  }
});

test('lesson has 17 steps with unique ids and sequential numbers', () => {
  assert.equal(lesson.steps.length, 17);
  assert.equal(new Set(lesson.steps.map((s) => s.id)).size, 17);
  lesson.steps.forEach((s, i) => assert.equal(s.num, i + 1));
});

test('ready steps have enough theory, exercises and test items', () => {
  for (const s of ready) {
    assert.ok(s.theory.length >= 1, `${s.id}: brak teorii`);
    assert.ok(s.exercises.length >= 15, `${s.id}: za mało ćwiczeń (${s.exercises.length})`);
    assert.ok(s.test.length >= 12, `${s.id}: za mała pula sprawdzianu (${s.test.length})`);
  }
});

test('every item has a known type, required fields, explanation and valid theory link', () => {
  for (const { step, item } of allItems) {
    const where = `${item.id} (${item.type})`;
    assert.ok(TYPES.includes(item.type), `${where}: nieznany typ`);
    assert.ok(REQUIRED[item.type](item), `${where}: brak wymaganych pól lub odpowiedź spoza opcji`);
    assert.ok(typeof item.explain === 'string' && item.explain.length > 0, `${where}: brak wyjaśnienia`);
    if (item.theory) assert.ok(step.theory.some((t) => t.id === item.theory), `${where}: brak karty teorii ${item.theory}`);
  }
});

test('the stored solution of every item is graded as correct', () => {
  for (const { item } of allItems) {
    const ex = getExercise(item.type);
    assert.equal(ex.check(item, ex.solution(item)).result, 'correct', `${item.id}`);
  }
});

test('texts read aloud never contain a gap marker', () => {
  for (const { item } of allItems) {
    const spoken = [item.say, getExercise(item.type).say(item), ...(item.type === 'sort' ? item.items.map(([t]) => t) : []),
      ...(item.type === 'pairs' ? item.pairs.map(([t]) => t) : []), ...(item.lines ?? [])];
    for (const t of spoken.filter(Boolean)) assert.ok(!/___|→|=/.test(t), `${item.id}: „${t}” zawiera ___, → albo =`);
  }
});

test('item ids are unique across the lesson', () => {
  const ids = allItems.map(({ item }) => item.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('vocabulary entries have Spanish and Polish text', () => {
  for (const s of ready) {
    for (const v of s.vocab) assert.ok(v.es && v.pl, `${s.id}: niepełne słówko ${JSON.stringify(v)}`);
  }
});
