// Offline support: app files are cached; network first so updates arrive quickly.
const CACHE = 'espanol-v3';
const FILES = [
  './', 'index.html', 'styles.css', 'config.js', 'manifest.webmanifest', 'icon.svg',
  'content/leccion-2.js',
  'content/leccion-2/01-osoby.js', 'content/leccion-2/02-rodzaj.js', 'content/leccion-2/03-ropa.js', 'content/leccion-2/04-przymiotnik.js', 'content/leccion-2/05-colores.js', 'content/leccion-2/06-zwrotne.js', 'content/leccion-2/07-llevar.js', 'content/leccion-2/08-demostrativos.js', 'content/leccion-2/09-numeros-100.js', 'content/leccion-2/10-numeros.js', 'content/leccion-2/11-tiendas.js', 'content/leccion-2/12-gustar.js', 'content/leccion-2/13-pronombres.js', 'content/leccion-2/14-indefinidos.js', 'content/leccion-2/15-tienda.js', 'content/leccion-2/16-cultura.js', 'content/leccion-2/17-final.js',
  'src/main.js',
  'src/core/audio.js', 'src/core/check.js', 'src/core/journal.js', 'src/core/progress.js', 'src/core/session.js', 'src/core/speech.js',
  'src/ui/dom.js', 'src/ui/widgets.js', 'src/ui/onboarding.js', 'src/ui/path.js', 'src/ui/step.js',
  'src/ui/flashcards.js', 'src/ui/theory.js', 'src/ui/session.js', 'src/ui/glossary.js',
  'src/exercises/index.js', 'src/exercises/choice.js', 'src/exercises/listen.js', 'src/exercises/type.js',
  'src/exercises/gap.js', 'src/exercises/pairs.js', 'src/exercises/order.js', 'src/exercises/dialog.js',
  'src/exercises/sort.js', 'src/exercises/table.js', 'src/exercises/truefalse.js',
];

// Recordings are cached too, so 🔊 works offline; a missing manifest is fine.
async function recordingFiles() {
  try {
    const res = await fetch('audio/manifest.json', { cache: 'no-store' });
    if (!res.ok) return [];
    return ['audio/manifest.json', ...Object.values((await res.json()).files ?? {})];
  } catch {
    return [];
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(FILES);
    await cache.addAll(await recordingFiles()).catch(() => {});
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  // Only same-origin GETs; journal requests to Google go straight to the network.
  if (request.method !== 'GET' || new URL(request.url).origin !== location.origin) return;
  event.respondWith(
    fetch(request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(request, copy));
        return res;
      })
      .catch(() => caches.match(request)),
  );
});
