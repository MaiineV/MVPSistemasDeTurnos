/* =========================================================
   NEGOCIO · Cosa de Mujeres (Lista A #3)
   ---------------------------------------------------------
   Datos reales de Google (jul 2026): 4,7★ (381), Mendoza 2611,
   lun-sáb 9-19. Staff en reseñas: Roxana, Carmen, Haydee.
   Lema real del cartel: "Un lugar diferente". Promo real:
   20% lun-mié en efectivo. Fotos: perfil de Google.
   Precios de ejemplo del rubro.
   ========================================================= */
window.PELU_NEGOCIOS = window.PELU_NEGOCIOS || {};
window.PELU_NEGOCIOS["cosa-de-mujeres"] = {
  slug: "cosa-de-mujeres",
  orden: 3,
  rubro: "Depilación & estética",

  business: {
    over: "Depilación & estética",
    name: "Cosa de Mujeres",
    tagline: "Un lugar diferente, en Belgrano.",
    phoneDisplay: "011 5980-0307",
    phoneE164: "+541159800307",
    whatsapp: "541159800307",
    waDefaultMsg: "Hola! Quería reservar un turno en Cosa de Mujeres.",
    address: { street: "Mendoza 2611", area: "Belgrano, CABA", zip: "C1428DKQ" },
    mapsQuery: "Mendoza+2611,+CABA",
    instagram: "",
    rating: { score: "4,7", count: 381 },
    faviconEmoji: "🌸",
  },

  /* Paleta shabby chic del local: marcos blancos, rosa viejo del cartel floral. */
  theme: {
    colors: {
      "bone":       "#faf6f2",
      "bone-2":     "#f5ede6",
      "sand":       "#e8dcd0",
      "ink":        "#2b2226",
      "espresso":   "#3a2e33",
      "espresso-2": "#4a3a40",
      "muted":      "#7a6a6e",
      "line":       "#eadfd8",
      "clay":       "#b4637a",
      "clay-deep":  "#9c4a61",
      "clay-soft":  "#f3dce3",
      "gold":       "#c9a24b",
    },
  },

  content: {
    meta: {
      title: "Cosa de Mujeres · Belgrano · Depilación y estética",
      description: "Centro de depilación en Belgrano: cara, piernas, cavado, axilas y dermopulido. Promo 20% de lunes a miércoles. 4,7★ en Google con 381 reseñas. Mendoza 2611.",
    },
    hero: {
      eyebrow: "Belgrano · Centro de depilación",
      title: "Depilación prolija, precios justos, trato de siempre.",
      lead: "Cosa de Mujeres es el centro de depilación de Mendoza 2611: cara, piernas, cavado, axilas y dermopulido, con un equipo que las clientas conocen por nombre: Roxana, Carmen y Haydee.",
      proof2: "20% de descuento de lunes a miércoles en efectivo",
      badgeNum: "4,7★",
      badgeLabel: "con 381 reseñas de clientas del barrio",
      /* sin foto de hero a propósito: las del perfil no le hacen justicia al local */
      photo: null,
    },
    servicesIntro: "La carta completa de depilación, zona por zona, más dermopulido. Con promos por día de semana.",
    gallery: {
      intro: "El local: cabinas prolijas y la marca de siempre.",
      photos: [
        { src: "assets/cosa-de-mujeres/cabina.jpg", alt: "Cabina de depilación con camilla lista para atender" },
        { src: "assets/cosa-de-mujeres/logo.jpg", alt: "El cartel de Cosa de Mujeres con su lema: un lugar diferente" },
        { src: "assets/cosa-de-mujeres/interior.jpg", alt: "Interior de una cabina del centro, prolijo y ordenado" },
      ],
    },
    about: {
      title: "Roxana, Carmen y Haydee",
      paragraphs: [
        "Cosa de Mujeres es un clásico de Belgrano: antes en Mendoza y Cabildo, hoy en Mendoza 2611. Hay clientas que se mudaron de barrio y siguen viniendo, porque acá el trabajo es minucioso, el trato delicado y los precios siguen siendo buenos.",
        "El lema de la casa está impreso bajo el logo: un lugar diferente. La diferencia es esa: años de oficio y un equipo estable que hace bien lo suyo.",
      ],
      checklist: [
        "Equipo estable: Roxana, Carmen y Haydee",
        "Promo 20% de lunes a miércoles en efectivo",
        "4,7★ en Google, con 381 reseñas",
      ],
      photo: null,
    },
    reviews: [
      { text: "Sigo siendo clienta desde que estaban en Mendoza y Cabildo. La atención siempre es PERFECTA. Tengo otros lugares cerca de casa pero sigo yendo porque nunca tuve un problema, son delicadas, educadas, trabajan minuciosamente y tienen excelente precio…", author: "Flor Leyton" },
      { text: "El mejor lugar de todo Buenos Aires! Haydee es una genia!!! Trabajan súper bien, rápido y prolijo! Muy buenos precios también.", author: "Florencia y Matias" },
    ],
    visitTitle: "Visitanos en Belgrano",
    cta: {
      title: "¿Reservamos tu turno?",
      lead: "Elegí zona, día y hora online. Tarda 30 segundos.",
    },
  },

  services: [
    { id: "piernas",    name: "Piernas completas",   desc: "Piernas enteras con cera, prolijo y rápido.", price: 14000, duration: 30 },
    { id: "cavado",     name: "Cavado + axilas",     desc: "El combo más pedido, en una sola sesión.", price: 12000, duration: 30 },
    { id: "cara",       name: "Cara completa",       desc: "Cejas, bozo y rostro con trabajo minucioso.", price: 9000, duration: 30 },
    { id: "brazos",     name: "Brazos",              desc: "Brazos completos o medios, como prefieras.", price: 10000, duration: 30 },
    { id: "espalda",    name: "Espalda o glúteos",   desc: "Zonas amplias con cera de calidad.", price: 11000, duration: 30 },
    { id: "dermopulido", name: "Dermopulido",        desc: "Piel renovada y suave, ideal después de la depilación.", price: 16000, duration: 45 },
  ],

  staff: [
    { id: "roxana", name: "Roxana", role: "Esteticista", daysOff: [] },
    { id: "carmen", name: "Carmen", role: "Esteticista", daysOff: [] },
    { id: "haydee", name: "Haydee", role: "Esteticista", daysOff: [] },
  ],

  /* Horarios reales de Google (jul 2026): lun a sáb de corrido. */
  hours: {
    0: null,
    1: [["09:00", "19:00"]],
    2: [["09:00", "19:00"]],
    3: [["09:00", "19:00"]],
    4: [["09:00", "19:00"]],
    5: [["09:00", "19:00"]],
    6: [["09:00", "19:00"]],
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
