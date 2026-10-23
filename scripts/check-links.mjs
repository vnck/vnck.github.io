// Scans the built site (dist/) for internal links, images, scripts and stylesheets that point at
// nothing, and for #fragments that match no id on the target page.
//
//   pnpm build && pnpm check:links
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
if (!existsSync(dist)) {
  console.error('dist/ not found; run pnpm build first.');
  process.exit(1);
}

const pages = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const file = path.join(dir, name);
    if (statSync(file).isDirectory()) walk(file);
    else if (name.endsWith('.html')) pages.push(file);
  }
})(dist);

const idsCache = new Map();
const idsOf = (file) => {
  if (!idsCache.has(file)) {
    const ids = new Set();
    for (const m of readFileSync(file, 'utf8').matchAll(/\sid=["']?([^\s"'>]+)/g)) ids.add(m[1]);
    idsCache.set(file, ids);
  }
  return idsCache.get(file);
};

// Maps a URL path to the file the host would serve for it, or null.
function resolve(urlPath) {
  const target = path.join(dist, decodeURIComponent(urlPath));
  if (!target.startsWith(dist)) return null;
  if (existsSync(target) && statSync(target).isFile()) return target;
  const index = path.join(target, 'index.html');
  return existsSync(index) ? index : null;
}

const problems = [];
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const pageUrl = '/' + path.relative(dist, page).replace(/index\.html$/, '');
  for (const m of html.matchAll(/\s(?:href|src)=["']([^"']+)["']/g)) {
    const ref = m[1];
    if (/^([a-z][a-z0-9+.-]*:|\/\/)/i.test(ref)) continue; // external, mailto:, data:, ...
    const [withoutHash, hash] = ref.split('#');
    const [urlPath] = withoutHash.split('?');
    const abs = urlPath === '' ? pageUrl : new URL(urlPath, `http://x${pageUrl}`).pathname;
    const file = resolve(abs);
    if (!file) problems.push(`${pageUrl}  ->  ${ref}  (no such file)`);
    else if (hash && file.endsWith('.html') && !idsOf(file).has(decodeURIComponent(hash))) {
      problems.push(`${pageUrl}  ->  ${ref}  (no element with that id)`);
    }
  }
}

if (problems.length) {
  console.error(`${problems.length} broken link(s):\n` + [...new Set(problems)].map(p => '  ' + p).join('\n'));
  process.exit(1);
}
console.log(`Checked ${pages.length} pages: no broken internal links.`);
