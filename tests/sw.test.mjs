import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

const root = new URL('../', import.meta.url);

async function jsFiles(dir) {
  const entries = await readdir(new URL(dir, root), { withFileTypes: true, recursive: true });
  return entries
    .filter((e) => e.isFile() && e.name.endsWith('.js'))
    .map((e) => `${e.parentPath ?? e.path}/${e.name}`.replace(/\\/g, '/'))
    .map((p) => p.slice(p.indexOf(`${dir}/`)));
}

test('service worker caches every app module', async () => {
  const sw = await readFile(new URL('sw.js', root), 'utf8');
  const files = [...(await jsFiles('src')), ...(await jsFiles('content'))];
  for (const f of files) assert.ok(sw.includes(`'${f}'`), `sw.js nie cache'uje ${f}`);
});
