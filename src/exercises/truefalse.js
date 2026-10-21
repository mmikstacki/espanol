// True/false statement, optionally about a reading passage.
import { h, mount, promptBlock } from '../ui/dom.js';

export const type = 'truefalse';

const label = (v) => (v ? 'Prawda' : 'Fałsz');

export const check = (item, value) => ({
  result: value === item.answer ? 'correct' : 'wrong',
  expected: label(item.answer),
  explain: item.explain,
});

export const solution = (item) => item.answer;

export const say = (item) => item.statement;

export function render(item, el, ctx) {
  const passage = item.passage ? ctx.passage(item.passage) : null;
  mount(el, 
    promptBlock({ prompt: item.prompt ?? 'Prawda czy fałsz?' }),
    passage ? h('details', { class: 'passage', open: true },
      h('summary', {}, `📖 ${passage.title}`),
      h('div', { class: 'say-row' }, ctx.speakButton(passage.text), h('span', { class: 'muted small' }, 'Posłuchaj całego tekstu')),
      h('p', { lang: 'es' }, passage.text)) : null,
    h('div', { class: 'say-row' }, ctx.speakButton(item.statement), h('p', { class: 'statement', lang: 'es' }, item.statement)),
    h('div', { class: 'options two' },
      [true, false].map((v) =>
        h('button', {
          class: 'option', type: 'button', 'data-value': label(v),
          onclick: (e) => { e.currentTarget.classList.add('chosen'); ctx.onAnswer(v); },
        }, v ? '✔ Prawda' : '✘ Fałsz'))),
  );
}

export function reveal(el, res) {
  el.querySelectorAll('.option').forEach((b) => {
    if (b.dataset.value === res.expected) b.classList.add('right');
    else if (b.classList.contains('chosen')) b.classList.add('bad');
  });
}
