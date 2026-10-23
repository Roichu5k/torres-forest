// Fotos propias del taller, en /public/fotos/. Para cambiar una, sustituye el archivo o cambia `src`.

export type Photo = { src: string; alt: string; credit?: string };

const F = (name: string) => `fotos/${name}.jpg`;

export const photo = {
  // Muebles
  eira: { src: F('mesa-eira'), alt: 'Mesa de comedor de pino con patas de caballete' },
  eira2: { src: F('mesa-eira-2'), alt: 'Mesa de caballete de pino recién terminada en el taller' },
  eiraD: { src: F('mesa-eira-detalle'), alt: 'Mesa de caballete de pino vista desde la cabecera, en el taller' },
  horta: { src: F('butaca-horta'), alt: 'Butaca de jardín de pino con lasur color teca' },
  hortaD: { src: F('butaca-horta-detalle'), alt: 'Asiento de listones de la butaca de jardín' },
  hortaPar: { src: F('butaca-horta-pareja'), alt: 'Dos butacas de jardín de pino' },
  areal: { src: F('tumbona-areal'), alt: 'Tumbona de pino con cojín sobre el césped' },
  arealD: { src: F('tumbona-areal-detalle'), alt: 'Respaldo regulable de la tumbona de pino' },
  arealCojin: { src: F('tumbona-areal-cojin'), alt: 'Tumbona de pino con el cojín extendido' },
  roda: { src: F('mesa-roda'), alt: 'Mesa redonda de pino con patas cruzadas' },
  rodaD: { src: F('mesa-roda-estructura'), alt: 'Estructura de patas cruzadas de la mesa redonda' },
  roda2: { src: F('mesa-roda-2'), alt: 'Mesa redonda de pino vista de frente' },
  ferreiro: { src: F('mesa-ferreiro'), alt: 'Mesa de pino con patas de acero' },
  ferreiroD: { src: F('mesa-ferreiro-detalle'), alt: 'Tablero de tablas de pino aceitado sobre patas de acero' },
  ferreiroCasa: { src: F('mesa-ferreiro-casa'), alt: 'Mesa de pino puesta con flores en una casa de piedra' },
  tendal: { src: F('tendal'), alt: 'Tendedero de pared de pino, cerrado' },
  tendalD: { src: F('tendal-abriendo'), alt: 'Tendedero de pared de pino abriéndose' },
  tendalAbierto: { src: F('tendal-abierto'), alt: 'Tendedero de pared de pino abierto, con pinzas' },
  // Monte y taller
  monte: { src: F('monte-pinar'), alt: 'El pinar a contraluz' },
  monte2: { src: F('monte-pinar-2'), alt: 'Pinos en el monte' },
  troncos: { src: F('troncos-pila'), alt: 'Pila de troncos de pino recién talados' },
  troncosCerca: { src: F('troncos-cerca'), alt: 'Testas de los troncos de pino apilados' },
  fam: { src: F('troncos-familia'), alt: 'En el monte, sobre la pila de troncos' },
  taller: { src: F('taller-tumbona'), alt: 'Una tumbona a medio montar en el taller' },
  // Encargos a medida
  encimera: { src: F('encargo-encimera'), alt: 'Encimera de cocina de pino quemado' },
  puerta: { src: F('encargo-puerta'), alt: 'Puerta de cuadra de pino hecha a medida' },
  ventana: { src: F('encargo-ventana'), alt: 'Puerta de pino con ventanas y herrajes negros' },
} satisfies Record<string, Photo>;

const isRemote = (src: string) => src.startsWith('http');

// URL con tamaño, para fotos de Unsplash. Las locales se devuelven tal cual (con la base de la web).
export function img(p: Photo, w: number) {
  if (isRemote(p.src)) return `${p.src}?auto=format&fit=crop&w=${w}&q=70`;
  return import.meta.env.BASE_URL + p.src.replace(/^\//, '');
}

export function srcset(p: Photo, widths = [640, 1100, 1800]) {
  if (!isRemote(p.src)) return undefined;
  return widths.map((w) => `${img(p, w)} ${w}w`).join(', ');
}
