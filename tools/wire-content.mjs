// Connects step files from content/leccion-2/NN-id.js to the lesson index and
// to the service worker cache list. Run from app/: node tools/wire-content.mjs
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const indexPath = `${root}content/leccion-2.js`;
const swPath = `${root}sw.js`;

const files = (await readdir(`${root}content/leccion-2`)).filter((f) => /^\d\d-[\w-]+\.js$/.test(f)).sort();
const camel = (id) => id.replace(/-(\w)/g, (_, c) => c.toUpperCase());

let index = await readFile(indexPath, 'utf8');
for (const file of files) {
  const id = file.slice(3, -3);
  const name = camel(id);
  const importLine = `import ${name} from './leccion-2/${file}';`;
  if (!index.includes(importLine)) {
    // After the last existing step import.
    const lastImport = [...index.matchAll(/^import \w+ from '\.\/leccion-2\/[^']+';$/gm)].at(-1);
    const at = lastImport.index + lastImport[0].length;
    index = `${index.slice(0, at)}\n${importLine}${index.slice(at)}`;
  }
  // Replace the placeholder soon('id', …) line with the real step.
  index = index
    .split('\n')
    .map((line) => (line.trimStart().startsWith(`soon('${id}',`) ? `  ${name},` : line))
    .join('\n');
}
await writeFile(indexPath, index);

let sw = await readFile(swPath, 'utf8');
const stepLine = `  ${files.map((f) => `'content/leccion-2/${f}'`).join(', ')},`;
sw = sw.split('\n').map((line) => (line.trimStart().startsWith("'content/leccion-2/") ? stepLine : line)).join('\n');
await writeFile(swPath, sw);

console.log(`Podłączone kroki: ${files.join(', ')}`);
