// Datos del negocio. Todo lo marcado con [INVENTADO] hay que sustituirlo por lo real.

export const site = {
  name: 'Torres Forest',
  tagline: 'Carpintería en castaño macizo · Chantada, Lugo',
  description:
    'Carpintería familiar en Chantada (Lugo). Muebles de castaño macizo hechos bajo pedido, con madera de nuestros propios soutos. Cada pieza lleva grabado el árbol del que salió.',
  email: 'hola@torresforest.gal', // [INVENTADO]
  phone: '+34 600 000 000', // [INVENTADO]
  whatsapp: '34600000000', // [INVENTADO] solo dígitos, con prefijo
  instagram: 'https://www.instagram.com/', // [INVENTADO]
  address: {
    street: 'Lugar de O Vilar, 12', // [INVENTADO]
    postalCode: '27500',
    city: 'Chantada',
    province: 'Lugo',
  },
  // Coordenadas aproximadas de Chantada, para el mapa
  geo: { lat: 42.6087, lng: -7.7714 },
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
