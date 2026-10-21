// Step hub: Słówka → Teoria → Ćwiczenia → Sprawdzian.
import { h } from './dom.js';
import { header, kindLabel } from './widgets.js';
import { isUnlocked } from '../core/progress.js';

function tile({ href, icon, title, info, done }) {
  return h('a', { class: `tile-card${done ? ' done' : ''}`, href },
    h('span', { class: 'tile-icon' }, icon),
    h('span', { class: 'tile-body' }, h('span', { class: 'tile-title' }, title), h('span', { class: 'tile-info' }, info)),
    h('span', { class: 'tile-go' }, done ? '✅' : '›'));
}

export function stepScreen(app, id) {
  const step = app.step(id);
  if (!step || step.soon || !isUnlocked(app.state, app.lesson.steps, id)) {
    return h('main', { class: 'screen' }, header('Ten krok jest jeszcze zamknięty'),
      h('p', { class: 'muted' }, 'Najpierw zalicz sprawdzian poprzedniego kroku.'),
      h('a', { class: 'btn btn-primary btn-block', href: '#/' }, 'Wróć do ścieżki'));
  }
  const rec = app.state.steps[id] ?? {};
  const known = app.state.known[id]?.length ?? 0;
  const base = `#/krok/${id}`;

  return h('main', { class: 'screen' },
    header(`${step.num}. ${step.title}`, { subtitle: `${kindLabel[step.kind]} · ${step.subtitle}` }),
    h('div', { class: 'tiles' },
      step.vocab.length ? tile({ href: `${base}/slowka`, icon: '🃏', title: '1. Słówka', info: `Znasz ${known} z ${step.vocab.length}`, done: known >= step.vocab.length }) : null,
      tile({ href: `${base}/teoria`, icon: '📘', title: `${step.vocab.length ? 2 : 1}. Teoria`, info: `${step.theory.length} krótkie karty` }),
      tile({ href: `${base}/cwiczenia`, icon: '✏️', title: `${step.vocab.length ? 3 : 2}. Ćwiczenia`, info: rec.practiceBest ? `Najlepiej: ${rec.practiceBest}% za pierwszym razem` : `${step.exercises.length} zadań, błędne wracają`, done: rec.practiceBest >= 80 }),
      tile({ href: `${base}/sprawdzian`, icon: '🎯', title: `${step.vocab.length ? 4 : 3}. Sprawdzian`, info: rec.passed ? `Zaliczony – najlepiej ${rec.best}%` : rec.attempts ? `Najlepiej ${rec.best}% – potrzeba 80%` : '10 pytań, zaliczenie od 80%', done: rec.passed })),
    h('p', { class: 'muted small' }, 'Wskazówka: idź po kolei. Do słówek i teorii możesz wracać w każdej chwili.'));
}
