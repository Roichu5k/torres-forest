# Torres Forest

Web de Torres Forest, carpintería en castaño macizo en Chantada (Lugo).

Publicada en: https://roichu5k.github.io/torres-forest/

> ⚠️ **Todo el contenido es de relleno**: precios, medidas, plazos, árboles, datos de contacto, textos legales y fotos (Unsplash). Hay que sustituirlo por lo real.

## Dónde se cambia cada cosa

| Qué | Archivo |
|---|---|
| Correo, teléfono, dirección, horario, NIF, formulario | `src/data/site.ts` |
| Muebles: nombre, frase, precios, opciones, medidas, árbol | `src/data/products.ts` |
| Árboles de origen (souto, edad, fechas, frase de Javier) | `src/data/products.ts` (`trees`) |
| Fotos | `src/data/photos.ts` (pon las propias en `public/fotos/`) |
| Textos de la portada, estaciones y «Quiénes somos» | `src/pages/index.astro` |
| Contacto / visita al taller | `src/pages/contacto.astro` |
| Aviso legal y privacidad | `src/pages/aviso-legal.astro`, `src/pages/privacidad.astro` |
| Visor 3D (mesa y butaca) | `public/3d/index.html` |
| Colores y tipografías | `src/styles/global.css` |

Para **añadir un mueble**, copia uno de la lista en `products.ts` y cambia sus datos: su ficha (`/muebles/<slug>/`), su sitio en la sala de la portada y en el catálogo se generan solos.

## Formularios

Por defecto, al enviar un formulario se abre el programa de correo del cliente con el mensaje ya escrito. Para recibirlos directamente, crea una clave gratuita en [Web3Forms](https://web3forms.com) y rellena `formEndpoint` y `formAccessKey` en `src/data/site.ts`.

## Trabajar en local

```sh
npm install
npm run dev       # http://localhost:4321/torres-forest/
npm run build     # genera la web en dist/
```

## Publicar

Cada `git push` a `main` publica la web automáticamente en GitHub Pages (ver `.github/workflows/deploy.yml`).

Si algún día hay dominio propio (p. ej. `torresforest.gal`): cambia `site` en `astro.config.mjs`, quita `base`, y configura el dominio en *Settings → Pages* del repositorio.

## Diseño

El diseño original (Claude Design) está en `../Torres Forest landing pages/`. La web implementa la página de inicio «4a» (estaciones + sala) y la ficha de producto «1a» como plantilla para todos los muebles.
