// Theory cards: one rule per card, examples with audio.
import { h } from './dom.js';
import { header, speakButton } from './widgets.js';

export function theoryScreen(app, id, cardId) {
  const step = app.step(id);
  if (!step?.theory.length) return h('main', { class: 'screen' }, header('Brak teorii', { back: `#/krok/${id}` }));
  const index = Math.max(0, step.theory.findIndex((t) => t.id === cardId));
  const card = step.theory[index];
  const next = step.theory[index + 1];
  const prev = step.theory[index - 1];

  const content = h('div', { class: 'theory-html' });
  content.innerHTML = card.html; // authored content from content/leccion-2.js

  return h('main', { class: 'screen' },
    header(card.title, { back: `#/krok/${id}`, subtitle: `Teoria ${index + 1}/${step.theory.length} · ${step.title}` }),
    h('article', { class: 'card theory' },
      content,
      card.examples?.length ? h('div', { class: 'examples' },
        h('p', { class: 'examples-title' }, 'Przykłady – stuknij 🔊'),
        card.examples.map((ex) => h('div', { class: 'example' },
          speakButton(ex.es),
          h('div', {}, h('p', { class: 'ex-es', lang: 'es' }, ex.es), h('p', { class: 'ex-pl' }, ex.pl))))) : null),
    h('div', { class: 'two-buttons' },
      prev ? h('a', { class: 'btn btn-ghost', href: `#/krok/${id}/teoria/${prev.id}` }, '← Wstecz') : h('span'),
      next
        ? h('a', { class: 'btn btn-primary', href: `#/krok/${id}/teoria/${next.id}` }, 'Dalej →')
        : h('a', { class: 'btn btn-primary', href: `#/krok/${id}/cwiczenia` }, 'Do ćwiczeń ✏️')));
}
