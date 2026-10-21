// Put dialogue lines in the right order: tap lines in sequence.
import { h, mount, promptBlock, submitButton } from '../ui/dom.js';
import { shuffle } from '../core/session.js';

export const type = 'dialog';

export const check = (item, value) => ({
  result: value.length === item.lines.length && value.every((l, i) => l === item.lines[i]) ? 'correct' : 'wrong',
  expected: item.lines.map((l, i) => `${i + 1}. ${l}`).join('\n'),
  explain: item.explain,
});

export const solution = (item) => [...item.lines];

export const say = () => null;

export function render(item, el, ctx) {
  const ordered = h('ol', { class: 'dialog-ordered' });
  const pool = h('div', { class: 'dialog-pool' });

  const lineBtn = (text) => {
    const b = h('button', { class: 'option dialog-line', type: 'button', lang: 'es' }, text);
    b.addEventListener('click', () => {
      if (b.parentElement === pool) {
        ordered.append(h('li', {}, b));
        ctx.speak(text);
      } else {
        const li = b.parentElement;
        pool.append(b);
        li.remove();
      }
      btn.disabled = pool.children.length > 0;
    });
    return b;
  };
  pool.append(...shuffle(item.lines).map(lineBtn));

  const btn = submitButton(() => ctx.onAnswer([...ordered.querySelectorAll('button')].map((b) => b.textContent)));
  btn.disabled = true;

  mount(el, 
    promptBlock({ prompt: item.prompt ?? 'Ułóż rozmowę w dobrej kolejności. Stuknij kwestie po kolei.' }),
    ordered, pool, btn,
  );
}
