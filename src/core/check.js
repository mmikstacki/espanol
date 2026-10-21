// Answer normalization and comparison. Pure functions, no DOM.

const PUNCTUATION = /[¿¡.,!?;:"“”«»]/g;

/** Lowercase, trim, collapse whitespace and drop punctuation. Keeps accents. */
export function normalize(text) {
  return String(text ?? '')
    .toLowerCase()
    .replace(PUNCTUATION, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Remove diacritics (á→a, ü→u) and turn ñ into n. */
export function stripAccents(text) {
  return String(text ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .normalize('NFC');
}

/**
 * Compare a typed answer with accepted answers.
 * @returns {'correct'|'almost'|'wrong'} almost = right word, missing accent or ñ.
 */
export function compareText(value, accepted) {
  const given = normalize(value);
  if (!given) return 'wrong';
  const list = (Array.isArray(accepted) ? accepted : [accepted]).map(normalize);
  if (list.includes(given)) return 'correct';
  const bare = stripAccents(given);
  if (list.some((a) => stripAccents(a) === bare)) return 'almost';
  return 'wrong';
}
