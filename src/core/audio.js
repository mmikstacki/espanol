// Pre-recorded MP3s: which texts need audio and where their files live.
// Shared by the app (playback) and tools/generate-audio.mjs (recording).

const clean = (text) => String(text).trim().normalize('NFC');

/** File key for a text: FNV-1a 32-bit hash as 8 hex chars. */
export function audioKey(text) {
  let hash = 0x811c9dc5;
  for (const ch of clean(text)) {
    hash ^= ch.codePointAt(0);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash.toString(16).padStart(8, '0');
}

/** Every Spanish text the app can read aloud, unique and sorted. */
export function collectTexts(lesson, getExercise) {
  const texts = new Set();
  const add = (t) => { if (t && String(t).trim()) texts.add(clean(t)); };
  for (const step of lesson.steps) {
    step.vocab.forEach((v) => add(v.es));
    step.theory.forEach((card) => (card.examples ?? []).forEach((ex) => add(ex.es)));
    Object.values(step.passages ?? {}).forEach((p) => add(p.text));
    for (const item of [...step.exercises, ...step.test]) {
      add(item.say);
      add(getExercise(item.type).say(item));
      if (item.type === 'pairs') item.pairs.forEach(([es]) => add(es));
      if (item.type === 'sort') item.items.forEach(([es]) => add(es));
      if (item.type === 'dialog') item.lines.forEach(add);
    }
  }
  return [...texts].sort((a, b) => a.localeCompare(b, 'es'));
}

/** Path of the recording for a text, or null when it was not recorded. */
export const resolveAudio = (manifest, text) => manifest?.files?.[clean(text)] ?? null;
