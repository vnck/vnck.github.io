// Scaffolds a post with frontmatter in the standard order, plus its asset folder.
//
//   pnpm new <writings|projects|journal> <slug> ["Title"] [--draft]
//
// --draft puts the file in _drafts/, which is gitignored and left out of the build.
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const draft = args.includes('--draft');
const [collection, slug, title] = args.filter(a => a !== '--draft');

if (!['writings', 'projects', 'journal'].includes(collection) || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug ?? '')) {
  console.error('Usage: pnpm new <writings|projects|journal> <kebab-case-slug> ["Title"] [--draft]');
  process.exit(1);
}

const now = new Date();
const pad = n => String(n).padStart(2, '0');
const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
const name = `${date}-${slug}`;

const dir = path.join('src/content', collection, draft ? '_drafts' : '');
const file = path.join(dir, `${name}.md`);
if (existsSync(file)) {
  console.error(`${file} already exists.`);
  process.exit(1);
}

const label = (title ?? slug.replaceAll('-', ' ').replace(/^./, c => c.toUpperCase())).replaceAll('"', '\\"');
mkdirSync(dir, { recursive: true });
writeFileSync(file, `---\ntitle: "${label}"\ndate: ${date}\ndescription: ""\ntags: []\n---\n\n`);
console.log(`Created ${file}`);

if (collection !== 'journal') {
  const assets = path.join('public/assets/posts', name);
  mkdirSync(assets, { recursive: true });
  console.log(`Created ${assets}/  (reference images as /assets/posts/${name}/<file>.webp)`);
}
