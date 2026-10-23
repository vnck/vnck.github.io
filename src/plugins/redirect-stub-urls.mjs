import { readdirSync, readFileSync } from 'node:fs';
import { deriveSlug } from '../utils/slug.ts';

// Pages that only forward to a post living elsewhere (frontmatter redirect_to). They are real
// pages but not worth indexing, so the sitemap leaves them out.
export function redirectStubPaths() {
  const paths = new Set();
  for (const collection of ['writings', 'projects']) {
    const dir = new URL(`../content/${collection}/`, import.meta.url);
    for (const file of readdirSync(dir)) {
      if (!file.endsWith('.md')) continue; // also skips _drafts/
      const front = readFileSync(new URL(file, dir), 'utf8').match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
      if (!/^redirect_to:/m.test(front)) continue;
      const permalink = front.match(/^permalink:\s*(\S+)/m)?.[1];
      paths.add(`/${collection}/${deriveSlug(file, permalink)}/`);
    }
  }
  return paths;
}
