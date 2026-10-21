// Flashcards: emoji + Spanish with audio on the front, Polish on the back.
import { h } from './dom.js';
import { header, speakButton } from './widgets.js';
import { markKnown } from '../core/progress.js';

export function flashcardsScreen(app, id) {
  const step = app.step(id);
  if (!step) return h('main', { class: 'screen' }, header('Nie ma takiego kroku'));
  const knownAtStart = new Set(app.state.known[id] ?? []);
  // Unknown words first, then the rest for review.
  let deck = [...step.vocab.filter((v) => !knownAtStart.has(v.es)), ...step.vocab.filter((v) => knownAtStart.has(v.es))];

  const body = h('div', { class: 'flash-area' });
  const counter = h('p', { class: 'muted center-text' });

  function show() {
    const known = app.state.known[id]?.length ?? 0;
    counter.textContent = `Znasz ${known} z ${step.vocab.length}`;
    const card = deck[0];
    if (!card) {
      body.replaceChildren(
        h('div', { class: 'hero' }, '🎉'),
        h('p', { class: 'center-text' }, 'Przejrzałeś wszystkie słówka!'),
        h('a', { class: 'btn btn-primary btn-block', href: `#/krok/${id}/teoria` }, 'Dalej: teoria →'),
        h('button', { class: 'btn btn-ghost btn-block', type: 'button', onclick: () => { deck = [...step.vocab]; show(); } }, 'Przejrzyj jeszcze raz'));
      return;
    }
    const back = h('div', { class: 'flash-back', hidden: true },
      h('p', { class: 'flash-pl' }, card.pl),
      card.note ? h('p', { class: 'muted small' }, card.note) : null);
    const hintTap = h('p', { class: 'muted small' }, 'Stuknij kartę, żeby zobaczyć tłumaczenie');
    const flip = () => { back.hidden = false; hintTap.hidden = true; };
    body.replaceChildren(
      h('div', { class: 'flash-card', role: 'button', tabindex: '0', onclick: flip, onkeydown: (e) => { if (e.key === 'Enter' || e.key === ' ') flip(); } },
        h('p', { class: 'muted small' }, card.group ?? ''),
        card.emoji ? h('div', { class: 'flash-emoji' }, card.emoji) : null,
        h('p', { class: 'flash-es', lang: 'es' }, card.es),
        h('div', { class: 'speak-row' }, speakButton(card.es, { big: true }), speakButton(card.es, { slow: true, big: true })),
        hintTap, back),
      h('div', { class: 'two-buttons' },
        h('button', { class: 'btn btn-ghost', type: 'button', onclick: () => { deck = [...deck.slice(1), card]; show(); } }, '🔁 Jeszcze nie'),
        h('button', { class: 'btn btn-primary', type: 'button', onclick: () => { app.setState(markKnown(app.state, id, card.es)); deck = deck.slice(1); show(); } }, '✓ Znam')));
    app.speak(card.es);
  }

  show();
  return h('main', { class: 'screen' }, header(`Słówka: ${step.title}`, { back: `#/krok/${id}` }), counter, body);
}
