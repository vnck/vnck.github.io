import type { APIContext } from 'astro';
import { byDateDesc, getPublished, postUrl } from '../utils/index';

// Escaped rather than wrapped in CDATA: a ']]>' in a title would end a CDATA section, and a bare
// '&' in a redirect URL would make the feed invalid XML.
const xml = (s: string) =>
  s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]!);

export async function GET({ site: siteUrl }: APIContext) {
  const [writings, projects] = await Promise.all([getPublished('writings'), getPublished('projects')]);
  const posts = [...writings, ...projects].sort(byDateDesc).slice(0, 20);
  const site = siteUrl!.origin;

  const items = posts.map(post => {
    const url = post.data.redirect_to || `${site}${postUrl(post)}`;
    const date = post.data.date.toUTCString();
    return `
    <item>
      <title>${xml(post.data.title)}</title>
      <link>${xml(url)}</link>
      <guid>${xml(url)}</guid>
      <pubDate>${date}</pubDate>
      ${post.data.description ? `<description>${xml(post.data.description)}</description>` : ''}
    </item>`;
  }).join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>vnck</title>
    <description>Writings about technological and urban systems.</description>
    <link>${site}</link>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${site}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
