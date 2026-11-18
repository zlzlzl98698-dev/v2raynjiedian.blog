import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://v2raynjiedian.blog',
  output: 'static',
  trailingSlash: 'always',
  server: {
    port: 4328,
  },
  preview: {
    port: 4328,
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/drafts/') && !page.includes('/search/') && !page.includes('404'),
      changefreq: 'daily',
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
  vite: {
    build: {
      rollupOptions: {
        external: ['/pagefind/pagefind.js'],
      },
    },
  },
});
