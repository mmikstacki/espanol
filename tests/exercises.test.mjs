import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getExercise, TYPES } from '../src/exercises/index.js';

const check = (item, value) => getExercise(item.type).check(item, value);
const solve = (item) => getExercise(item.type).solution(item);

test('registry exposes all 10 exercise types', () => {
  assert.deepEqual([...TYPES].sort(), ['choice', 'dialog', 'gap', 'listen', 'order', 'pairs', 'sort', 'table', 'truefalse', 'type']);
  assert.throws(() => getExercise('nope'));
});

test('choice', () => {
  const item = { type: 'choice', prompt: 'la bufanda', options: ['szalik', 'czapka'], answer: 'szalik', explain: 'x' };
  assert.equal(check(item, 'szalik').result, 'correct');
  assert.equal(check(item, 'czapka').result, 'wrong');
  assert.equal(check(item, 'czapka').expected, 'szalik');
  assert.equal(check(item, 'czapka').explain, 'x');
  assert.equal(check(item, solve(item)).result, 'correct');
});

test('listen speaks the item and accepts the answer option', () => {
  const item = { type: 'listen', say: 'las botas', options: ['👢', '👟'], answer: '👢', explain: 'x' };
  assert.equal(check(item, '👢').result, 'correct');
  assert.equal(getExercise('listen').say(item), 'las botas');
});

test('type uses text comparison with accents as almost', () => {
  const item = { type: 'type', prompt: 'kurtka', answer: ['la chaqueta', 'chaqueta'], explain: 'x' };
  assert.equal(check(item, 'Chaqueta').result, 'correct');
  assert.equal(check({ ...item, answer: ['vestís'] }, 'vestis').result, 'almost');
  assert.equal(check(item, 'abrigo').result, 'wrong');
  assert.equal(check(item, 'abrigo').expected, 'la chaqueta');
  assert.equal(getExercise('type').say(item), 'la chaqueta');
});

test('gap: typed and with options; say fills the sentence', () => {
  const typed = { type: 'gap', sentence: 'Yo ___ un jersey.', answer: ['me pongo'], explain: 'x' };
  assert.equal(check(typed, 'me pongo').result, 'correct');
  assert.equal(check(typed, 'pongo').result, 'wrong');
  assert.equal(getExercise('gap').say(typed), 'Yo me pongo un jersey.');
  const picked = { ...typed, options: ['me pongo', 'se pone'] };
  assert.equal(check(picked, 'me pongo').result, 'correct');
  assert.equal(check(picked, 'se pone').result, 'wrong');
  assert.equal(check(picked, solve(picked)).result, 'correct');
});

test('pairs: correct only without mismatches', () => {
  const item = { type: 'pairs', pairs: [['el pan', 'chleb'], ['la falda', 'spódnica']], explain: 'x' };
  assert.equal(check(item, { mistakes: 0 }).result, 'correct');
  assert.equal(check(item, { mistakes: 2 }).result, 'wrong');
  assert.match(check(item, { mistakes: 1 }).expected, /el pan = chleb/);
  assert.equal(check(item, solve(item)).result, 'correct');
});

test('order compares the built sentence', () => {
  const item = { type: 'order', answer: 'Me lo llevo.', extra: ['la'], explain: 'x' };
  assert.equal(check(item, 'me lo llevo').result, 'correct');
  assert.equal(check(item, 'lo me llevo').result, 'wrong');
  assert.equal(getExercise('order').say(item), 'Me lo llevo.');
});

test('dialog requires the exact line order', () => {
  const item = { type: 'dialog', lines: ['Buenos días.', '¿Qué talla tienes?', 'La 38.'], explain: 'x' };
  assert.equal(check(item, ['Buenos días.', '¿Qué talla tienes?', 'La 38.']).result, 'correct');
  assert.equal(check(item, ['¿Qué talla tienes?', 'Buenos días.', 'La 38.']).result, 'wrong');
  assert.equal(check(item, solve(item)).result, 'correct');
});

test('sort requires every item in its category', () => {
  const item = { type: 'sort', categories: ['zima', 'lato'], items: [['el abrigo', 'zima'], ['el bañador', 'lato']], explain: 'x' };
  assert.equal(check(item, [['el abrigo', 'zima'], ['el bañador', 'lato']]).result, 'correct');
  assert.equal(check(item, [['el abrigo', 'lato'], ['el bañador', 'lato']]).result, 'wrong');
  assert.equal(check(item, solve(item)).result, 'correct');
});

test('table grades every cell and reports cell results', () => {
  const item = { type: 'table', title: 'llevar', rows: [['yo', 'llevo'], ['vosotros', 'lleváis']], explain: 'x' };
  assert.equal(check(item, ['llevo', 'lleváis']).result, 'correct');
  const almost = check(item, ['llevo', 'llevais']);
  assert.equal(almost.result, 'almost');
  assert.deepEqual(almost.cells, ['correct', 'almost']);
  assert.equal(check(item, ['llevas', 'lleváis']).result, 'wrong');
  assert.equal(check(item, solve(item)).result, 'correct');
});

test('truefalse', () => {
  const item = { type: 'truefalse', statement: 'El traje es negro.', answer: false, explain: 'x' };
  assert.equal(check(item, false).result, 'correct');
  assert.equal(check(item, true).result, 'wrong');
  assert.equal(check(item, true).expected, 'Fałsz');
});
