/* =========================================================
   NEGOCIO · Lo de Nelly Depilación (Lista A #12)
   ---------------------------------------------------------
   Datos reales de Google (jul 2026): 4,8★ (102), Vidal 1928,
   mar-sáb 9-18. Staff en reseñas: Nelly (dueña) y Eva.
   Toldo real: "Depilación sistema español, manicuría y
   pedicuría". Paleta: coral-rojo de paredes y boxes del local.
   Fotos: perfil de Google. Precios de ejemplo del rubro.
   ========================================================= */
window.PELU_NEGOCIOS = window.PELU_NEGOCIOS || {};
window.PELU_NEGOCIOS["lo-de-nelly"] = {
  slug: "lo-de-nelly",
  orden: 12,
  rubro: "Depilación",

  business: {
    over: "Depilación",
    name: "Lo de Nelly",
    tagline: "Cera española, manicuría y pedicuría.",
    phoneDisplay: "011 5040-9032",
    phoneE164: "+5491150409032",
    whatsapp: "5491150409032",
    waDefaultMsg: "Hola Nelly! Quería reservar un turno.",
    address: { street: "Vidal 1928", area: "Belgrano, CABA", zip: "C1428CSF" },
    mapsQuery: "Vidal+1928,+CABA",
    instagram: "",
    rating: { score: "4,8", count: 102 },
    faviconEmoji: "🌺",
  },

  /* Paleta del local real: coral-rojo de paredes y boxes, sillón mostaza. */
  theme: {
    colors: {
      "bone":       "#faf6f1",
      "bone-2":     "#f4ede4",
      "sand":       "#e7daca",
      "ink":        "#2b1f1b",
      "espresso":   "#3b241c",
      "espresso-2": "#4a2c21",
      "muted":      "#6e5d54",
      "line":       "#e2d5c6",
      "clay":       "#d64533",
      "clay-deep":  "#b0362a",
      "clay-soft":  "#f6dcd4",
      "gold":       "#c98a2e",
    },
  },

  content: {
    meta: {
      title: "Lo de Nelly · Belgrano · Depilación sistema español",
      description: "Depilación con cera española, manicuría y pedicuría en Belgrano. Boxes privados y años de oficio. 4,8★ en Google. Vidal 1928.",
    },
    hero: {
      eyebrow: "Belgrano · Depilación española",
      title: "La depilación de siempre, bien hecha.",
      lead: "Nelly atiende en Vidal 1928 hace años: depilación sistema español, manicuría y pedicuría, con boxes privados, té mientras esperás y ese trato que hace que las clientas no cambien de lugar.",
      proof2: "Boxes individuales con cortinas",
      badgeNum: "4,8★",
      badgeLabel: "en 102 reseñas de Google",
      photo: { src: "assets/lo-de-nelly/pasillo.jpg", alt: "Pasillo interior del local con boxes de atención separados por cortinas" },
    },
    servicesIntro: "Depilación con cera española, manicuría y pedicuría. Turnos que se cumplen.",
    gallery: {
      intro: "El local: fachada de toldo naranja, boxes y sector de manicuría.",
      photos: [
        { src: "assets/lo-de-nelly/fachada.jpg", alt: "Fachada de Lo de Nelly en Vidal 1928, con su toldo naranja característico", wide: true },
        { src: "assets/lo-de-nelly/cabinas.jpg", alt: "Cabinas individuales con cortinas y paredes coral" },
        { src: "assets/lo-de-nelly/manicuria.jpg", alt: "Estación de manicuría con exhibidores de esmaltes" },
      ],
    },
    about: {
      title: "Nelly y Eva, años de oficio",
      paragraphs: [
        "Lo de Nelly es un clásico del barrio: cera española bien usada, boxes individuales con cortinas y detalles de otra época, como el té con revista mientras esperás o las ojotas prestadas para no arruinar el esmalte recién puesto.",
        "Las reseñas hablan de años de fidelidad: calidez, dedicación y precios razonables. Eva completa el equipo en depilación, manicuría y pedicuría.",
      ],
      checklist: [
        "Cera sistema español",
        "Boxes privados con cortina",
        "Té y revista mientras esperás",
      ],
      photo: { src: "assets/lo-de-nelly/recepcion.jpg", alt: "Rincón de espera con sillón mostaza, planta y la vidriera esmerilada con el logo" },
    },
    reviews: [
      { text: "Nelly es excelente persona y profesional. Hace años me atiendo con ella y su calidez y dedicación son impecables!", author: "Laura Paipa" },
      { text: "Excelente atención… me dieron una revista y me ofrecieron té… un placer, Eva muy buena profesional, gracias.", author: "Diana Mancuso" },
    ],
    visitTitle: "Visitanos en Belgrano",
    cta: {
      title: "¿Turno para esta semana?",
      lead: "Elegí servicio, día y hora online. Tarda 30 segundos.",
    },
  },

  services: [
    { id: "piernas",  name: "Piernas completas", desc: "Con cera española, la que menos duele.", price: 13000, duration: 30 },
    { id: "cavado",   name: "Cavado",            desc: "Prolijo y rápido, en box privado.", price: 9000, duration: 30 },
    { id: "axilas",   name: "Axilas",            desc: "La zona express: entrás y salís.", price: 6000, duration: 30 },
    { id: "cara",     name: "Cara completa",     desc: "Cejas, bozo y rostro con cera suave.", price: 9000, duration: 30 },
    { id: "manicuria", name: "Manicuría",        desc: "Manos prolijas con esmaltes OPI.", price: 12000, duration: 45 },
    { id: "pedicuria", name: "Pedicuría",        desc: "Belleza de pies completa, con ojotas prestadas y todo.", price: 15000, duration: 60 },
  ],

  staff: [
    { id: "nelly", name: "Nelly", role: "Depilación", daysOff: [] },
    { id: "eva",   name: "Eva",   role: "Depilación & manicuría", daysOff: [] },
  ],

  /* Horarios reales de Google (jul 2026): mar a sáb 9-18. */
  hours: {
    0: null,
    1: null,
    2: [["09:00", "18:00"]],
    3: [["09:00", "18:00"]],
    4: [["09:00", "18:00"]],
    5: [["09:00", "18:00"]],
    6: [["09:00", "18:00"]],
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
