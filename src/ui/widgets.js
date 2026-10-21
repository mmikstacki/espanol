// Shared UI pieces: header, speak buttons, accent bar.
import { h } from './dom.js';
import { speak } from '../core/speech.js';

export function header(title, { back = '#/', subtitle } = {}) {
  return h('header', { class: 'topbar' },
    back ? h('a', { class: 'icon-btn', href: back, 'aria-label': 'Wróć' }, '←') : null,
    h('div', { class: 'topbar-title' }, h('h1', {}, title), subtitle ? h('p', {}, subtitle) : null));
}

/** 🔊 button (🐢 when slow) that reads Spanish text. */
export function speakButton(text, { slow = false, big = false } = {}) {
  return h('button', {
    class: `speak-btn${big ? ' big' : ''}`, type: 'button',
    'aria-label': slow ? `Powoli: ${text}` : `Posłuchaj: ${text}`,
    onclick: (e) => {
      e.stopPropagation();
      if (!speak(text, { slow })) toast('🔇 Brak hiszpańskiego głosu na tym urządzeniu – instrukcja jest na ekranie głównym.');
    },
  }, slow ? '🐢' : '🔊');
}

/** Short message at the bottom of the screen. */
export function toast(message) {
  document.querySelector('.toast')?.remove();
  const el = h('div', { class: 'toast', role: 'status' }, message);
  document.body.append(el);
  setTimeout(() => el.remove(), 4000);
}

const ACCENTS = ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'];

/** Buttons inserting Spanish characters into an input (or the input returned by a function). */
export function accentBar(target) {
  const getInput = typeof target === 'function' ? target : () => target;
  return h('div', { class: 'accent-bar', 'aria-label': 'Znaki hiszpańskie' },
    ACCENTS.map((ch) => h('button', {
      class: 'accent', type: 'button', tabindex: '-1',
      // pointerdown + preventDefault keeps focus (and the phone keyboard) in the input
      onpointerdown: (e) => e.preventDefault(),
      onclick: () => {
        const input = getInput();
        if (!input || input.disabled) return;
        const { selectionStart: a = input.value.length, selectionEnd: b = input.value.length } = input;
        input.value = input.value.slice(0, a) + ch + input.value.slice(b);
        input.setSelectionRange(a + 1, a + 1);
        input.focus();
      },
    }, ch)));
}

/** Focus without popping up the keyboard on touch screens. */
export function focusIfDesktop(input) {
  if (window.matchMedia?.('(pointer: fine)').matches) setTimeout(() => input.focus(), 50);
}

export const kindLabel = { fundament: 'Podstawy', lekcja: 'Lekcja 2', final: 'Finał' };
