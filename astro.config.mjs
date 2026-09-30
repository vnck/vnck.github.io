import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import rehypeImgAttrs from './src/plugins/rehype-img-attrs.mjs';
import rehypeTableScroll from './src/plugins/rehype-table-scroll.mjs';

export default defineConfig({
  site: 'https://vnck.xyz',
  integrations: [sitemap()],
  // Astro 7 defaults to 'jsx', which strips whitespace between inline elements.
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  markdown: {
    // Astro 7 defaults to its native Markdown pipeline; unified() keeps rehype plugins working.
    processor: unified({
      rehypePlugins: [rehypeImgAttrs, rehypeTableScroll],
      // The default ↩ is missing from both site fonts, and an arrow reads as an icon rather than a link.
      // The back-link is a pilcrow (in both fonts): it returns to the paragraph that cites the note.
      // A source cited again gets only a superscript count ("¶ ² ³"), which keeps repeated links compact.
      remarkRehype: {
        footnoteBackContent: (_, rereferenceIndex) => {
          if (rereferenceIndex <= 1) return [{ type: 'text', value: '¶' }];
          return [{ type: 'element', tagName: 'sup', properties: {}, children: [{ type: 'text', value: String(rereferenceIndex) }] }];
        },
      },
    }),
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
    },
  },
});
