import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  site: 'https://docs.trackdayr.com',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      langs: [{
        id: 'http',
        scopeName: 'source.http',
        path: '../../src/assets/shiki/http.tmLanguage.json',
        aliases: ['rest'],
      }],
    }
  }
});