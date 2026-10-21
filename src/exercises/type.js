// Type the Spanish answer.
import { h, mount, promptBlock, submitButton } from '../ui/dom.js';
import { compareText } from '../core/check.js';

export const type = 'type';

export const check = (item, value) => ({
  result: compareText(value, item.answer),
  expected: item.answer[0],
  explain: item.explain,
});

export const solution = (item) => item.answer[0];

export const say = (item) => item.answer[0];

/** Text input with accent bar and a check button; Enter also submits. */
export function textAnswer(ctx, placeholder = 'Wpisz po hiszpańsku…') {
  const input = h('input', {
    class: 'text-input', type: 'text', autocomplete: 'off', autocapitalize: 'off',
    spellcheck: 'false', lang: 'es', placeholder,
  });
  const send = () => ctx.onAnswer(input.value);
  const btn = submitButton(send);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.trim()) btn.click();
  });
  return { input, block: h('div', { class: 'answer-block' }, input, ctx.accentBar(input), btn) };
}

export function render(item, el, ctx) {
  const { input, block } = textAnswer(ctx);
  mount(el, 
    promptBlock(item),
    item.say ? h('div', { class: 'say-row' }, ctx.speakButton(item.say)) : null,
    block,
  );
  ctx.focus(input);
}
