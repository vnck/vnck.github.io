import { getCollection } from 'astro:content';
import { deriveSlug } from '../utils/index';

export async function GET() {
  const noDraft = ({ data }: { data: { draft?: boolean } }) => !data.draft;
  const [writings, projects] = await Promise.all([
    getCollection('writings', noDraft),
    getCollection('projects', noDraft),
  ]);

  const posts = [...writings, ...projects]
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .slice(0, 20);

  const site = 'https://vnck.xyz';

  const items = posts.map(post => {
    const slug = deriveSlug(post.id, post.data.permalink);
    const url = post.data.redirect_to || `${site}/${post.collection}/${slug}`;
    const date = post.data.date.toUTCString();
    return `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${date}</pubDate>
      ${post.data.description ? `<description><![CDATA[${post.data.description}]]></description>` : ''}
    </item>`;
  }).join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>vnck</title>
    <description>Writings about technological and urban systems.</description>
    <link>${site}</link>
    <atom:link href="${site}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
