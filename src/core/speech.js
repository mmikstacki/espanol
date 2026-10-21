// Spanish audio: pre-recorded MP3s (audio/manifest.json) first, the browser's
// built-in Spanish voice (Web Speech API) as a fallback.
import { resolveAudio } from './audio.js';

const inBrowser = typeof window !== 'undefined';
const synth = () => (inBrowser && 'speechSynthesis' in window ? window.speechSynthesis : null);

// ---- Recordings ----

let manifest = null;
const manifestReady = inBrowser
  ? fetch('audio/manifest.json').then((r) => (r.ok ? r.json() : null)).then((m) => { manifest = m; }).catch(() => {})
  : Promise.resolve();

let player = null;

function playRecording(file, slow) {
  synth()?.cancel();
  player?.pause();
  player = new Audio(file);
  player.playbackRate = slow ? 0.7 : 1;
  return player.play();
}

/** True when the lesson's recordings are available. */
export async function hasRecordings() {
  await manifestReady;
  return Boolean(manifest && Object.keys(manifest.files ?? {}).length);
}

// ---- Browser voice (fallback) ----

let voicesPromise = null;

/** Voices load asynchronously (empty list at first on Chrome/Android). */
function voicesReady() {
  const s = synth();
  if (!s) return Promise.resolve([]);
  voicesPromise ??= new Promise((resolve) => {
    const done = () => resolve(s.getVoices());
    if (s.getVoices().length) return done();
    s.addEventListener('voiceschanged', done, { once: true });
    setTimeout(done, 2000);
  });
  return voicesPromise;
}

const NATURAL = /google|natural|neural|online|mónica|monica|premium|enhanced|siri/i;

/**
 * Best Spanish voice, or null. Never returns a voice of another language:
 * a Polish voice would read Spanish words with Polish pronunciation.
 */
export function pickVoice(voices) {
  const score = (v) => {
    const lang = v.lang.replace('_', '-').toLowerCase();
    if (!lang.startsWith('es')) return 0;
    return (lang === 'es-es' ? 10 : 5) + (NATURAL.test(v.name) ? 1 : 0);
  };
  let best = null;
  for (const v of voices) if (score(v) > (best ? score(best) : 0)) best = v;
  return best;
}

let voice = null;
voicesReady().then((voices) => { voice = pickVoice(voices); });

/** Name of the voice in use (for the path screen), or null. */
export const voiceName = () => voice?.name ?? null;

export async function hasSpanishVoice() {
  return Boolean(pickVoice(await voicesReady()));
}

export function canSpeak() {
  return Boolean(synth());
}

function speakWithVoice(text, slow) {
  const s = synth();
  if (!s) return false;
  voice ??= pickVoice(s.getVoices()); // voices may arrive before the async pick
  if (!voice) return false;
  s.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = voice.lang;
  utterance.voice = voice;
  utterance.rate = slow ? 0.6 : 0.9;
  s.speak(utterance);
  return true;
}

/**
 * Read Spanish text aloud. slow: extra slow tempo for difficult words.
 * @returns {boolean} false when neither a recording nor a Spanish voice exists.
 */
export function speak(text, { slow = false } = {}) {
  if (!text) return false;
  const file = resolveAudio(manifest, text);
  if (file) {
    // Missing or broken file (NotSupportedError): fall back to the browser voice.
    // AbortError (next sound started) and NotAllowedError (autoplay blocked) are expected.
    playRecording(file, slow).catch((err) => { if (err?.name === 'NotSupportedError') speakWithVoice(text, slow); });
    return true;
  }
  return speakWithVoice(text, slow);
}
