// Fill the gap ("___") in a sentence: typed, or picked from options.
import { h, mount, promptBlock } from '../ui/dom.js';
import { compareText } from '../core/check.js';
import { shuffle } from '../core/session.js';
import { textAnswer } from './type.js';
import { reveal as revealChoice } from './choice.js';

export const type = 'gap';

export function check(item, value) {
  const result = item.options
    ? (item.answer.includes(value) ? 'correct' : 'wrong')
    : compareText(value, item.answer);
  return { result, expected: item.answer[0], explain: item.explain };
}

export const solution = (item) => item.answer[0];

// item.say overrides the filled sentence (e.g. "45 = cuarenta ___ cinco"); arrows read as pauses.
export const say = (item) => item.say ?? item.sentence.replace('___', item.answer[0]).replace(/\s*→\s*/g, ', ');

function sentenceEl(item) {
  const [before, after] = item.sentence.split('___');
  return h('p', { class: 'gap-sentence', lang: 'es' }, before, h('span', { class: 'gap-blank' }, '____'), after);
}

export function render(item, el, ctx) {
  mount(el, promptBlock(item), sentenceEl(item));
  if (item.options) {
    mount(el, h('div', { class: 'options' },
      shuffle(item.options).map((opt) =>
        h('button', {
          class: 'option', type: 'button', 'data-value': opt, lang: 'es',
          onclick: (e) => { e.currentTarget.classList.add('chosen'); ctx.onAnswer(opt); },
        }, opt))));
  } else {
    const { input, block } = textAnswer(ctx, 'Wpisz brakujące słowo…');
    mount(el, block);
    ctx.focus(input);
  }
}

export const reveal = revealChoice;
