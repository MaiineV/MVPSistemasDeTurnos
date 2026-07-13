/* =========================================================
   NEGOCIO · Coco Buenos Aires, The Beauty Bar (Lista A #1)
   ---------------------------------------------------------
   Datos reales de Google (jul 2026): 4,0★ (188), Mendoza 2619,
   lun-sáb 10-20. Staff nombrado en reseñas: Ornella, Ana María,
   Angel. Tiene 4+ sedes (pitch multi-sucursal: este demo muestra
   la de Belgrano). Fotos: perfil de Google del negocio.
   Precios de ejemplo del rubro.
   ========================================================= */
window.PELU_NEGOCIOS = window.PELU_NEGOCIOS || {};
window.PELU_NEGOCIOS["coco-buenos-aires"] = {
  slug: "coco-buenos-aires",
  orden: 1,
  rubro: "Beauty bar · nails",

  business: {
    over: "Beauty Bar",
    name: "Coco",
    tagline: "Uñas, pestañas y cejas en Belgrano.",
    phoneDisplay: "011 3041-3030",
    phoneE164: "+541130413030",
    whatsapp: "541130413030",
    waDefaultMsg: "Hola Coco! Quería reservar un turno.",
    address: { street: "Mendoza 2619", area: "Belgrano, CABA", zip: "C1428DKW" },
    mapsQuery: "Mendoza+2619,+CABA",
    instagram: "",   // tienen redes pero el handle no está verificado: no inventar
    rating: { score: "4,0", count: 188 },
    faviconEmoji: "🥥",
  },

  /* Paleta del salón real: mesas blancas, sillones negros y empapelado greige. */
  theme: {
    colors: {
      "bone":       "#faf8f5",
      "bone-2":     "#f4efe9",
      "sand":       "#e6ded4",
      "ink":        "#1b1917",
      "espresso":   "#211e1b",
      "espresso-2": "#322d29",
      "muted":      "#6e6459",
      "line":       "#e9e3db",
      "clay":       "#8a7364",
      "clay-deep":  "#6c5849",
      "clay-soft":  "#d8cbbf",
      "gold":       "#c0a57c",
    },
  },

  content: {
    meta: {
      title: "Coco · The Beauty Bar · Belgrano · Uñas, pestañas y cejas",
      description: "Beauty bar en Belgrano: manicura y nail art, pedicuría, extensiones de pestañas y cejas. Especialistas por área, packs y gift cards. Mendoza 2619.",
    },
    hero: {
      eyebrow: "Belgrano · The Beauty Bar",
      title: "Tus uñas, tu momento, tu beauty bar.",
      lead: "Coco es el beauty bar de Belgrano: manicura y nail art, pedicuría, pestañas y cejas, con café de cortesía y un equipo que las clientas nombran en las reseñas como si fuera de la casa.",
      proof2: "Café Nespresso de cortesía mientras te atendés",
      badgeNum: "4",
      badgeLabel: "sedes en Buenos Aires",
      photo: { src: "assets/coco-buenos-aires/salon.jpg", alt: "Interior del beauty bar: mesas de manicura blancas, empapelado geométrico y pizarra con los servicios" },
    },
    servicesIntro: "Especialistas por área: uñas, pestañas y cejas. Con Coco Packs, beneficios de martes a viernes y gift cards para regalar.",
    gallery: {
      intro: "Trabajos reales del equipo: freehand, french, baby boomer y chrome.",
      photos: [
        { src: "assets/coco-buenos-aires/nail-art.jpg", alt: "Nail art a mano alzada con corazones, llamas y ojo turco en tonos lila y crema" },
        { src: "assets/coco-buenos-aires/french-glitter.jpg", alt: "Uñas almendra con puntas de glitter plateado y detalles en blanco" },
        { src: "assets/coco-buenos-aires/pestanas.jpg", alt: "Extensiones de pestañas con efecto volumen y ceja perfilada", wide: true },
        { src: "assets/coco-buenos-aires/baby-boomer.jpg", alt: "Manicura baby boomer con degradé de rosa a blanco, con luz natural" },
        { src: "assets/coco-buenos-aires/chrome.jpg", alt: "Uñas almendra con esmaltado chrome perlado en tono malva" },
      ],
    },
    about: {
      title: "Un equipo que conocés por nombre",
      paragraphs: [
        "Coco no es una manicura al paso: es un beauty bar. Mesas blancas, empapelado geométrico, café de cortesía y especialistas por área. Ornella, Ana María y Angel aparecen nombrados en las reseñas como si fueran de la casa, porque las clientas vuelven todos los meses.",
        "Uñas esculpidas, semi, nail art a mano alzada, pestañas con volumen ruso, cejas y pedicuría. Y siempre hay un beneficio dando vueltas: Coco Packs, descuentos de martes a viernes y gift cards para regalar.",
      ],
      checklist: [
        "Especialistas por área: uñas, pestañas y cejas",
        "Coco Packs y beneficios de martes a viernes",
        "Café de cortesía mientras te atendés",
      ],
      photo: { src: "assets/coco-buenos-aires/marca.jpg", alt: "Manicura recién hecha sosteniendo la tarjeta de The Beauty Bar by Coco Buenos Aires" },
    },
    reviews: [
      { text: "Me atiendo siempre acá y buenísima la atención. Siempre voy con Ornella que es una genia en todo. Lo recomiendo siempre.", author: "Mariana Diaz" },
      { text: "Los mejores lejos! Todos los meses voy, siempre tienen un lugar para mí! Ana María, Angel, todos!! Unos divinos siempre, me llevo una obra de arte en mis manos. Vale la pena cada centavo.", author: "Giovanna Pechuan" },
    ],
    visitTitle: "Visitanos en Belgrano",
    cta: {
      title: "¿Nos vemos en el beauty bar?",
      lead: "Elegí servicio, día y hora online. Tarda 30 segundos.",
    },
  },

  services: [
    { id: "semi",      name: "Esmaltado semipermanente", desc: "Color liso o french con terminación perfecta, dura semanas.", price: 20000, duration: 60 },
    { id: "esculpidas", name: "Uñas esculpidas / soft gel", desc: "Largo y forma a elección, resistentes y naturales.", price: 28000, duration: 90 },
    { id: "nail-art",  name: "Nail art & diseño",         desc: "Freehand, baby boomer, chrome, glitter. Tu idea, a mano alzada.", price: 24000, duration: 75 },
    { id: "pedicuria", name: "Pedicuría completa",        desc: "Belleza de pies con esmaltado semi, en sillones cómodos.", price: 22000, duration: 60 },
    { id: "pestanas",  name: "Pestañas volumen ruso",     desc: "Extensiones pelo por pelo o con volumen, efecto de impacto.", price: 30000, duration: 90 },
    { id: "cejas",     name: "Cejas: perfilado & laminado", desc: "Diseño a medida de tu cara, con laminado opcional.", price: 18000, duration: 45 },
  ],

  staff: [
    { id: "ornella",  name: "Ornella",   role: "Nail artist", daysOff: [] },
    { id: "anamaria", name: "Ana María", role: "Manicura",    daysOff: [] },
    { id: "angel",    name: "Angel",     role: "Pestañas & cejas", daysOff: [] },
  ],

  /* Horarios reales de Google (jul 2026): lun a sáb 10-20. */
  hours: {
    0: null,
    1: [["10:00", "20:00"]],
    2: [["10:00", "20:00"]],
    3: [["10:00", "20:00"]],
    4: [["10:00", "20:00"]],
    5: [["10:00", "20:00"]],
    6: [["10:00", "20:00"]],
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
