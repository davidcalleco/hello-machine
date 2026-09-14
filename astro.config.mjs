// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

/**
 * `site` is required for canonical URLs and the sitemap. It is overridable per
 * environment so preview deployments do not advertise production URLs.
 */
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? 'https://hellomachine.ai',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
