// Build a sentence from word tiles.
import { h, mount, promptBlock, submitButton } from '../ui/dom.js';
import { compareText } from '../core/check.js';
import { shuffle } from '../core/session.js';

export const type = 'order';

export const check = (item, value) => ({
  result: compareText(value, [item.answer]),
  expected: item.answer,
  explain: item.explain,
});

export const solution = (item) => item.answer;

export const say = (item) => item.answer;

export function render(item, el, ctx) {
  const words = [...item.answer.split(/\s+/), ...(item.extra ?? [])];
  const line = h('div', { class: 'tile-line', 'aria-label': 'Twoje zdanie' });
  const bank = h('div', { class: 'tile-bank' });

  const tile = (word) => {
    const t = h('button', { class: 'tile', type: 'button', lang: 'es' }, word);
    t.addEventListener('click', () => {
      (t.parentElement === bank ? line : bank).append(t);
      btn.disabled = line.children.length === 0;
    });
    return t;
  };
  bank.append(...shuffle(words).map(tile));

  const btn = submitButton(() => ctx.onAnswer([...line.children].map((t) => t.textContent).join(' ')));
  btn.disabled = true;

  mount(el, promptBlock({ prompt: item.prompt ?? 'Ułóż zdanie.', hint: item.hint }), line, bank, btn);
}
