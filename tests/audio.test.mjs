import { test } from 'node:test';
import assert from 'node:assert/strict';
import { audioKey, collectTexts, resolveAudio } from '../src/core/audio.js';
import { getExercise } from '../src/exercises/index.js';
import lesson from '../content/leccion-2.js';

test('audioKey is stable, 8 hex chars, and ignores surrounding spaces', () => {
  assert.match(audioKey('la falda'), /^[0-9a-f]{8}$/);
  assert.equal(audioKey('la falda'), audioKey('  la falda '));
  assert.notEqual(audioKey('la falda'), audioKey('las faldas'));
});

test('audioKey treats composed and decomposed accents the same', () => {
  assert.equal(audioKey('vestís'), audioKey('vestís'));
});

test('collectTexts gathers every Spanish text the app can read aloud', () => {
  const mini = {
    steps: [{
      vocab: [{ es: 'la falda', pl: 'spódnica' }],
      theory: [{ id: 't1', examples: [{ es: 'Llevo una falda.', pl: '…' }] }],
      exercises: [
        { type: 'choice', prompt: 'Co znaczy „el gorro”?', say: 'el gorro', options: ['czapka', 'szalik'], answer: 'czapka' },
        { type: 'gap', sentence: 'Yo ___ un jersey.', answer: ['me pongo'] },
        { type: 'pairs', pairs: [['el pan', 'chleb'], ['la falda', 'spódnica'], ['el bolso', 'torebka']] },
        { type: 'sort', categories: ['zima', 'lato'], items: [['el abrigo', 'zima']] },
        { type: 'dialog', lines: ['Hola.', '¿Qué tal?', 'Bien.'] },
      ],
      test: [{ type: 'listen', say: 'las botas', options: ['👢', '👟'], answer: '👢' }],
    }],
  };
  assert.deepEqual(collectTexts(mini, getExercise), [
    'Bien.', 'el abrigo', 'el bolso', 'el gorro', 'el pan', 'Hola.', 'la falda', 'las botas',
    'Llevo una falda.', '¿Qué tal?', 'Yo me pongo un jersey.',
  ].sort((a, b) => a.localeCompare(b, 'es')));
});

test('collectTexts on the real lesson has no duplicate keys', () => {
  const texts = collectTexts(lesson, getExercise);
  assert.ok(texts.length > 100);
  assert.ok(texts.some((t) => t.startsWith('Guille es un chico alto')), 'reading passages are recorded too');
  assert.equal(new Set(texts.map(audioKey)).size, texts.length);
});

test('resolveAudio returns the file path for known texts only', () => {
  const manifest = { files: { 'la falda': 'audio/1234abcd.mp3' } };
  assert.equal(resolveAudio(manifest, ' la falda '), 'audio/1234abcd.mp3');
  assert.equal(resolveAudio(manifest, 'el gorro'), null);
  assert.equal(resolveAudio(null, 'la falda'), null);
});
