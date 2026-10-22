// Datos del negocio. Todo lo marcado con [INVENTADO] hay que sustituirlo por lo real.

export const site = {
  name: 'Torres Forest',
  tagline: 'Carpintería en pino macizo · Vilarmaior, A Coruña',
  description:
    'Carpintería familiar en Vilarmaior (A Coruña). Muebles de pino del país hechos bajo pedido, con madera de nuestros propios montes. Cada pieza lleva grabado el árbol del que salió.',
  email: 'hola@torresforest.gal', // [INVENTADO]
  phone: '+34 600 000 000', // [INVENTADO]
  whatsapp: '34600000000', // [INVENTADO] solo dígitos, con prefijo
  instagram: 'https://www.instagram.com/', // [INVENTADO]
  address: {
    street: 'Lugar de O Vilar, 12', // [INVENTADO]
    postalCode: '15637', // [REVISAR]
    city: 'Vilarmaior',
    province: 'A Coruña',
  },
  // Coordenadas aproximadas de Vilarmaior, para el mapa
  geo: { lat: 43.3483, lng: -8.1528 },
  visitHours: 'Sábados de 10:00 a 14:00, con cita', // [INVENTADO]
  owner: {
    legalName: 'Javier Torres [APELLIDOS]', // [INVENTADO]
    nif: '[NIF]', // [INVENTADO]
  },
  // Dónde llegan los formularios. Vacío = se abre el correo del cliente con el mensaje ya escrito.
  // Para recibirlos sin que el cliente use su correo, crea una clave gratis en https://web3forms.com
  // y pon aquí 'https://api.web3forms.com/submit', y la clave en formAccessKey.
  formEndpoint: '',
  formAccessKey: '',
};
