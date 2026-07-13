/* =========================================================
   NEGOCIO · Peluquería Ezeangel (Lista A #9)
   ---------------------------------------------------------
   Datos reales de Google (jul 2026): 4,3★ (134), Av. Congreso
   2185, mar-sáb 10-19. Staff en reseñas: Martín, Emanuel,
   Vanesa y Claudia. Trabajan con L'Oréal INOA y Kérastase
   (visible en vidriera y góndolas). Fotos: perfil de Google.
   Precios de ejemplo del rubro.
   ========================================================= */
window.PELU_NEGOCIOS = window.PELU_NEGOCIOS || {};
window.PELU_NEGOCIOS["peluqueria-ezeangel"] = {
  slug: "peluqueria-ezeangel",
  orden: 9,
  rubro: "Peluquería unisex",

  business: {
    over: "Peluquería unisex",
    name: "Ezeangel",
    tagline: "Color, corte y tratamientos en Belgrano.",
    phoneDisplay: "011 4702-4479",
    phoneE164: "+541147024479",
    whatsapp: "541147024479",
    waDefaultMsg: "Hola Ezeangel! Quería reservar un turno.",
    address: { street: "Av. Congreso 2185", area: "Belgrano, CABA", zip: "C1428BVE" },
    mapsQuery: "Av.+Congreso+2185,+CABA",
    instagram: "",
    rating: { score: "4,3", count: 134 },
    faviconEmoji: "💇",
  },

  /* Paleta del local real: cartel negro, interiores crema con terracota y rojo. */
  theme: {
    colors: {
      "bone":       "#faf6f1",
      "bone-2":     "#f4ede4",
      "sand":       "#e3d5c5",
      "ink":        "#221a15",
      "espresso":   "#2b211b",
      "espresso-2": "#3c2e24",
      "muted":      "#6f6157",
      "line":       "#e6dcd0",
      "clay":       "#b84a32",
      "clay-deep":  "#993a24",
      "clay-soft":  "#f1d9cf",
      "gold":       "#c29455",
    },
  },

  content: {
    meta: {
      title: "Peluquería Ezeangel · Belgrano · Color, corte y tratamientos",
      description: "Peluquería unisex en Belgrano: balayage, coloración INOA sin amoníaco, alisados, tratamientos Kérastase y manicuría. Av. Congreso 2185.",
    },
    hero: {
      eyebrow: "Belgrano · Peluquería unisex",
      title: "Color y corte con manos expertas.",
      lead: "Ezeangel trabaja sobre Av. Congreso con L'Oréal Professionnel y Kérastase: balayage, alisados, tratamientos y manicuría, con cabinas privadas y un equipo de estilistas con años de oficio.",
      proof2: "Coloración INOA, sin amoníaco",
      badgeNum: "4",
      badgeLabel: "estilistas con años de oficio",
      photo: { src: "assets/peluqueria-ezeangel/fachada.jpg", alt: "Fachada de Peluquería Ezeangel sobre Av. Congreso, con el salón iluminado en actividad" },
    },
    servicesIntro: "Del corte al balayage, con productos L'Oréal Professionnel y Kérastase.",
    gallery: {
      intro: "El salón: estaciones, cabinas privadas y productos de línea.",
      photos: [
        { src: "assets/peluqueria-ezeangel/salon.jpg", alt: "Sillones blancos y estaciones de corte con espejos" },
        { src: "assets/peluqueria-ezeangel/interior.jpg", alt: "Interior del salón con puestos de trabajo en tonos cálidos", wide: true },
        { src: "assets/peluqueria-ezeangel/esmaltes.jpg", alt: "Exhibidor de esmaltes de colores con la tarjeta de servicios" },
        { src: "assets/peluqueria-ezeangel/cabinas.jpg", alt: "Cabinas con tabiques terracota y cortinas rojas" },
        { src: "assets/peluqueria-ezeangel/kerastase.jpg", alt: "Productos Kérastase en tonos dorados sobre el estante" },
      ],
    },
    about: {
      title: "Cada uno tiene su estilista",
      paragraphs: [
        "Ezeangel es de esas peluquerías donde el cliente vuelve siempre con el suyo: Martín, Emanuel, Vanesa o Claudia, que aparecen nombrados una y otra vez en las reseñas. Balayage con efecto natural, alisados y color hecho con dedicación.",
        "El local tiene cabinas privadas con cortinas para tratamientos, y trabaja con L'Oréal Professionnel INOA (color sin amoníaco) y Kérastase. También hacen manicuría y belleza de pies.",
      ],
      checklist: [
        "Elegí a tu estilista al reservar",
        "Cabinas privadas para tratamientos",
        "L'Oréal Professionnel y Kérastase",
      ],
      photo: { src: "assets/peluqueria-ezeangel/corte.jpg", alt: "Estilista cortando puntas con peine y tijera sobre cabello lacio" },
    },
    reviews: [
      { text: "Me realicé un balayage con mechas, y los resultados superaron todas mis expectativas. Lograron un efecto natural tal como lo había solicitado. La atención fue excelente, especialmente Claudia, quien me tiñó con muchísima dedicación y profesionalismo…", author: "Camila K" },
      { text: "Excelente peluquería! Me atendió Emanuel y Vanesa. Recomiendo al 100%.", author: "Evelyn Riba" },
    ],
    visitTitle: "Visitanos en Belgrano",
    cta: {
      title: "¿Cambio de look?",
      lead: "Elegí servicio, estilista, día y hora online. Tarda 30 segundos.",
    },
  },

  services: [
    { id: "corte",     name: "Corte y peinado",       desc: "Corte con lavado y brushing incluido, para él y para ella.", price: 18000, duration: 45 },
    { id: "balayage",  name: "Balayage & mechas",     desc: "Efecto natural e iluminado, hecho con paciencia.", price: 55000, duration: 120 },
    { id: "color",     name: "Coloración INOA",       desc: "Color sin amoníaco de L'Oréal, cuida el pelo y el cuero cabelludo.", price: 40000, duration: 90 },
    { id: "alisado",   name: "Alisado",               desc: "Liso duradero con productos profesionales.", price: 60000, duration: 120 },
    { id: "kerastase", name: "Tratamiento Kérastase", desc: "Nutrición profunda en cabina privada.", price: 25000, duration: 45 },
    { id: "manicuria", name: "Manicuría & pies",      desc: "Manos y belleza de pies con esmaltes Jessica.", price: 18000, duration: 60 },
  ],

  staff: [
    { id: "martin",  name: "Martín",  role: "Estilista", daysOff: [] },
    { id: "emanuel", name: "Emanuel", role: "Estilista", daysOff: [] },
    { id: "vanesa",  name: "Vanesa",  role: "Estilista", daysOff: [] },
    { id: "claudia", name: "Claudia", role: "Colorista", daysOff: [] },
  ],

  /* Horarios reales de Google (jul 2026): mar a sáb. */
  hours: {
    0: null,
    1: null,
    2: [["10:00", "19:00"]],
    3: [["10:00", "19:00"]],
    4: [["10:00", "19:00"]],
    5: [["10:00", "19:00"]],
    6: [["10:00", "19:00"]],
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
