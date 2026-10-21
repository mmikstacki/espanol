// Records every Spanish text of the lesson as MP3 with Azure Speech (voice es-ES Elvira).
// Usage (from app/):  node tools/generate-audio.mjs [--dry-run] [--limit N]
// Needs .env.local with AZURE_SPEECH_KEY and AZURE_SPEECH_REGION (see tools/AZURE-INSTRUKCJA.md).
// Resumable: already recorded texts are skipped; the manifest is saved after every file.
import { readFile, writeFile, mkdir, unlink, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import lesson from '../content/leccion-2.js';
import { getExercise } from '../src/exercises/index.js';
import { audioKey, collectTexts } from '../src/core/audio.js';

const VOICE = 'es-ES-ElviraNeural';
const FORMAT = 'audio-24khz-48kbitrate-mono-mp3';
const PAUSE_MS = 3100; // free F0 tier: 20 requests per minute

const root = fileURLToPath(new URL('..', import.meta.url));
const audioDir = `${root}audio`;
const manifestPath = `${audioDir}/manifest.json`;
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const limit = Number(args[args.indexOf('--limit') + 1]) || Infinity;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const exists = (p) => access(p).then(() => true, () => false);
const escapeXml = (s) => s.replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]);

async function readEnv() {
  try {
    const raw = await readFile(`${root}.env.local`, 'utf8');
    return Object.fromEntries(raw.split(/\r?\n/).filter((l) => l.includes('=')).map((l) => {
      const i = l.indexOf('=');
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    }));
  } catch {
    return {};
  }
}

async function synthesize(text, { key, region }) {
  const ssml = `<speak version="1.0" xml:lang="es-ES"><voice name="${VOICE}"><prosody rate="-10%">${escapeXml(text)}</prosody></voice></speak>`;
  for (let attempt = 1; attempt <= 5; attempt++) {
    const res = await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': key,
        'Content-Type': 'application/ssml+xml',
        'X-Microsoft-OutputFormat': FORMAT,
        'User-Agent': 'espanol-app',
      },
      body: ssml,
    });
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    if (res.status === 401 || res.status === 403) throw new Error('Azure odrzuca klucz (401/403): sprawdź AZURE_SPEECH_KEY i AZURE_SPEECH_REGION w .env.local.');
    if (res.status === 429) {
      const wait = (Number(res.headers.get('retry-after')) || 10) * 1000;
      console.log(`  limit zapytań – czekam ${wait / 1000} s…`);
      await sleep(wait);
      continue;
    }
    throw new Error(`Azure ${res.status}: ${await res.text()}`);
  }
  throw new Error('Azure wciąż odrzuca zapytania (limit). Spróbuj za kilka minut – skrypt dokończy od miejsca przerwania.');
}

const texts = collectTexts(lesson, getExercise);
await mkdir(audioDir, { recursive: true });
const manifest = (await exists(manifestPath))
  ? JSON.parse(await readFile(manifestPath, 'utf8'))
  : { voice: VOICE, files: {} };

// Drop recordings of texts that are no longer in the lesson.
for (const [text, file] of Object.entries(manifest.files)) {
  if (texts.includes(text)) continue;
  delete manifest.files[text];
  await unlink(`${root}${file}`).catch(() => {});
}

const missing = [];
for (const text of texts) {
  const file = `audio/${audioKey(text)}.mp3`;
  if (manifest.files[text] === file && await exists(`${root}${file}`)) continue;
  missing.push(text);
}
const chars = missing.reduce((n, t) => n + t.length, 0);
console.log(`Teksty w lekcji: ${texts.length}. Do nagrania: ${missing.length} (${chars} znaków).`);

if (dryRun || !missing.length) {
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 1)}\n`);
  if (dryRun) missing.slice(0, 15).forEach((t) => console.log(`  • ${t}`));
  process.exit(0);
}

const env = await readEnv();
const creds = { key: env.AZURE_SPEECH_KEY, region: env.AZURE_SPEECH_REGION };
if (!creds.key || !creds.region) {
  console.error('Brak AZURE_SPEECH_KEY / AZURE_SPEECH_REGION w app/.env.local – patrz tools/AZURE-INSTRUKCJA.md');
  process.exit(1);
}

let done = 0;
for (const text of missing.slice(0, limit)) {
  const file = `audio/${audioKey(text)}.mp3`;
  await writeFile(`${root}${file}`, await synthesize(text, creds));
  manifest.files[text] = file;
  manifest.voice = VOICE;
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 1)}\n`);
  console.log(`  ${++done}/${Math.min(missing.length, limit)}  ${text}`);
  await sleep(PAUSE_MS);
}
console.log('Gotowe.');
