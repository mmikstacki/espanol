// Practice and test sessions: one exercise per screen, instant feedback, result + journal.
import { h, lock } from './dom.js';
import { header, speakButton, accentBar, focusIfDesktop } from './widgets.js';
import { getExercise } from '../exercises/index.js';
import { createSession, pickTest, isPassed, PASS_THRESHOLD } from '../core/session.js';
import { recordResult, isUnlocked, today } from '../core/progress.js';
import { buildEntry } from '../core/journal.js';

const FEEDBACK = {
  correct: { icon: '✅', text: ['Dobrze!', '¡Muy bien!', 'Super!', '¡Perfecto!'] },
  almost: { icon: '🟡', text: ['Prawie! Uważaj na akcent albo ñ.'] },
  wrong: { icon: '❌', text: ['Jeszcze nie.'] },
};
const pick = (list) => list[Math.floor(Math.random() * list.length)];

export function sessionScreen(app, id, mode) {
  const step = app.step(id);
  if (!step || step.soon || !isUnlocked(app.state, app.lesson.steps, id)) {
    app.go('#/');
    return h('div');
  }
  const isTest = mode === 'test';
  const items = isTest ? pickTest(step.test, 10) : step.exercises;
  const session = createSession(items, { mode });
  const checks = new Map(); // item -> last check result (for the mistakes list)
  const startedAt = Date.now();

  const bar = h('div', { class: 'progress-bar' });
  const stage = h('div', { class: 'stage' });
  const screen = h('main', { class: 'screen session' },
    header(isTest ? `Sprawdzian: ${step.title}` : `Ćwiczenia: ${step.title}`, { back: `#/krok/${id}` }),
    h('div', { class: 'progress' }, bar),
    stage);

  function showItem() {
    const { done, total } = session.progress();
    bar.style.width = `${(100 * done) / total}%`;
    const item = session.current();
    if (!item) return finish();

    const ex = getExercise(item.type);
    const card = h('section', { class: 'card exercise' });
    let answered = false;
    const ctx = {
      speak: app.speak,
      speakButton,
      accentBar,
      focus: focusIfDesktop,
      passage: (pid) => step.passages?.[pid] ?? null,
      onAnswer(value) {
        if (answered) return;
        answered = true;
        const res = ex.check(item, value);
        checks.set(item, res);
        lock(card);
        ex.reveal?.(card, res);
        stage.append(feedback(item, ex, res));
      },
    };
    ex.render(item, card, ctx);
    stage.replaceChildren(card);
  }

  function feedback(item, ex, res) {
    const f = FEEDBACK[res.result];
    const sayText = ex.say(item);
    if (sayText && res.result !== 'wrong') app.speak(sayText);
    const showSolution = res.result !== 'correct';
    const next = h('button', {
      class: 'btn btn-primary btn-block', type: 'button',
      onclick: () => { session.answer(res.result); showItem(); },
    }, 'Dalej →');
    const panel = h('div', { class: `feedback fb-${res.result}`, role: 'status' },
      h('p', { class: 'fb-head' }, `${f.icon} ${pick(f.text)}`),
      showSolution ? h('div', { class: 'fb-solution' },
        h('p', { class: 'muted small' }, 'Poprawnie:'),
        h('p', { class: 'fb-expected', lang: 'es' }, res.expected),
        sayText ? speakButton(sayText) : null) : null,
      // In the test the explanation waits for the result screen.
      !isTest && res.result === 'wrong' ? h('p', { class: 'fb-explain' }, `💡 ${res.explain}`) : null,
      !isTest && res.result === 'wrong' && item.theory ? h('a', { class: 'small', href: `#/krok/${id}/teoria/${item.theory}` }, '📘 Zobacz teorię') : null,
      next);
    setTimeout(() => { next.focus({ preventScroll: true }); panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 50);
    return panel;
  }

  function finish() {
    const sum = session.summary();
    const passed = isTest && isPassed(sum.percent);
    const wasPassed = app.state.steps[id]?.passed;
    app.setState(recordResult(app.state, id, { mode, percent: sum.percent, today: today() }));
    app.journal.log(buildEntry({
      name: app.state.name, step, mode, percent: sum.percent, passed,
      mistakes: sum.mistakes, seconds: (Date.now() - startedAt) / 1000,
    }));
    bar.style.width = '100%';
    stage.replaceChildren(isTest ? testResult(sum, passed, wasPassed) : practiceResult(sum));
  }

  function practiceResult(sum) {
    return h('section', { class: 'card result' },
      h('div', { class: 'hero' }, sum.percent >= PASS_THRESHOLD ? '💪' : '🙂'),
      h('h2', {}, 'Ćwiczenia ukończone!'),
      h('p', {}, `Za pierwszym razem dobrze: ${sum.firstTryCorrect} z ${sum.total} (${sum.percent}%).`),
      h('p', { class: 'muted' }, sum.percent >= PASS_THRESHOLD
        ? 'Jesteś gotowy na sprawdzian.'
        : 'Możesz przejść do sprawdzianu albo poćwiczyć jeszcze raz – za drugim razem pójdzie lepiej.'),
      h('a', { class: 'btn btn-primary btn-block', href: `#/krok/${id}/sprawdzian` }, '🎯 Sprawdzian'),
      h('button', { class: 'btn btn-ghost btn-block', type: 'button', onclick: () => app.go(`#/krok/${id}`) }, 'Wróć do kroku'));
  }

  function testResult(sum, passed, wasPassed) {
    const nextStep = app.lesson.steps[step.num];
    return h('section', { class: 'card result' },
      h('div', { class: 'hero' }, passed ? '🎉' : '📚'),
      h('h2', {}, `${sum.percent}%`),
      h('p', {}, passed
        ? (wasPassed ? 'Zaliczone ponownie!' : `Zaliczone! ${nextStep ? `Odblokowałeś krok ${nextStep.num}: ${nextStep.title}.` : 'To był ostatni krok!'}`)
        : `Jeszcze nie – potrzeba ${PASS_THRESHOLD}%. Popraw błędy poniżej i spróbuj ponownie.`),
      sum.mistakes.length ? h('div', { class: 'mistakes' },
        h('h3', {}, 'Do poprawy:'),
        sum.mistakes.map((item) => {
          const res = checks.get(item);
          return h('div', { class: 'mistake' },
            h('p', { class: 'mistake-q' }, item.prompt ?? item.sentence ?? item.statement ?? (item.say ? `🔊 ${item.say}` : '')),
            h('p', { class: 'mistake-a', lang: 'es' }, `✔ ${res?.expected ?? ''}`),
            h('p', { class: 'small' }, `💡 ${item.explain}`),
            item.theory ? h('a', { class: 'small', href: `#/krok/${id}/teoria/${item.theory}` }, '📘 Teoria') : null);
        })) : null,
      passed
        ? h('a', { class: 'btn btn-primary btn-block', href: '#/' }, 'Dalej na ścieżce →')
        : h('a', { class: 'btn btn-primary btn-block', href: `#/krok/${id}/cwiczenia` }, '✏️ Poćwicz jeszcze'),
      h('button', { class: 'btn btn-ghost btn-block', type: 'button', onclick: () => location.reload() }, '🔁 Nowy sprawdzian'));
  }

  showItem();
  return screen;
}
