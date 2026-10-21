// Sort items into categories: pick a category for each row.
import { h, mount, promptBlock, submitButton } from '../ui/dom.js';
import { shuffle } from '../core/session.js';

export const type = 'sort';

export function check(item, value) {
  const target = new Map(item.items);
  const ok = value.length === item.items.length && value.every(([text, cat]) => target.get(text) === cat);
  return {
    result: ok ? 'correct' : 'wrong',
    expected: item.categories
      .map((c) => `${c}: ${item.items.filter(([, cat]) => cat === c).map(([t]) => t).join(', ')}`)
      .join('\n'),
    explain: item.explain,
  };
}

export const solution = (item) => item.items.map(([t, c]) => [t, c]);

export const say = () => null;

export function render(item, el, ctx) {
  const choice = new Map();
  const rows = shuffle(item.items).map(([text]) => {
    const buttons = item.categories.map((cat) =>
      h('button', {
        class: 'seg', type: 'button',
        onclick: (e) => {
          choice.set(text, cat);
          buttons.forEach((b) => b.classList.toggle('chosen', b === e.currentTarget));
          btn.disabled = choice.size < item.items.length;
        },
      }, cat));
    return h('div', { class: 'sort-row' },
      h('button', { class: 'sort-text', type: 'button', lang: 'es', onclick: () => ctx.speak(text) }, text),
      h('div', { class: 'segmented' }, buttons));
  });

  const btn = submitButton(() => ctx.onAnswer(item.items.map(([text]) => [text, choice.get(text)])));
  btn.disabled = true;

  mount(el, promptBlock({ prompt: item.prompt ?? 'Przyporządkuj do grupy.' }), h('div', { class: 'sort-list' }, rows), btn);
}
