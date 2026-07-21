import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://best-machine-learning-development-services.com',
  trailingSlash: 'always',
  redirects: {
    '/companies/': '/',
  },
  integrations: [
    tailwind(),
    sitemap({
      serialize(item) {
        item.lastmod = new Date();
        return item;
      },
    }),
    mdx(),
  ],
  output: 'static',
});
