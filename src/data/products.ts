// Catálogo de muebles y árboles de origen.
// Las piezas y las fotos son reales. Medidas, plazos, opciones y árboles son ESTIMADOS: hay que revisarlos.
// Para añadir un mueble, copia uno de la lista y cambia sus datos; la ficha se genera sola.

import { photo, type Photo } from './photos';

export type Tree = {
  id: string; // 'nº 112'
  monte: string;
  edad: number;
  tala: string; // 'enero de 2024'
  talaCorta: string; // 'Enero de 2024'
  aserrado: string;
  secado: string; // '20 meses al aire'
  taller: string;
  quote: string; // Javier habla del árbol
};

// [INVENTADO] Árboles de ejemplo
export const trees: Record<string, Tree> = {
  '112': {
    id: 'nº 112', monte: 'Chousa do Penedo', edad: 46,
    tala: 'enero de 2024', talaCorta: 'Enero de 2024', aserrado: 'Abril de 2024', secado: '14 meses al aire', taller: 'Octubre de 2025',
    quote: 'El 112 tenía la veta muy recta y pocos nudos. De esos salen los buenos tableros.',
  },
  '97': {
    id: 'nº 97', monte: 'A Revolta', edad: 38,
    tala: 'febrero de 2023', talaCorta: 'Febrero de 2023', aserrado: 'Abril de 2023', secado: '18 meses al aire', taller: 'Junio de 2025',
    quote: 'El 97 creció en el borde del monte, con mucho sol. Tiene los nudos sanos y bien repartidos.',
  },
  '104': {
    id: 'nº 104', monte: 'Chousa do Penedo', edad: 42,
    tala: 'enero de 2024', talaCorta: 'Enero de 2024', aserrado: 'Abril de 2024', secado: '14 meses al aire', taller: 'Octubre de 2025',
    quote: 'El 104 estaba al lado del 112. La misma tierra, la misma veta: son casi hermanos.',
  },
  '88': {
    id: 'nº 88', monte: 'A Revolta', edad: 52,
    tala: 'febrero de 2023', talaCorta: 'Febrero de 2023', aserrado: 'Marzo de 2023', secado: '18 meses al aire', taller: 'Junio de 2025',
    quote: 'El 88 era el más viejo de A Revolta. Mucha resina: aguanta bien la humedad.',
  },
};

export type Option = { l: string; s: string; full?: string; set?: Record<string, string> };
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
  groups: OptionGroup[];
  dims: { k: string; v: string }[];
  medidasNote: string;
  medidaCustom: string;
  care?: string[];
  model3d?: 'horta';
  // Textos con género
  encargar: string; // 'Encargar esta mesa'
  laPieza: string; // 'la mesa'
  estaPieza: string; // 'esta mesa'
  acompanar: string; // 'Para acompañarla'
  views: [Photo, Photo, Photo]; // Pieza, Detalle, Otra vista
};

const finishes = (): OptionGroup => ({
  key: 'fin', label: 'Acabado', default: 0,
  options: [
    { l: 'Aceite', s: 'Tono miel', full: 'Aceite natural' },
    { l: 'Cera', s: 'Tacto sedoso', full: 'Cera de abeja' },
    { l: 'Natural', s: 'Tono claro', full: 'Barniz mate al agua' },
  ],
});

const outdoor = (def = 0): OptionGroup => ({
  key: 'fin', label: 'Acabado', default: def,
  options: [
    { l: 'Lasur teca', s: 'Tono anaranjado', full: 'Lasur exterior color teca' },
    { l: 'Aceite', s: 'Tono miel', full: 'Aceite de exterior' },
    { l: 'Lasur nogal', s: 'Tono oscuro', full: 'Lasur exterior color nogal' },
  ],
});

const outdoorCare = [
  'Puede estar fuera todo el año, pero el pino necesita su protección: una mano de lasur o aceite cada primavera.',
  'En invierno, mejor bajo techo o con una funda. Si no, que las patas no queden metidas en un charco.',
  'Si la madera se pone gris, se lija suave y se vuelve a proteger. Queda como nueva.',
];

