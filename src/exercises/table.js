// Fill a conjugation table: one input per row.
import { h, mount, promptBlock, submitButton } from '../ui/dom.js';
import { compareText } from '../core/check.js';

export const type = 'table';

export function check(item, value) {
  const cells = item.rows.map(([, answer], i) => compareText(value[i] ?? '', String(answer).split('|')));
  const result = cells.includes('wrong') ? 'wrong' : cells.includes('almost') ? 'almost' : 'correct';
  return {
    result,
    cells,
    expected: item.rows.map(([label, answer]) => `${label} → ${String(answer).split('|')[0]}`).join('\n'),
    explain: item.explain,
  };
}

export const solution = (item) => item.rows.map(([, answer]) => String(answer).split('|')[0]);

export const say = () => null;

export function render(item, el, ctx) {
  let active = null;
  const inputs = item.rows.map(() => {
    const input = h('input', { class: 'text-input cell', type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', lang: 'es' });
    input.addEventListener('focus', () => { active = input; });
    return input;
  });
  const btn = submitButton(() => ctx.onAnswer(inputs.map((i) => i.value)));

  mount(el, 
    promptBlock({ prompt: item.prompt ?? 'Uzupełnij tabelę.', hint: item.hint }),
    h('table', { class: 'conj' },
      item.title ? h('caption', { lang: 'es' }, item.title) : null,
      h('tbody', {}, item.rows.map(([label], i) => h('tr', {}, h('th', { lang: 'es' }, label), h('td', {}, inputs[i]))))),
    ctx.accentBar(() => active ?? inputs[0]),
    btn,
  );
  ctx.focus(inputs[0]);
}

export function reveal(el, res) {
  el.querySelectorAll('input.cell').forEach((input, i) => input.classList.add(`cell-${res.cells[i]}`));
}
