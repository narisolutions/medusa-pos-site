import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://narisolutions.github.io',
  base: '/medusa-pos-site/',
  vite: {
    plugins: [tailwindcss()],
  },
});
