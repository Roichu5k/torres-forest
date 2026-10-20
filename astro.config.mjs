// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages: https://roichu5k.github.io/torres-forest/
// Si algún día tenéis dominio propio (p. ej. torresforest.gal), cambia `site`
// por ese dominio y quita `base`.
export default defineConfig({
  site: 'https://roichu5k.github.io',
  base: '/torres-forest',
  trailingSlash: 'always',
});
