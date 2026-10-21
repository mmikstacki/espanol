// Multiple choice: tap one option.
import { h, mount, promptBlock } from '../ui/dom.js';
import { shuffle } from '../core/session.js';

export const type = 'choice';

export const check = (item, value) => ({
  result: value === item.answer ? 'correct' : 'wrong',
  expected: item.answer,
  explain: item.explain,
});

export const solution = (item) => item.answer;

// esOptions: options are Spanish, so read the right one aloud after answering.
export const say = (item) => item.say ?? (item.esOptions ? item.answer : null);

export function render(item, el, ctx) {
  const options = h('div', { class: 'options' },
    shuffle(item.options).map((opt) =>
      h('button', {
        class: 'option', type: 'button', 'data-value': opt,
        onclick: (e) => { e.currentTarget.classList.add('chosen'); ctx.onAnswer(opt); },
      }, opt)));
  mount(el, 
    promptBlock(item),
    item.say ? h('div', { class: 'say-row' }, ctx.speakButton(item.say)) : null,
    options,
  );
}

/** Highlight the right option (and the wrong pick) after checking. */
export function reveal(el, res) {
  el.querySelectorAll('.option').forEach((b) => {
    if (b.dataset.value === res.expected) b.classList.add('right');
    else if (b.classList.contains('chosen')) b.classList.add('bad');
  });
}
