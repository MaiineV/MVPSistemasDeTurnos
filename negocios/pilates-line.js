/* =========================================================
   NEGOCIO · Pilates Line (Lista A #13)
   ---------------------------------------------------------
   Datos reales de Google (jul 2026): 4,2★ (93), Av. Congreso
   2393 1er piso. IG verificado en la vidriera: @pilatesline.estudio.
   Instructoras en reseñas: Maru (dueña) y Marina. Lema real
   pintado en la pared: "El cambio se produce a través del
   movimiento" (Joseph Pilates). Grupos de hasta 7.
   OJO: viernes figura "24 horas" en Google (error de carga),
   se normalizó a 8-21. Fotos: perfil de Google.
   Precios de ejemplo del rubro.
   ========================================================= */
window.PELU_NEGOCIOS = window.PELU_NEGOCIOS || {};
window.PELU_NEGOCIOS["pilates-line"] = {
  slug: "pilates-line",
  orden: 13,
  rubro: "Pilates reformer",

  business: {
    over: "Estudio de pilates",
    name: "Pilates Line",
    tagline: "Reformer en grupos reducidos, en Belgrano.",
    phoneDisplay: "011 6694-1292",
    phoneE164: "+541166941292",
    whatsapp: "541166941292",
    waDefaultMsg: "Hola Pilates Line! Quería reservar una clase.",
    address: { street: "Av. Congreso 2393, 1er piso", area: "Belgrano, CABA", zip: "C1428BVJ" },
    mapsQuery: "Av.+Congreso+2393,+CABA",
    instagram: "pilatesline.estudio",
    rating: { score: "4,2", count: 93 },
    faviconEmoji: "🧘",
  },

  /* Paleta del estudio real: paredes lila, colchonetas violetas, LED violeta. */
  theme: {
    colors: {
      "bone":       "#faf9f7",
      "bone-2":     "#f2efe9",
      "sand":       "#e3dacb",
      "ink":        "#1d1a22",
      "espresso":   "#272231",
      "espresso-2": "#332c42",
      "muted":      "#6f6a7a",
      "line":       "#e4e0e9",
      "clay":       "#6f5aa8",
      "clay-deep":  "#59468c",
      "clay-soft":  "#ede8f6",
      "gold":       "#b98e55",
    },
  },

  content: {
    meta: {
      title: "Pilates Line · Belgrano · Reformer en grupos reducidos",
      description: "Estudio de pilates reformer en Belgrano: grupos de hasta 7, corrección personalizada y equipamiento completo. Av. Congreso 2393, 1er piso.",
    },
    hero: {
      eyebrow: "Belgrano · Pilates reformer",
      title: "El cambio se produce a través del movimiento.",
      lead: "Pilates Line es un estudio de reformer en Av. Congreso 2393: grupos reducidos de hasta 7, instructoras que corrigen cada postura con amabilidad y un espacio pensado para que quieras volver.",
      proof2: "Camas reformer con torre y equipamiento completo",
      badgeNum: "7",
      badgeLabel: "personas máximo por clase",
      photo: { src: "assets/pilates-line/sala.jpg", alt: "Sala principal del estudio con camas reformer, barra de madera y espejos" },
    },
    servicesIntro: "Reservá tu lugar: clases de reformer en grupos chicos, con corrección personalizada.",
    gallery: {
      intro: "El estudio: reformers, luz natural y detalles cuidados.",
      photos: [
        { src: "assets/pilates-line/clase.jpg", alt: "Clase grupal de pilates reformer en el estudio", wide: true },
        { src: "assets/pilates-line/fachada.jpg", alt: "Fachada del estudio sobre Av. Congreso, con el lema de Joseph Pilates en el cartel" },
        { src: "assets/pilates-line/recepcion.jpg", alt: "Recepción del estudio con sillón vintage y pared texturada" },
      ],
    },
    about: {
      title: "Maru y su equipo",
      paragraphs: [
        "El lema del estudio está pintado en la pared y es de Joseph Pilates: el cambio se produce a través del movimiento, y el movimiento cura. Maru y sus instructoras lo bajan a tierra con grupos de hasta 7, corrección amable y constante, y alumnas que se sienten acompañadas desde la primera clase.",
        "El espacio ayuda: camas reformer con torre, barra de madera, pared de espejos, vestuario propio y una recepción con sillón vintage. De día, luz natural; a la noche, velas.",
      ],
      checklist: [
        "Grupos reducidos: máximo 7 por clase",
        "Reformers con torre y accesorios completos",
        "Vestuario propio en el estudio",
      ],
      photo: { src: "assets/pilates-line/reformer.jpg", alt: "Alumna ejercitando en reformer frente a la vidriera con el logo del estudio" },
    },
    reviews: [
      { text: "Excelente estudio de Pilates! Muy recomendable!! Súper profesional Maru y todo su equipo, siempre atentas a corregirte las posturas en cada ejercicio de una manera muy amable, un espacio muy cálido para sentirte bien y acompañada e ir superándote cada día.", author: "Marisa Lopez" },
      { text: "El ambiente es muy agradable y motivador, te sentís cómodo desde el primer día. Es un espacio tranquilo y bien equipado, ideal para concentrarse en el entrenamiento.", author: "Silvia Contreras" },
    ],
    visitTitle: "Visitanos en Belgrano",
    cta: {
      title: "¿Probás una clase esta semana?",
      lead: "Elegí clase, día y hora online. Tarda 30 segundos.",
    },
  },

  services: [
    { id: "prueba",     name: "Clase de prueba",        desc: "Tu primera vez en reformer, con evaluación postural incluida.", price: 8000, duration: 60 },
    { id: "grupal",     name: "Clase grupal reformer",  desc: "Grupos de hasta 7, con corrección personalizada.", price: 12000, duration: 60 },
    { id: "individual", name: "Clase individual",       desc: "Una instructora para vos, ideal para objetivos puntuales.", price: 20000, duration: 60 },
    { id: "duo",        name: "Clase dúo",              desc: "De a dos: con tu amiga, tu pareja o tu vieja.", price: 15000, duration: 60 },
    { id: "rehab",      name: "Post-rehabilitación",    desc: "Trabajo suave y guiado después de una lesión.", price: 18000, duration: 60 },
    { id: "stretching", name: "Stretching & movilidad", desc: "Elongación profunda para complementar el reformer.", price: 12000, duration: 60 },
  ],

  staff: [
    { id: "maru",   name: "Maru",   role: "Instructora", daysOff: [] },
    { id: "marina", name: "Marina", role: "Instructora", daysOff: [] },
  ],

  /* Horarios reales de Google (jul 2026), viernes normalizado (figuraba 24 hs por error). */
  hours: {
    0: null,
    1: [["08:00", "21:00"]],
    2: [["08:00", "21:00"]],
    3: [["08:00", "21:00"]],
    4: [["08:00", "21:00"]],
    5: [["08:00", "21:00"]],
    6: null,
  },

  booking: { enabled: true, slotMinutes: 60, windowDays: 14, leadTimeMinutes: 60 },

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
