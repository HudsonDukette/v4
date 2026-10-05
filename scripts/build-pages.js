import { cpSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const outputPath = join(root, 'dist');
const ultravioletPath = join(root, 'node_modules/@titaniumnetwork-dev/ultraviolet/dist');
const ultravioletFiles = [
  'uv.bundle.js',
  'uv.client.js',
  'uv.handler.js',
  'uv.sw.js',
];

cpSync(join(root, 'public'), outputPath, { recursive: true });
mkdirSync(join(outputPath, 'uv'), { recursive: true });

for (const file of ultravioletFiles) {
  cpSync(join(ultravioletPath, file), join(outputPath, 'uv', file));
}

function rebaseLocalPaths(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      rebaseLocalPaths(path);
    } else if (/\.(html|js|css)$/.test(entry.name)) {
      const contents = readFileSync(path, 'utf8')
        .replace(/(["'`])\/(?!\/)/g, '$1./')
        .replace(/url\(\/(?!\/)/g, 'url(../');
      writeFileSync(path, contents);
    }
  }
}

rebaseLocalPaths(outputPath);
writeFileSync(join(outputPath, '.nojekyll'), '');