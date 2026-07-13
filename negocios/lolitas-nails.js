/* =========================================================
   NEGOCIO · Lolita's Nails / Espacio Lolitas (Lista A #11)
   ---------------------------------------------------------
   Datos reales de Google (jul 2026): 5,0★ (106), Cdad. de la
   Paz 2972, mar 10-19:30, mié-vie 11-19:30, sáb 10-14.
   IG @lolitasnailss (visible en la vidriera). Dueña: Normi
   (nombrada en las reseñas). Fotos: perfil de Google, subidas
   por el propio negocio. Precios de ejemplo del rubro.
   ========================================================= */
window.PELU_NEGOCIOS = window.PELU_NEGOCIOS || {};
window.PELU_NEGOCIOS["lolitas-nails"] = {
  slug: "lolitas-nails",
  orden: 11,
  rubro: "Nails & masajes",

  business: {
    over: "Espacio",
    name: "Lolitas",
    tagline: "Uñas, masajes y depilación en Belgrano.",
    phoneDisplay: "011 2319-5726",
    phoneE164: "+541123195726",
    whatsapp: "5491123195726",
    waDefaultMsg: "Hola Normi! Quería reservar un turno.",
    address: { street: "Cdad. de la Paz 2972", area: "Belgrano, CABA", zip: "C1429ACB" },
    mapsQuery: "Ciudad+de+la+Paz+2972,+CABA",
    instagram: "lolitasnailss",
    rating: { score: "5,0", count: 106 },
    faviconEmoji: "💅",
  },

  /* Paleta inspirada en el local: cartel coral, vidriera con flores rosas. */
  theme: {
    colors: {
      "bone":       "#fdf6f2",
      "bone-2":     "#faeae3",
      "sand":       "#f4d6c9",
      "ink":        "#28191a",
      "espresso":   "#331f1e",
      "espresso-2": "#422a26",
      "muted":      "#8d6f68",
      "line":       "#efd2c7",
      "clay":       "#d9544a",
      "clay-deep":  "#b23a32",
      "clay-soft":  "#f0998e",
      "gold":       "#c9925f",
    },
  },

  content: {
    meta: {
      title: "Espacio Lolitas · Belgrano · Uñas, masajes y depilación",
      description: "Estudio de belleza en Belgrano: manicura semipermanente, belleza de pies, masajes y depilación. Atención personalizada de Normi. 5★ en Google con 106 reseñas.",
    },
    hero: {
      eyebrow: "Belgrano · Nails & Spa",
      title: "Tus manos, tus pies y un rato para vos.",
      lead: "Espacio Lolitas es el estudio de Normi en Belgrano: manicura semipermanente, belleza de pies, masajes y depilación. Atención personalizada, de a una clienta por vez.",
      proof2: "Todas sus reseñas son de 5 estrellas",
      badgeNum: "5★",
      badgeLabel: "perfectas, en 106 reseñas de Google",
      photo: { src: "assets/lolitas-nails/fachada.jpg", alt: "Frente de Espacio Lolitas en Ciudad de la Paz 2972, con su cartel coral" },
    },
    servicesIntro: "Manos, pies, masajes y depilación en un mismo lugar. Con turno, sin espera, y con productos que cuidan tu piel.",
    gallery: {
      intro: "Trabajos reales del estudio: semi, french y los colores de la temporada.",
      photos: [
        { src: "assets/lolitas-nails/french.jpg", alt: "Manicura french en fucsia, esmaltado semipermanente" },
        { src: "assets/lolitas-nails/borravino.jpg", alt: "Manicura en tono borravino" },
        { src: "assets/lolitas-nails/pedi-fluo.jpg", alt: "Pedicura en amarillo flúo con nail art de corazones", wide: true },
        { src: "assets/lolitas-nails/pedi-lila.jpg", alt: "Pedicura en tono lila" },
        { src: "assets/lolitas-nails/pedi-teal.jpg", alt: "Pedicura en verde esmeralda" },
      ],
    },
    about: {
      title: "Normi, atención de a una",
      paragraphs: [
        "Espacio Lolitas es el estudio de Normi: uñas, masajes y depilación en un mismo lugar, con atención personalizada y de a una clienta por vez. Sus 106 reseñas en Google son todas de 5 estrellas, y se repiten las mismas palabras: puntualidad, limpieza y buena mano.",
        "Los masajes son de una hora y media de verdad: aceites, aromas y cero apuro. Y las uñas salen como las pediste, del french clásico al flúo del verano.",
      ],
      checklist: [
        "Atención personalizada, de a una clienta",
        "5,0★ en Google, con 106 reseñas",
        "Uñas, masajes y depilación en un solo lugar",
      ],
      photo: { src: "assets/lolitas-nails/masaje.jpg", alt: "Normi dando un masaje descontracturante en el estudio" },
    },
    reviews: [
      { text: "Excelente atención, Normi es una genia! De ahora en más cada vez que necesite hacer manicura voy con ella sin dudarlo.", author: "Sofía Sánchez Prieto" },
      { text: "Los masajes son realmente espectaculares. Durante la hora y media estás en otro mundo. La limpieza, los aromas de cada aceite, algo único. El horario es puntual y ella es muy agradable.", author: "Gaviota" },
    ],
    visitTitle: "Visitanos en Belgrano",
    cta: {
      title: "¿Te guardamos un lugar esta semana?",
      lead: "Elegí servicio, día y hora online. Tarda 30 segundos.",
    },
  },

  services: [
    { id: "semi",       name: "Manicura semipermanente", desc: "Esmaltado semi que dura semanas, con terminación de salón. Color liso, french o nail art.", price: 18000, duration: 60 },
    { id: "kapping",    name: "Kapping / esculpidas",    desc: "Refuerzo o extensión para uñas fuertes y parejas, con el largo que quieras.", price: 24000, duration: 90 },
    { id: "pies",       name: "Belleza de pies",         desc: "Pedicura completa con esmaltado semi. Pies prolijos todo el mes.", price: 20000, duration: 60 },
    { id: "masaje-relax", name: "Masaje relajante",      desc: "Una hora y media de verdad, con aceites y aromas. Salís en otro mundo.", price: 34000, duration: 90 },
    { id: "masaje-desc",  name: "Masaje descontracturante", desc: "Enfocado en cuello, espalda y contracturas puntuales.", price: 28000, duration: 60 },
    { id: "depilacion",   name: "Depilación con cera",   desc: "Zonas a elección, con cera de calidad y buena técnica. Rápido e indoloro.", price: 15000, duration: 30 },
  ],

  staff: [
    { id: "normi", name: "Normi", role: "Manicura & masajista", daysOff: [] },
  ],

  /* Horarios reales de Google (jul 2026). */
  hours: {
    0: null,
    1: null,
    2: [["10:00", "19:30"]],
    3: [["11:00", "19:30"]],
    4: [["11:00", "19:30"]],
    5: [["11:00", "19:30"]],
    6: [["10:00", "14:00"]],
  },

  booking: {
    enabled: true,
    slotMinutes: 30,
    windowDays: 14,
    leadTimeMinutes: 60,
  },

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
