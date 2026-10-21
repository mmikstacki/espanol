// Tiny DOM helpers. Safe to import in Node: nothing touches `document` at import time.

/** h('button', { class: 'btn', onclick: fn }, 'Text', childEl) */
export function h(tag, props = {}, ...children) {
  const el = document.createElement(tag);
  for (const [key, value] of Object.entries(props ?? {})) {
    if (value == null || value === false) continue;
    if (key.startsWith('on') && typeof value === 'function') el.addEventListener(key.slice(2), value);
    else if (key === 'class') el.className = value;
    else if (key === 'html') el.innerHTML = value;
    else el.setAttribute(key, value === true ? '' : value);
  }
  for (const child of children.flat(Infinity)) {
    if (child == null || child === false) continue;
    el.append(child instanceof Node ? child : document.createTextNode(String(child)));
  }
  return el;
}

/** Append children, skipping null/false (native append would print "null"). */
export function mount(el, ...children) {
  el.append(...children.flat().filter((c) => c != null && c !== false));
  return el;
}

/** Prompt block shared by exercises: instruction plus optional listen button. */
export function promptBlock(item) {
  return h('div', { class: 'prompt' },
    item.prompt ? h('p', { class: 'prompt-text' }, item.prompt) : null,
    item.hint ? h('p', { class: 'prompt-hint' }, item.hint) : null,
  );
}

/** Primary "Sprawdź" button that fires once. */
export function submitButton(onClick, label = 'Sprawdź') {
  const btn = h('button', { class: 'btn btn-primary btn-block', type: 'button' }, label);
  btn.addEventListener('click', () => {
    if (btn.disabled) return;
    btn.disabled = true;
    onClick();
  });
  return btn;
}

export function lock(el) {
  el.classList.add('locked');
  // Audio buttons stay usable after answering.
  el.querySelectorAll('button:not(.speak-btn), input').forEach((b) => { b.disabled = true; });
}