export const products: Product[] = [
  {
    slug: 'mesa-eira', name: 'Mesa Eira', cat: 'Mesa de comedor',
    line: 'Patas de caballete con tirantes en V. Se desmonta en tres piezas para meterla por cualquier puerta.',
    lead: 'Patas de caballete con tirantes en V. Se desmonta para meterla por cualquier puerta.',
    med: '160 × 90 × 76 cm', acab: 'Aceite natural', plazo: 6,
    tree: '112', tablones: 'tablones 4 a 7', stock: 'Quedan tablones para dos mesas.',
    groups: [
      { key: 'size', label: 'Largo', default: 1, options: [
        { l: '140 cm', s: '4–6 personas', set: { Largo: '140 cm', Ancho: '85 cm', Peso: '≈ 38 kg', Comensales: '4–6' } },
        { l: '160 cm', s: '6 personas', set: { Largo: '160 cm', Ancho: '90 cm', Peso: '≈ 44 kg', Comensales: '6' } },
        { l: '200 cm', s: '8 personas', set: { Largo: '200 cm', Ancho: '95 cm', Peso: '≈ 55 kg', Comensales: '8' } },
      ] },
      finishes(),
    ],
    dims: [
      { k: 'Largo', v: '160 cm' }, { k: 'Ancho', v: '90 cm' }, { k: 'Alto', v: '76 cm' }, { k: 'Tablero', v: '3,5 cm' },
      { k: 'Patas', v: '7 × 7 cm' }, { k: 'Peso', v: '≈ 44 kg' }, { k: 'Comensales', v: '6' }, { k: 'Uniones', v: 'Caja y espiga' },
    ],
    medidasNote: 'Los tirantes en V van por el centro, así nadie choca con las rodillas.',
    medidaCustom: '¿Necesitas otra medida? La hacemos a medida entre 120 y 240 cm de largo.',
    encargar: 'Encargar esta mesa', laPieza: 'la mesa', estaPieza: 'esta mesa', acompanar: 'Para acompañarla',
    views: [photo.eira, photo.eiraD, photo.eira2],
  },
  {
    slug: 'butaca-horta', name: 'Butaca Horta', cat: 'Silla de jardín',
    line: 'La silla de jardín de respaldo alto, la de la sobremesa en la huerta. Brazos anchos para dejar el vaso.',
    lead: 'La de la sobremesa en la huerta. Brazos anchos para dejar el vaso.',
    med: '74 × 90 × 98 cm', acab: 'Lasur exterior color teca', plazo: 4,
    tree: '97', tablones: 'tablones 2 y 3', stock: 'Quedan tablones para cinco butacas.',
    groups: [
      outdoor(),
      { key: 'foot', label: 'Reposapiés', default: 0, options: [
        { l: 'Sin', s: 'Solo la butaca' },
        { l: 'Con', s: 'A juego, suelto' },
      ] },
    ],
    dims: [
      { k: 'Ancho', v: '74 cm' }, { k: 'Fondo', v: '90 cm' }, { k: 'Alto', v: '98 cm' }, { k: 'Asiento', v: '38 cm' },
      { k: 'Peso', v: '≈ 12 kg' }, { k: 'Uniones', v: 'Tornillería inox' },
    ],
    medidasNote: 'El asiento va bajo y echado hacia atrás. Es para estar, no para comer.',
    medidaCustom: '¿La quieres para dos? Hacemos la versión banco de 130 cm.',
    care: outdoorCare,
    model3d: 'horta',
    encargar: 'Encargar esta butaca', laPieza: 'la butaca', estaPieza: 'esta butaca', acompanar: 'Para acompañarla',
    views: [photo.horta, photo.hortaD, photo.hortaPar],
  },
  {
    slug: 'tumbona-areal', name: 'Tumbona Areal', cat: 'Tumbona',
    line: 'El respaldo sube y baja en cuatro posiciones. Lleva un cojín grueso, para quedarse dormido al sol.',
    lead: 'El respaldo sube y baja en cuatro posiciones. Para quedarse dormido al sol.',
    med: '200 × 65 × 32 cm', acab: 'Aceite de exterior', plazo: 4,
    tree: '88', tablones: 'tablones 5 a 9', stock: 'Quedan tablones para tres tumbonas.',
    groups: [
      outdoor(1),
      { key: 'cojin', label: 'Cojín', default: 1, options: [
        { l: 'Sin', s: 'Solo la madera' },
        { l: 'Con', s: 'Cojín crudo acolchado' },
      ] },
    ],
    dims: [
      { k: 'Largo', v: '200 cm' }, { k: 'Ancho', v: '65 cm' }, { k: 'Alto', v: '32 cm' }, { k: 'Respaldo', v: '4 posiciones' },
      { k: 'Peso', v: '≈ 22 kg' }, { k: 'Uniones', v: 'Tornillería inox' },
    ],
    medidasNote: 'Los listones van separados un dedo: el agua de la lluvia cae y no se queda.',
    medidaCustom: '¿Eres muy alto? La alargamos hasta 220 cm.',
    care: outdoorCare,
    encargar: 'Encargar esta tumbona', laPieza: 'la tumbona', estaPieza: 'esta tumbona', acompanar: 'Para acompañarla',
    views: [photo.areal, photo.arealD, photo.arealCojin],
  },
  {
    slug: 'mesa-roda', name: 'Mesa Roda', cat: 'Mesa redonda',
    line: 'Tablero redondo sobre dos marcos que se cruzan. Sin esquinas, en la cocina se pasa mejor.',
    lead: 'Tablero redondo sobre dos marcos que se cruzan. Sin esquinas, en la cocina se pasa mejor.',
    med: 'Ø 100 × 76 cm', acab: 'Aceite natural', plazo: 5,
    tree: '104', tablones: 'tablones 1 a 3', stock: 'Quedan tablones para tres mesas.',
    groups: [
      { key: 'size', label: 'Diámetro', default: 1, options: [
        { l: '90 cm', s: '4 personas', set: { Diámetro: '90 cm', Peso: '≈ 24 kg', Comensales: '4' } },
        { l: '100 cm', s: '4–5 personas', set: { Diámetro: '100 cm', Peso: '≈ 28 kg', Comensales: '4–5' } },
        { l: '120 cm', s: '6 personas', set: { Diámetro: '120 cm', Peso: '≈ 36 kg', Comensales: '6' } },
      ] },
      finishes(),
    ],
    dims: [
      { k: 'Diámetro', v: '100 cm' }, { k: 'Alto', v: '76 cm' }, { k: 'Tablero', v: '3 cm' }, { k: 'Patas', v: '5 × 5 cm' },
      { k: 'Peso', v: '≈ 28 kg' }, { k: 'Comensales', v: '4–5' },
    ],
    medidasNote: 'Los dos marcos se encajan a media madera. Desmontada cabe en el maletero.',
    medidaCustom: '¿Otro tamaño? La hacemos entre 80 y 140 cm de diámetro.',
    encargar: 'Encargar esta mesa', laPieza: 'la mesa', estaPieza: 'esta mesa', acompanar: 'Para acompañarla',
    views: [photo.roda, photo.rodaD, photo.roda2],
  },
  {
    slug: 'mesa-ferreiro', name: 'Mesa Ferreiro', cat: 'Mesa de comedor',
    line: 'Tablero de tablas de pino aceitado sobre patas de acero. Lo de madera lo hacemos nosotros; el hierro, un herrero de la zona.',
    lead: 'Tablero de pino aceitado sobre patas de acero, hechas por un herrero de la zona.',
    med: '180 × 80 × 76 cm', acab: 'Aceite natural', plazo: 6,
    tree: '112', tablones: 'tablones 8 a 12', stock: 'Quedan tablones para dos mesas.',
    groups: [
      { key: 'size', label: 'Largo', default: 1, options: [
        { l: '140 cm', s: '4–6 personas', set: { Largo: '140 cm', Peso: '≈ 34 kg', Comensales: '4–6' } },
        { l: '180 cm', s: '6–8 personas', set: { Largo: '180 cm', Peso: '≈ 42 kg', Comensales: '6–8' } },
        { l: '240 cm', s: '10 personas', set: { Largo: '240 cm', Peso: '≈ 56 kg', Comensales: '10' } },
      ] },
      finishes(),
    ],
    dims: [
      { k: 'Largo', v: '180 cm' }, { k: 'Ancho', v: '80 cm' }, { k: 'Alto', v: '76 cm' }, { k: 'Tablero', v: '3,5 cm' },
      { k: 'Patas', v: 'Acero negro' }, { k: 'Peso', v: '≈ 42 kg' }, { k: 'Comensales', v: '6–8' },
    ],
    medidasNote: 'Las patas de acero ocupan poco: caben más sillas que con patas de madera.',
    medidaCustom: '¿Necesitas otra medida? La hacemos entre 120 y 280 cm de largo.',
    encargar: 'Encargar esta mesa', laPieza: 'la mesa', estaPieza: 'esta mesa', acompanar: 'Para acompañarla',
    views: [photo.ferreiro, photo.ferreiroD, photo.ferreiroCasa],
  },
  {
    slug: 'tendal', name: 'Tendal', cat: 'Tendedero de pared',
    line: 'Cerrado es un cuadro en la pared. Se abre con dos cuerdas y tiende una lavadora entera.',
    lead: 'Cerrado es un cuadro en la pared. Abierto tiende una lavadora entera.',
    med: '80 × 120 × 10 cm', acab: 'Lasur exterior color nogal', plazo: 3,
    tree: '104', tablones: 'tablones 4 y 5', stock: 'Quedan tablones para seis tendales.',
    groups: [
      { key: 'size', label: 'Alto', default: 1, options: [
        { l: '100 cm', s: '8 cuerdas', set: { Alto: '100 cm', Cuerdas: '8', Tendido: '≈ 6 m' } },
        { l: '120 cm', s: '10 cuerdas', set: { Alto: '120 cm', Cuerdas: '10', Tendido: '≈ 8 m' } },
        { l: '150 cm', s: '13 cuerdas', set: { Alto: '150 cm', Cuerdas: '13', Tendido: '≈ 10 m' } },
      ] },
      outdoor(2),
    ],
    dims: [
      { k: 'Ancho', v: '80 cm' }, { k: 'Alto', v: '120 cm' }, { k: 'Fondo cerrado', v: '10 cm' }, { k: 'Cuerdas', v: '10' },
      { k: 'Tendido', v: '≈ 8 m' }, { k: 'Cuerda', v: 'Acero plastificado' },
    ],
    medidasNote: 'Abierto sale unos 60 cm de la pared. Mira que no choque con una ventana.',
    medidaCustom: '¿Tienes un hueco concreto? Lo hacemos a la medida de tu pared.',
    care: outdoorCare,
    encargar: 'Encargar este tendal', laPieza: 'el tendal', estaPieza: 'este tendal', acompanar: 'Para acompañarlo',
    views: [photo.tendal, photo.tendalD, photo.tendalAbierto],
  },
];

export const numberWords: Record<number, string> = {
  3: 'Tres semanas', 4: 'Cuatro semanas', 5: 'Cinco semanas', 6: 'Seis semanas', 8: 'Ocho semanas',
};
