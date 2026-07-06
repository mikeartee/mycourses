import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://mikeartee.github.io/mycourses
export default defineConfig({
  site: 'https://mikeartee.github.io',
  base: '/mycourses',
  trailingSlash: 'always',
});
