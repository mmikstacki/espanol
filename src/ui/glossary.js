// Glossary: all words from unlocked steps, searchable, with audio.
import { h } from './dom.js';
import { header, speakButton } from './widgets.js';
import { isUnlocked } from '../core/progress.js';
import { stripAccents } from '../core/check.js';

const fold = (s) => stripAccents(s.toLowerCase());

export function glossaryScreen(app) {
  const steps = app.lesson.steps.filter((s) => !s.soon && s.vocab.length && isUnlocked(app.state, app.lesson.steps, s.id));
  const list = h('div', { class: 'glossary' });
  const search = h('input', { class: 'text-input', type: 'search', placeholder: 'Szukaj po polsku lub hiszpańsku…', lang: 'es' });

  function draw() {
    const q = fold(search.value.trim());
    list.replaceChildren(...steps.map((step) => {
      const words = step.vocab.filter((v) => !q || fold(v.es).includes(q) || fold(v.pl).includes(q));
      if (!words.length) return null;
      return h('section', {},
        h('h2', { class: 'gloss-step' }, `${step.num}. ${step.title}`),
        words.map((v) => h('div', { class: 'gloss-row' },
          speakButton(v.es),
          h('span', { class: 'gloss-emoji' }, v.emoji ?? ''),
          h('span', { class: 'gloss-es', lang: 'es' }, v.es),
          h('span', { class: 'gloss-pl' }, v.pl))));
    }).filter(Boolean));
    if (!list.children.length) list.append(h('p', { class: 'muted' }, 'Nic nie znaleziono.'));
  }
  search.addEventListener('input', draw);
  draw();

  return h('main', { class: 'screen' }, header('📖 Słowniczek', { subtitle: 'Słówka z odblokowanych kroków' }), search, list);
}
