// Home screen: the 17-step learning path.
import { h } from './dom.js';
import { kindLabel } from './widgets.js';
import { isUnlocked, currentStep } from '../core/progress.js';
import { hasSpanishVoice, hasRecordings, canSpeak, voiceName } from '../core/speech.js';

function stepRow(app, step, current) {
  const record = app.state.steps[step.id];
  const unlocked = isUnlocked(app.state, app.lesson.steps, step.id);
  const status = record?.passed ? 'done' : step.id === current?.id ? 'current' : step.soon && unlocked ? 'soon' : unlocked ? 'open' : 'locked';
  const icon = { done: '✅', current: '▶️', open: '▶️', soon: '🕓', locked: '🔒' }[status];
  const meta = record?.passed ? `${record.best}%` : status === 'soon' ? 'wkrótce' : '';

  const inner = [
    h('span', { class: 'step-num' }, step.num),
    h('span', { class: 'step-body' },
      h('span', { class: `kind kind-${step.kind}` }, kindLabel[step.kind]),
      h('span', { class: 'step-title' }, step.title),
      h('span', { class: 'step-sub' }, step.subtitle)),
    h('span', { class: 'step-status' }, icon, meta ? h('small', {}, meta) : null),
  ];
  const clickable = unlocked && !step.soon;
  return h('li', { class: `step step-${status}` },
    clickable ? h('a', { class: 'step-link', href: `#/krok/${step.id}` }, inner) : h('div', { class: 'step-link', 'aria-disabled': 'true' }, inner));
}

export function pathScreen(app) {
  const steps = app.lesson.steps;
  const passed = steps.filter((s) => app.state.steps[s.id]?.passed).length;
  const current = currentStep(app.state, steps);
  const streak = app.state.streak?.count ?? 0;

  const voiceNote = h('div', { class: 'notice', hidden: true });
  const voiceInfo = h('span');
  Promise.all([hasRecordings(), hasSpanishVoice()]).then(([recorded, ok]) => {
    voiceInfo.textContent = recorded ? ' Głos: nagrania (Elvira, Hiszpania).' : ok ? ` Głos: ${voiceName()}.` : ' Brak hiszpańskiego głosu.';
    if (recorded || ok) return;
    voiceNote.hidden = false;
    voiceNote.append(canSpeak()
      ? 'Brak hiszpańskiego głosu na tym urządzeniu, więc 🔊 nie zadziała. Android: Ustawienia → Zamiana tekstu na mowę → zainstaluj hiszpański. iPhone: Ustawienia → Dostępność → Treść mówiona → Głosy → Español. Komputer: otwórz aplikację w Chrome albo dodaj głos w Windows: Ustawienia → Czas i język → Mowa → Dodaj głosy → Español (España).'
      : 'Ta przeglądarka nie umie czytać na głos. Spróbuj w Chrome albo Safari.');
  });

  return h('main', { class: 'screen' },
    h('header', { class: 'home-head' },
      h('div', {},
        h('p', { class: 'muted' }, `¡Hola, ${app.state.name}!`),
        h('h1', {}, '¿Qué me pongo hoy?')),
      h('div', { class: 'streak', title: 'Dni nauki z rzędu' }, `🔥 ${streak}`)),
    h('div', { class: 'progress-wrap' },
      h('div', { class: 'progress' }, h('div', { class: 'progress-bar', style: `width:${(100 * passed) / steps.length}%` })),
      h('span', { class: 'muted' }, `${passed}/${steps.length}`)),
    voiceNote,
    current
      ? h('a', { class: 'btn btn-primary btn-block', href: `#/krok/${current.id}` }, `▶️ Ucz się dalej: ${current.num}. ${current.title}`)
      : passed < steps.length
        ? h('div', { class: 'notice' }, '🎉 Wszystko, co gotowe, masz zaliczone! Kolejne kroki są w przygotowaniu. Do tego czasu powtarzaj słówka i rób sprawdziany jeszcze raz.')
        : null,
    h('a', { class: 'btn btn-ghost btn-block', href: '#/slowniczek' }, '📖 Słowniczek'),
    h('ol', { class: 'path' }, steps.map((s) => stepRow(app, s, current))),
    h('footer', { class: 'foot muted' }, `Uczysz się jako ${app.state.name}. `,
      h('a', { href: '#/start' }, 'Zmień imię'), voiceInfo));
}
