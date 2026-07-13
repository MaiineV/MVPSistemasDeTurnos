/* =========================================================
   NEGOCIO · Paorelia, masajes y faciales (Lista A #7)
   ---------------------------------------------------------
   Datos reales de Google (jul 2026): 5,0★ (176), Blanco
   Encalada 2851, lun-vie 10-20, sáb 10-17. Staff en reseñas:
   Pao (dueña) y Aida. Firma visual: lámparas atardecer
   (terracota). Venden gift cards. Fotos: perfil de Google.
   Precios de ejemplo del rubro.
   ========================================================= */
window.PELU_NEGOCIOS = window.PELU_NEGOCIOS || {};
window.PELU_NEGOCIOS["paorelia"] = {
  slug: "paorelia",
  orden: 7,
  rubro: "Spa & faciales",

  business: {
    over: "Masajes & faciales",
    name: "Paorelia",
    tagline: "Un rato en otro mundo, en Belgrano.",
    phoneDisplay: "011 5331-6553",
    phoneE164: "+541153316553",
    whatsapp: "541153316553",
    waDefaultMsg: "Hola Pao! Quería reservar un turno.",
    address: { street: "Blanco Encalada 2851", area: "Belgrano, CABA", zip: "C1428DDA" },
    mapsQuery: "Blanco+Encalada+2851,+CABA",
    instagram: "",
    rating: { score: "5,0", count: 176 },
    faviconEmoji: "🕯️",
  },

  /* Paleta del lugar real: blancos cálidos y el glow terracota de la lámpara atardecer. */
  theme: {
    colors: {
      "bone":       "#faf6f0",
      "bone-2":     "#f3ece2",
      "sand":       "#e4d3bf",
      "ink":        "#2b2018",
      "espresso":   "#3b2a20",
      "espresso-2": "#4c362a",
      "muted":      "#7b6a5b",
      "line":       "#e8ddd0",
      "clay":       "#c25b3f",
      "clay-deep":  "#a6472e",
      "clay-soft":  "#f2ddd3",
      "gold":       "#c79a62",
    },
  },

  content: {
    meta: {
      title: "Paorelia · Belgrano · Masajes y tratamientos faciales",
      description: "Spa en Belgrano: masajes, faciales con aparatología y rituales con luz de atardecer. 5★ en Google con 176 reseñas. Blanco Encalada 2851.",
    },
    hero: {
      eyebrow: "Belgrano · Spa & faciales",
      title: "Un rato en otro mundo, a la vuelta de casa.",
      lead: "Paorelia es el spa de Pao en Blanco Encalada 2851: masajes, faciales y rituales con luz de atardecer, aromas y cero apuro. Sus 176 reseñas en Google son todas de 5 estrellas.",
      proof2: "Gift cards para regalar un mimo",
      badgeNum: "5★",
      badgeLabel: "perfectas, en 176 reseñas de Google",
      photo: { src: "assets/paorelia/cabina.jpg", alt: "Cabina luminosa de Paorelia: esteticista aplicando una máscara facial junto a la ventana" },
    },
    servicesIntro: "Masajes y tratamientos faciales con aparatología y productos que cuidan la piel.",
    gallery: {
      intro: "El espacio: luz cálida, camillas listas y detalles que suman.",
      photos: [
        { src: "assets/paorelia/sala-atardecer.jpg", alt: "Sala de masajes en penumbra con la luz cálida de la lámpara atardecer" },
        { src: "assets/paorelia/giftcard.jpg", alt: "Gift card de Paorelia en mano, con la cabina iluminada en ámbar de fondo" },
        { src: "assets/paorelia/piedras.jpg", alt: "Detalle de masaje con piedras volcánicas calientes sobre la espalda", wide: true },
        { src: "assets/paorelia/facial.jpg", alt: "Tratamiento facial con esferas frías y vaporizador de ozono" },
        { src: "assets/paorelia/limpieza.jpg", alt: "Limpieza facial vista desde arriba, con máscara aplicada bajo la lupa" },
      ],
    },
    about: {
      title: "Pao y Aida, un mimo al cuerpo y al alma",
      paragraphs: [
        "Pao atiende personalmente y las reseñas la describen siempre igual: cálida, atenta, profesional. Con Aida completan un equipo chico que trabaja prolijo, con cofia, guantes y una higiene que se nota apenas entrás.",
        "El lugar es la firma: lámparas atardecer que bañan las salas en naranja, música suave y esa sensación de spa que te cambia el día. También hay gift cards con la misma estética, para regalar un rato de paz.",
      ],
      checklist: [
        "5,0★ en Google, con 176 reseñas",
        "Faciales con aparatología: dermapen, LED y ozono",
        "Gift cards para regalar",
      ],
      photo: { src: "assets/paorelia/masaje.jpg", alt: "Masajista de Paorelia aplicando piedras calientes bajo una luz cálida" },
    },
    reviews: [
      { text: "Primera vez que voy y fue una experiencia 10/10. Fui por masaje de cuerpo entero más limpieza facial, salí súper relajada y muy agradecida con Pao que me atendió increíble, es cálida, atenta y profesional. Fue un mimo al cuerpo y al alma que me cambió el día por completo!", author: "María Belén Gándara" },
      { text: "Realmente me quedan cortas las palabras para definir el profesionalismo y lo hermoso que es tanto Pao como su lugar, una paz y tranquilidad inigualable.", author: "Sabrina Ferlini" },
    ],
    visitTitle: "Visitanos en Belgrano",
    cta: {
      title: "¿Te regalamos un rato para vos?",
      lead: "Elegí tratamiento, día y hora online. Tarda 30 segundos.",
    },
  },

  services: [
    { id: "cuerpo-entero", name: "Masaje de cuerpo entero", desc: "Una hora de relax total, con aceites y luz de atardecer.", price: 36000, duration: 60 },
    { id: "descontracturante", name: "Masaje descontracturante", desc: "Cuello, espalda y esa contractura que no afloja.", price: 34000, duration: 60 },
    { id: "piedras",       name: "Piedras calientes",      desc: "Calor volcánico profundo, el favorito del invierno.", price: 42000, duration: 75 },
    { id: "limpieza",      name: "Limpieza facial profunda", desc: "Con extracción, máscara y vapor de ozono.", price: 30000, duration: 60 },
    { id: "dermapen",      name: "Dermapen",               desc: "Microneedling para renovar la piel y atenuar marcas.", price: 38000, duration: 45 },
    { id: "spa-parejas",   name: "Full spa para parejas",  desc: "Ritual completo de a dos, en la misma sala.", price: 80000, duration: 90 },
  ],

  staff: [
    { id: "pao",  name: "Pao",  role: "Esteticista & masajista", daysOff: [] },
    { id: "aida", name: "Aida", role: "Masajista", daysOff: [] },
  ],

  /* Horarios reales de Google (jul 2026). */
  hours: {
    0: null,
    1: [["10:00", "20:00"]],
    2: [["10:00", "20:00"]],
    3: [["10:00", "20:00"]],
    4: [["10:00", "20:00"]],
    5: [["10:00", "20:00"]],
    6: [["10:00", "17:00"]],
  },

  booking: { enabled: true, slotMinutes: 30, windowDays: 14, leadTimeMinutes: 60 },

  pos: {
    currency: "ARS",
    locale: "es-AR",
    paymentMethods: [
      { id: "efectivo",      name: "Efectivo" },
      { id: "transferencia", name: "Transferencia" },
      { id: "tarjeta",       name: "Tarjeta" },
    ],
  },
};
