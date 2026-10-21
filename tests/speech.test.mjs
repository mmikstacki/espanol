import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pickVoice } from '../src/core/speech.js';

const v = (name, lang, localService = true) => ({ name, lang, localService });

test('never picks a non-Spanish voice (Polish default would read Spanish with Polish sounds)', () => {
  assert.equal(pickVoice([v('Microsoft Paulina Desktop', 'pl-PL'), v('Microsoft Zira Desktop', 'en-US')]), null);
  assert.equal(pickVoice([]), null);
});

test('prefers Spain Spanish over other Spanish variants', () => {
  assert.equal(pickVoice([v('Paulina', 'es-MX'), v('Helena', 'es-ES')]).name, 'Helena');
  assert.equal(pickVoice([v('Paulina', 'es-MX')]).name, 'Paulina');
  assert.equal(pickVoice([v('Android', 'es_ES')]).name, 'Android');
});

test('prefers natural-sounding voices within the same variant', () => {
  const voices = [v('Microsoft Helena Desktop', 'es-ES'), v('Google español', 'es-ES', false), v('Mónica', 'es-ES')];
  assert.equal(pickVoice(voices).name, 'Google español');
  assert.equal(pickVoice([v('Microsoft Helena Desktop', 'es-ES'), v('Microsoft Elvira Online (Natural)', 'es-ES', false)]).name, 'Microsoft Elvira Online (Natural)');
  assert.equal(pickVoice([v('Microsoft Helena Desktop', 'es-ES'), v('Mónica', 'es-ES')]).name, 'Mónica');
});

test('a better Spain voice wins over a better Latin American voice', () => {
  assert.equal(pickVoice([v('Google español de Estados Unidos', 'es-US', false), v('Microsoft Helena Desktop', 'es-ES')]).name, 'Microsoft Helena Desktop');
});
