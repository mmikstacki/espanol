import { test } from 'node:test';
import assert from 'node:assert/strict';
import { normalize, stripAccents, compareText } from '../src/core/check.js';

test('normalize lowercases, trims, collapses spaces and drops punctuation', () => {
  assert.equal(normalize('  ¿Me   PONGO? '), 'me pongo');
  assert.equal(normalize('¡Hola!, amigo.'), 'hola amigo');
});

test('normalize keeps accents and ñ', () => {
  assert.equal(normalize('Vestís'), 'vestís');
  assert.equal(normalize('NIÑO'), 'niño');
});

test('stripAccents removes diacritics and turns ñ into n', () => {
  assert.equal(stripAccents('vestís árbol pingüino'), 'vestis arbol pinguino');
  assert.equal(stripAccents('niño'), 'nino');
});

test('compareText: exact match after normalization is correct', () => {
  assert.equal(compareText('Vestís', ['vestís']), 'correct');
  assert.equal(compareText(' me  pongo ', ['me pongo']), 'correct');
});

test('compareText: missing accent or ñ is almost', () => {
  assert.equal(compareText('vestis', ['vestís']), 'almost');
  assert.equal(compareText('nino', ['niño']), 'almost');
});

test('compareText: any accepted variant counts', () => {
  assert.equal(compareText('unos vaqueros', ['los vaqueros', 'unos vaqueros']), 'correct');
});

test('compareText: different word is wrong', () => {
  assert.equal(compareText('visten', ['vestís']), 'wrong');
  assert.equal(compareText('', ['vestís']), 'wrong');
});

test('compareText: accepts a single string as accepted answer', () => {
  assert.equal(compareText('lleva', 'lleva'), 'correct');
});
