// App start: state, journal sync, hash router.
import lesson from '../content/leccion-2.js';
import { JOURNAL_URL } from '../config.js';
import { loadState, saveState, mergeRemote } from './core/progress.js';
import { createJournal } from './core/journal.js';
import { speak } from './core/speech.js';
import { onboardingScreen } from './ui/onboarding.js';
import { pathScreen } from './ui/path.js';
import { stepScreen } from './ui/step.js';
import { flashcardsScreen } from './ui/flashcards.js';
import { theoryScreen } from './ui/theory.js';
import { sessionScreen } from './ui/session.js';
import { glossaryScreen } from './ui/glossary.js';

const storage = (() => { try { return window.localStorage; } catch { return null; } })();
let state = loadState(storage);

const app = {
  lesson,
  get state() { return state; },
  setState(next) { state = next; saveState(storage, state); },
  step: (id) => lesson.steps.find((s) => s.id === id),
  speak,
  go: (hash) => { location.hash = hash; },
};

app.journal = createJournal({ url: JOURNAL_URL, getState: () => state, setState: (s) => app.setState(s) });

const routes = [
  [/^#\/start$/, () => onboardingScreen(app)],
  [/^#\/slowniczek$/, () => glossaryScreen(app)],
  [/^#\/krok\/([\w-]+)\/slowka$/, (id) => flashcardsScreen(app, id)],
  [/^#\/krok\/([\w-]+)\/teoria(?:\/([\w-]+))?$/, (id, card) => theoryScreen(app, id, card)],
  [/^#\/krok\/([\w-]+)\/cwiczenia$/, (id) => sessionScreen(app, id, 'practice')],
  [/^#\/krok\/([\w-]+)\/sprawdzian$/, (id) => sessionScreen(app, id, 'test')],
  [/^#\/krok\/([\w-]+)$/, (id) => stepScreen(app, id)],
  [/^#?\/?$/, () => pathScreen(app)],
];

function render() {
  if (!state.name && location.hash !== '#/start') return app.go('#/start');
  const hash = location.hash || '#/';
  const root = document.getElementById('app');
  for (const [pattern, screen] of routes) {
    const match = hash.match(pattern);
    if (match) {
      root.replaceChildren(screen(...match.slice(1)));
      window.scrollTo(0, 0);
      return;
    }
  }
  app.go('#/');
}

/** Pull test results from the sheet so phone and computer show the same path. */
app.sync = async () => {
  await app.journal.flush();
  const remote = await app.journal.pull(state.name);
  if (!remote) return;
  const before = JSON.stringify(state.steps);
  app.setState(mergeRemote(state, remote));
  if (JSON.stringify(state.steps) !== before && (location.hash === '#/' || !location.hash)) render();
};

window.addEventListener('hashchange', render);
window.addEventListener('online', () => app.journal.flush());
render();
app.sync();

if ('serviceWorker' in navigator && location.protocol === 'https:') {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}
