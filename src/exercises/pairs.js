// Match pairs: tap an item on the left, then its partner on the right.
import { h, mount, promptBlock } from '../ui/dom.js';
import { shuffle } from '../core/session.js';

export const type = 'pairs';

export const check = (item, value) => ({
  result: value.mistakes === 0 ? 'correct' : 'wrong',
  expected: item.pairs.map(([a, b]) => `${a} = ${b}`).join(' · '),
  explain: item.explain,
});

export const solution = () => ({ mistakes: 0 });

export const say = () => null;

export function render(item, el, ctx) {
  const partner = new Map(item.pairs);
  let selected = null;
  let mistakes = 0;
  let matched = 0;

  const left = shuffle(item.pairs.map(([a]) => a)).map((a) =>
    h('button', { class: 'option pair', type: 'button', lang: 'es', onclick: () => pickLeft(a) }, a));
  const right = shuffle(item.pairs.map(([, b]) => b)).map((b) =>
    h('button', { class: 'option pair', type: 'button', onclick: (e) => pickRight(b, e.currentTarget) }, b));
  const leftBtn = (a) => left.find((btn) => btn.textContent === a);

  function pickLeft(a) {
    left.forEach((btn) => btn.classList.toggle('chosen', btn.textContent === a));
    selected = a;
    ctx.speak(a);
  }

  function pickRight(b, btn) {
    if (!selected) return;
    if (partner.get(selected) === b) {
      [leftBtn(selected), btn].forEach((x) => { x.classList.remove('chosen'); x.classList.add('matched'); x.disabled = true; });
      selected = null;
      if (++matched === item.pairs.length) ctx.onAnswer({ mistakes });
    } else {
      mistakes++;
      btn.classList.add('shake');
      setTimeout(() => btn.classList.remove('shake'), 400);
    }
  }

  mount(el, 
    promptBlock({ prompt: item.prompt ?? 'Połącz w pary.' }),
    h('div', { class: 'pairs-grid' }, h('div', { class: 'pairs-col' }, left), h('div', { class: 'pairs-col' }, right)),
  );
}
