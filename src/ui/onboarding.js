// First launch: ask for the learner's name (identifies rows in the journal).
import { h } from './dom.js';

export function onboardingScreen(app) {
  const input = h('input', {
    class: 'text-input', type: 'text', placeholder: 'Twoje imię', autocomplete: 'given-name',
    maxlength: '30', value: app.state.name || '',
  });
  const start = () => {
    const name = input.value.trim();
    if (!name) { input.focus(); return; }
    app.setState({ ...app.state, name });
    app.sync();
    app.go('#/');
  };
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') start(); });

  return h('main', { class: 'screen center' },
    h('div', { class: 'hero' }, '¡Hola! 👋'),
    h('h1', {}, 'Hiszpański: ¿Qué me pongo hoy?'),
    h('p', { class: 'muted' }, 'Krok po kroku przez Lekcję 2: słówka, zasady, ćwiczenia i sprawdziany. Każde hiszpańskie słowo możesz odsłuchać 🔊.'),
    h('label', { class: 'field' }, h('span', {}, 'Jak masz na imię?'), input),
    h('button', { class: 'btn btn-primary btn-block', type: 'button', onclick: start }, 'Zaczynamy ¡Vamos!'));
}
