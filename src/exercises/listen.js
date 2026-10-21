// Listen to Spanish audio and pick what was said (word, meaning or emoji).
import { h, mount, promptBlock } from '../ui/dom.js';
import { shuffle } from '../core/session.js';
import { reveal as revealChoice } from './choice.js';

export const type = 'listen';

export const check = (item, value) => ({
  result: value === item.answer ? 'correct' : 'wrong',
  expected: item.answer,
  explain: item.explain,
});

export const solution = (item) => item.answer;

export const say = (item) => item.say;

export function render(item, el, ctx) {
  mount(el, 
    promptBlock({ prompt: item.prompt ?? 'Posłuchaj i wybierz, co słyszysz.' }),
    h('div', { class: 'listen-row' },
      ctx.speakButton(item.say, { big: true }),
      ctx.speakButton(item.say, { slow: true, big: true })),
    h('div', { class: 'options' },
      shuffle(item.options).map((opt) =>
        h('button', {
          class: 'option', type: 'button', 'data-value': opt,
          onclick: (e) => { e.currentTarget.classList.add('chosen'); ctx.onAnswer(opt); },
        }, opt))),
  );
  ctx.speak(item.say);
}

export const reveal = revealChoice;
