// Catálogo de muebles y árboles de origen.
// TODO EL CONTENIDO ES INVENTADO: precios, medidas, plazos, árboles y fotos (Unsplash) son de relleno.
// Para añadir un mueble, copia uno de la lista y cambia sus datos; la ficha se genera sola.

import { photo, type Photo } from './photos';

export type Tree = {
  id: string; // 'nº 112'
  souto: string;
  edad: number;
  tala: string; // 'enero de 2024'
  talaCorta: string; // 'Enero de 2024'
  aserrado: string;
  secado: string; // '20 meses al aire'
  taller: string;
  quote: string; // Javier habla del árbol
};

export const trees: Record<string, Tree> = {
  '112': {
    id: 'nº 112', souto: 'Souto de O Vilar', edad: 78,
    tala: 'enero de 2024', talaCorta: 'Enero de 2024', aserrado: 'Abril de 2024', secado: '20 meses al aire', taller: 'Octubre de 2025',
    quote: 'El 112 tenía la veta muy recta. De esos salen los buenos tableros.',
  },
  '97': {
    id: 'nº 97', souto: 'Souto da Ribeira', edad: 64,
    tala: 'febrero de 2023', talaCorta: 'Febrero de 2023', aserrado: 'Abril de 2023', secado: '26 meses al aire', taller: 'Junio de 2025',
    quote: 'El 97 creció torcido buscando el sol. Esa curva la aprovechamos para los respaldos.',
  },
  '104': {
    id: 'nº 104', souto: 'Souto de O Vilar', edad: 71,
    tala: 'enero de 2024', talaCorta: 'Enero de 2024', aserrado: 'Abril de 2024', secado: '20 meses al aire', taller: 'Octubre de 2025',
    quote: 'El 104 estaba al lado del 112. La misma tierra, la misma veta: son casi hermanos.',
  },
  '88': {
    id: 'nº 88', souto: 'Souto da Ribeira', edad: 83,
    tala: 'febrero de 2023', talaCorta: 'Febrero de 2023', aserrado: 'Marzo de 2023', secado: '26 meses al aire', taller: 'Junio de 2025',
    quote: 'El 88 era el más viejo del souto. Ya estaba hueco por dentro; lo sano lo guardamos para algo que dure.',
  },
};

export type Option = { l: string; s: string; p?: number; full?: string; set?: Record<string, string> };
export type OptionGroup = { key: string; label: string; default: number; options: Option[] };

export type Product = {
  slug: string;
  name: string;
  cat: string;
  line: string; // frase de Roi en la sala de muebles
  lead: string; // frase de Roi en la ficha
  med: string;
  acab: string;
  plazo: number; // semanas
  tree: string; // clave de `trees`
  tablones: string;
  stock: string;
  basePrice: number;
  groups: OptionGroup[];
  dims: { k: string; v: string }[];
  medidasNote: string;
  medidaCustom: string;
  care?: string[];
  model3d?: 'mesa' | 'horta';
  // Textos con género
  encargar: string; // 'Encargar esta mesa'
  laPieza: string; // 'la mesa'
  estaPieza: string; // 'esta mesa'
  acompanar: string; // 'Para acompañarla'
  views: [Photo, Photo, Photo]; // Pieza, Detalle, En casa
};

const finishes = (extra: Partial<Record<'cera' | 'jabon', number>> = {}): OptionGroup => ({
  key: 'fin', label: 'Acabado', default: 0,
  options: [
    { l: 'Aceite', s: 'Tono miel', p: 0, full: 'Aceite natural' },
    { l: 'Cera', s: 'Tacto sedoso', p: extra.cera ?? 120, full: 'Cera de abeja' },
    { l: 'Jabón', s: 'Tono claro', p: extra.jabon ?? 90, full: 'Jabón natural' },
  ],
});

