// Fotos de relleno de Unsplash (licencia libre). Hay que sustituirlas por fotos propias:
// pon las fotos en /public/fotos/ y cambia `src` por, p. ej., 'fotos/mesa-souto.jpg'.

export type Photo = { src: string; alt: string; credit?: string };

const U = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const photo = {
  A: { src: U('1597960194599-22929afc25b1'), alt: 'Mesa de madera maciza', credit: 'Devin Berko' },
  B: { src: U('1603376728541-6e1906a300e6'), alt: 'Silla de madera', credit: 'Raygar He' },
  C: { src: U('1532588213355-52317771cce6'), alt: 'Aparador de madera', credit: 'Tiana Borcherding' },
  D: { src: U('1714486271387-40af1f086020'), alt: 'Butaca de jardín de madera', credit: 'Luis Gherasim' },
  E: { src: U('1696650502270-8cacd4fb5530'), alt: 'Banco de madera', credit: 'Jason Leung' },
  F: { src: U('1517467139951-f5a925c9f9de'), alt: 'Arcón de madera', credit: 'Deborah Diem' },
  G: { src: U('1773847521422-77ff84e29353'), alt: 'Mueble de madera en una casa', credit: 'Clay Banks' },
  H: { src: U('1751288301679-b6121e123dd1'), alt: 'Detalle de la veta del castaño', credit: 'Bozhin Karaivanov' },
  Ig: { src: U('1633175113177-5be3854f29c8'), alt: 'Detalle de madera', credit: 'engin akyurt' },
  J: { src: U('1651447041389-1f499536b4cb'), alt: 'Troncos aserrados y numerados', credit: 'Nic Y-C' },
  K: { src: U('1634672652995-ee7525bce595'), alt: 'Tablones apilados secando al aire', credit: 'Patrick Robert Doyle' },
  L: { src: U('1497219055242-93359eeed651'), alt: 'Manos trabajando la madera con un formón', credit: 'Dominik Scythe' },
  M: { src: U('1448375240586-882707db888b'), alt: 'El souto en invierno', credit: 'Sebastian Unrau' },
  N: { src: U('1425913397330-cf8af2ff40a1'), alt: 'Castaño en pie en el monte', credit: 'Steven Kamenar' },
  fam: { src: U('1547609434-b732edfee020'), alt: 'Javier y Roi trabajando en el taller', credit: 'Will Suddreth' },
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