export const products: Product[] = [
  {
    slug: 'mesa-souto', name: 'Mesa Souto', cat: 'Mesa de comedor',
    line: 'Un solo tablero de 240 cm, sin empalmes. Caben diez sin chocar los codos.',
    lead: 'Un solo tablero, sin empalmes. Caben diez sin chocar los codos.',
    med: '240 × 100 × 76 cm', acab: 'Aceite natural', plazo: 12,
    tree: '112', tablones: 'tablones 4 a 9', stock: 'Quedan tablones para dos mesas.',
    basePrice: 0,
    groups: [
      { key: 'size', label: 'Largo', default: 1, options: [
        { l: '200 cm', s: '6–8 personas', p: 2950, set: { Largo: '200 cm', Ancho: '95 cm', Peso: '≈ 72 kg', Comensales: '6–8' } },
        { l: '240 cm', s: '8–10 personas', p: 3450, set: { Largo: '240 cm', Ancho: '100 cm', Peso: '≈ 86 kg', Comensales: '8–10' } },
        { l: '280 cm', s: '10–12 personas', p: 3950, set: { Largo: '280 cm', Ancho: '105 cm', Peso: '≈ 101 kg', Comensales: '10–12' } },
      ] },
      finishes(),
      { key: 'edge', label: 'Canto', default: 0, options: [
        { l: 'Recto', s: 'Cantos limpios', p: 0 },
        { l: 'Vivo', s: 'Con la forma del tronco', p: 280 },
      ] },
    ],
    dims: [
      { k: 'Largo', v: '240 cm' }, { k: 'Ancho', v: '100 cm' }, { k: 'Alto', v: '76 cm' }, { k: 'Tablero', v: '5 cm' },
      { k: 'Patas', v: '9 × 9 cm' }, { k: 'Peso', v: '≈ 86 kg' }, { k: 'Comensales', v: '8–10' }, { k: 'Uniones', v: 'Caja y espiga' },
    ],
    medidasNote: 'Las patas van metidas 20 cm hacia dentro, para que nadie se quede en la esquina.',
    medidaCustom: '¿Necesitas otra medida? La hacemos a medida entre 160 y 320 cm de largo.',
    model3d: 'mesa',
    encargar: 'Encargar esta mesa', laPieza: 'la mesa', estaPieza: 'esta mesa', acompanar: 'Para acompañarla',
    views: [photo.A, photo.H, photo.G],
  },
  {
    slug: 'butaca-horta', name: 'Butaca Horta', cat: 'Silla de jardín',
    line: 'La silla de jardín de siempre, la de la sobremesa en la huerta. Le bajé un poco el asiento y nada más.',
    lead: 'La de la sobremesa en la huerta. Le bajé un poco el asiento y nada más.',
    med: '68 × 82 × 94 cm', acab: 'Sin barniz, el castaño aguanta la intemperie', plazo: 6,
    tree: '97', tablones: 'tablones 2 y 3', stock: 'Quedan tablones para cinco butacas.',
    basePrice: 890,
    groups: [
      { key: 'fin', label: 'Acabado', default: 2, options: [
        { l: 'Aceite', s: 'Tono miel', p: 0, full: 'Aceite natural' },
        { l: 'Jabón', s: 'Tono claro', p: 40, full: 'Jabón natural' },
        { l: 'Sin tratar', s: 'Se vuelve gris plata', p: 0, full: 'Sin tratar' },
      ] },
      { key: 'foot', label: 'Reposapiés', default: 0, options: [
        { l: 'Sin', s: 'Solo la butaca', p: 0 },
        { l: 'Con', s: 'A juego, suelto', p: 240 },
      ] },
    ],
    dims: [
      { k: 'Ancho', v: '68 cm' }, { k: 'Fondo', v: '82 cm' }, { k: 'Alto', v: '94 cm' }, { k: 'Asiento', v: '36 cm' },
      { k: 'Peso', v: '≈ 14 kg' }, { k: 'Uniones', v: 'Tornillería inox' },
    ],
    medidasNote: 'El asiento va a 36 cm, más bajo que una silla. Es para estar, no para comer.',
    medidaCustom: '¿La quieres para dos? Hacemos la versión banco de 130 cm.',
    care: [
      'Fuera todo el año sin problema. El castaño sin tratar se vuelve gris plata con el sol.',
      'Si quieres mantener el tono miel, una mano de aceite cada primavera.',
      'En invierno, mejor con las patas levantadas del suelo si hay charcos.',
    ],
    model3d: 'horta',
    encargar: 'Encargar esta butaca', laPieza: 'la butaca', estaPieza: 'esta butaca', acompanar: 'Para acompañarla',
    views: [photo.D, photo.Ig, photo.M],
  },
  {
    slug: 'silla-lareira', name: 'Silla Lareira', cat: 'Silla de comedor',
    line: 'El respaldo sale de una sola pieza curvada al vapor. Va a juego con la Mesa Souto.',
    lead: 'El respaldo sale de una sola pieza curvada al vapor. Va a juego con la Mesa Souto.',
    med: '46 × 52 × 82 cm', acab: 'Aceite natural', plazo: 8,
    tree: '97', tablones: 'tablones 11 a 14', stock: 'Quedan tablones para doce sillas.',
    basePrice: 420,
    groups: [
      finishes({ cera: 20, jabon: 15 }),
      { key: 'seat', label: 'Asiento', default: 0, options: [
        { l: 'Madera', s: 'Castaño macizo', p: 0 },
        { l: 'Enea', s: 'Tejido a mano', p: 60 },
      ] },
    ],
    dims: [
      { k: 'Ancho', v: '46 cm' }, { k: 'Fondo', v: '52 cm' }, { k: 'Alto', v: '82 cm' }, { k: 'Asiento', v: '45 cm' },
      { k: 'Peso', v: '≈ 6 kg' }, { k: 'Uniones', v: 'Caja y espiga' },
    ],
    medidasNote: 'El precio es por silla. Con seis o más, la sexta va de regalo.',
    medidaCustom: '¿Necesitas una altura distinta? Ajustamos el asiento entre 43 y 48 cm.',
    encargar: 'Encargar estas sillas', laPieza: 'las sillas', estaPieza: 'estas sillas', acompanar: 'Para acompañarlas',
    views: [photo.B, photo.H, photo.G],
  },
  {
    slug: 'aparador-eira', name: 'Aparador Eira', cat: 'Aparador',
    line: 'Cuatro puertas con tablones del mismo árbol, para que la veta siga de una a otra.',
    lead: 'Cuatro puertas con tablones del mismo árbol, para que la veta siga de una a otra.',
    med: '200 × 45 × 80 cm', acab: 'Aceite natural', plazo: 14,
    tree: '112', tablones: 'tablones 14 a 17', stock: 'Quedan tablones para un aparador más.',
    basePrice: 0,
    groups: [
      { key: 'size', label: 'Largo', default: 1, options: [
        { l: '160 cm', s: 'Tres puertas', p: 2450, set: { Largo: '160 cm', Puertas: '3', Peso: '≈ 58 kg' } },
        { l: '200 cm', s: 'Cuatro puertas', p: 2850, set: { Largo: '200 cm', Puertas: '4', Peso: '≈ 72 kg' } },
        { l: '240 cm', s: 'Cinco puertas', p: 3250, set: { Largo: '240 cm', Puertas: '5', Peso: '≈ 86 kg' } },
      ] },
      finishes(),
      { key: 'pull', label: 'Tirador', default: 0, options: [
        { l: 'Uñero', s: 'Tallado en la puerta', p: 0 },
        { l: 'Torneado', s: 'Pomo de castaño', p: 60 },
      ] },
    ],
    dims: [
      { k: 'Largo', v: '200 cm' }, { k: 'Fondo', v: '45 cm' }, { k: 'Alto', v: '80 cm' }, { k: 'Puertas', v: '4' },
      { k: 'Baldas', v: '2 por hueco' }, { k: 'Peso', v: '≈ 72 kg' },
    ],
    medidasNote: 'Las baldas se mueven de altura. Caben las fuentes grandes de Navidad.',
    medidaCustom: '¿Otro largo? Lo hacemos entre 120 y 280 cm.',
    encargar: 'Encargar este aparador', laPieza: 'el aparador', estaPieza: 'este aparador', acompanar: 'Para acompañarlo',
    views: [photo.C, photo.L, photo.A],
  },
  {
    slug: 'banco-corredor', name: 'Banco Corredor', cat: 'Banco',
    line: 'Estrecho y largo, para el corredor de una casa de piedra. Para sentarse a quitarse las botas.',
    lead: 'Estrecho y largo, para el corredor de una casa de piedra.',
    med: '180 × 36 × 45 cm', acab: 'Aceite natural', plazo: 6,
    tree: '104', tablones: 'tablones 1 y 2', stock: 'Quedan tablones para tres bancos.',
    basePrice: 0,
    groups: [
      { key: 'size', label: 'Largo', default: 1, options: [
        { l: '140 cm', s: '2 personas', p: 590, set: { Largo: '140 cm', Peso: '≈ 15 kg' } },
        { l: '180 cm', s: '3 personas', p: 690, set: { Largo: '180 cm', Peso: '≈ 19 kg' } },
        { l: '220 cm', s: '4 personas', p: 790, set: { Largo: '220 cm', Peso: '≈ 23 kg' } },
      ] },
      finishes({ cera: 40, jabon: 30 }),
    ],
    dims: [
      { k: 'Largo', v: '180 cm' }, { k: 'Fondo', v: '36 cm' }, { k: 'Alto', v: '45 cm' }, { k: 'Asiento', v: '4 cm' },
      { k: 'Peso', v: '≈ 19 kg' }, { k: 'Uniones', v: 'Cola de milano' },
    ],
    medidasNote: 'Con 36 cm de fondo cabe en un pasillo de un metro y todavía se pasa bien.',
    medidaCustom: '¿Otro largo? Lo hacemos entre 100 y 260 cm.',
    encargar: 'Encargar este banco', laPieza: 'el banco', estaPieza: 'este banco', acompanar: 'Para acompañarlo',
    views: [photo.E, photo.K, photo.N],
  },
  {
    slug: 'arca-fiadeiro', name: 'Arca Fiadeiro', cat: 'Arcón',
    line: 'Como las arcas de las casas de aldea, con la bisagra también de madera.',
    lead: 'Como las arcas de las casas de aldea, con la bisagra también de madera.',
    med: '110 × 50 × 62 cm', acab: 'Cera de abeja', plazo: 10,
    tree: '88', tablones: 'tablones 5 a 8', stock: 'Solo quedan tablones para dos arcas.',
    basePrice: 1290,
    groups: [
      { key: 'fin', label: 'Acabado', default: 0, options: [
        { l: 'Cera', s: 'Tacto sedoso', p: 0, full: 'Cera de abeja' },
        { l: 'Aceite', s: 'Tono miel', p: 0, full: 'Aceite natural' },
      ] },
      { key: 'inner', label: 'Interior', default: 0, options: [
        { l: 'Castaño', s: 'Madera vista', p: 0 },
        { l: 'Lino', s: 'Forrado a mano', p: 90 },
      ] },
    ],
    dims: [
      { k: 'Largo', v: '110 cm' }, { k: 'Fondo', v: '50 cm' }, { k: 'Alto', v: '62 cm' }, { k: 'Capacidad', v: '≈ 280 l' },
      { k: 'Peso', v: '≈ 34 kg' }, { k: 'Bisagra', v: 'Madera' },
    ],
    medidasNote: 'La tapa aguanta abierta sola. No se cae sobre los dedos.',
    medidaCustom: '¿La quieres a los pies de la cama? La hacemos a la medida de tu cama.',
    encargar: 'Encargar esta arca', laPieza: 'el arca', estaPieza: 'esta arca', acompanar: 'Para acompañarla',
    views: [photo.F, photo.Ig, photo.K],
  },
];

export const numberWords: Record<number, string> = {
  6: 'Seis semanas', 8: 'Ocho semanas', 10: 'Diez semanas', 12: 'Doce semanas', 14: 'Catorce semanas',
};

export const fmtPrice = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' €';

// Precio de la configuración por defecto
export const defaultPrice = (p: Product) =>
  p.groups.reduce((sum, g) => sum + (g.options[g.default].p ?? 0), p.basePrice);

// Precio mínimo («desde»)
export const minPrice = (p: Product) =>
  p.groups.reduce((sum, g) => sum + Math.min(...g.options.map((o) => o.p ?? 0)), p.basePrice);
