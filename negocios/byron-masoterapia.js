/* =========================================================
   NEGOCIO · Byron Masoterapia y Estética (Lista A #4)
   ---------------------------------------------------------
   Datos reales de Google (jul 2026): 4,9★ (350), Av. Cabildo
   2228 (galería), lun-sáb 9-19:30. Dueño: Byron Fabara, con
   formación certificada en EE.UU. (JSG, 550 hs) y Tailandia.
   Precio real de su flyer: masaje CBD $75.000. El IG que
   aparece en un flyer es de otra marca: NO publicar.
   Fotos: perfil de Google. Precios de ejemplo salvo CBD.
   ========================================================= */
window.PELU_NEGOCIOS = window.PELU_NEGOCIOS || {};
window.PELU_NEGOCIOS["byron-masoterapia"] = {
  slug: "byron-masoterapia",
  orden: 4,
  rubro: "Masoterapia",

  business: {
    over: "Masoterapia & estética",
    name: "Byron",
    tagline: "Masajes con oficio en Belgrano.",
    phoneDisplay: "011 6705-8498",
    phoneE164: "+541167058498",
    whatsapp: "541167058498",
    waDefaultMsg: "Hola Byron! Quería reservar un masaje.",
    address: { street: "Av. Cabildo 2228", area: "Belgrano, CABA", zip: "C1428AAT" },
    mapsQuery: "Av.+Cabildo+2228,+CABA",
    instagram: "",
    rating: { score: "4,9", count: 350 },
    faviconEmoji: "💆",
  },

  /* Paleta del estudio real: lino crudo, madera clara y luz de vela. */
  theme: {
    colors: {
      "bone":       "#faf7f1",
      "bone-2":     "#f3ecdf",
      "sand":       "#e6dbc8",
      "ink":        "#2b2118",
      "espresso":   "#3a2d21",
      "espresso-2": "#4b3b2b",
      "muted":      "#7a6a58",
      "line":       "#e8e0d1",
      "clay":       "#a4703f",
      "clay-deep":  "#7f5227",
      "clay-soft":  "#ead9c3",
      "gold":       "#c9a36a",
    },
  },

  content: {
    meta: {
      title: "Byron Masoterapia · Belgrano · Masajes descontracturantes",
      description: "Masoterapia en Belgrano: descontracturantes, piedras calientes, maderoterapia y masaje con CBD. Formación certificada en EE.UU. 4,9★ con 350 reseñas. Av. Cabildo 2228.",
    },
    hero: {
      eyebrow: "Belgrano · Masoterapia",
      title: "Manos que saben leer tu espalda.",
      lead: "Byron Fabara se formó en Estados Unidos y suma técnicas tailandesas, piedras calientes, maderoterapia y masajes con CBD. Sus clientes lo dicen simple: sabe exactamente dónde trabajar.",
      proof2: "Formación certificada en EE.UU. y Tailandia",
      badgeNum: "550",
      badgeLabel: "horas de formación certificada",
      photo: { src: "assets/byron-masoterapia/sala.jpg", alt: "Sala de masajes con dos camillas preparadas, toallas de lino y decoración en madera" },
    },
    servicesIntro: "Masajes descontracturantes, relajantes y técnicas especiales. Sesiones que se sienten desde la primera.",
    gallery: {
      intro: "El estudio: lino, madera, piedras calientes y los aceites de siempre.",
      photos: [
        { src: "assets/byron-masoterapia/productos.jpg", alt: "Cremas corporales y óleo anti stress junto a una herramienta de maderoterapia" },
        { src: "assets/byron-masoterapia/piedras.jpg", alt: "Sesión de masaje con piedras calientes sobre la espalda" },
      ],
    },
    about: {
      title: "Byron Fabara, oficio certificado",
      paragraphs: [
        "Byron se formó como masoterapeuta en New Jersey, con 550 horas en la JSG School of Massage Therapy, y siguió sumando: masaje tailandés, reflexología tailandesa y certificación en RCP. Las 350 reseñas repiten la misma idea: lee el cuerpo y sabe dónde hace falta trabajar.",
        "El estudio queda en una galería de Av. Cabildo 2228: dos camillas, lino crudo, madera clara y cero apuro. Trabaja con cremas y óleos Véspero, y su técnica estrella es el masaje descontracturante con aceite CBD.",
      ],
      checklist: [
        "4,9★ en Google, con 350 reseñas",
        "Formación certificada en EE.UU. y Tailandia",
        "Piedras calientes, maderoterapia y CBD",
      ],
      photo: null,
    },
    reviews: [
      { text: "Excelente experiencia. El masaje es muy bueno, se nota que sabe perfectamente dónde trabajar y cómo aliviar la tensión. El ambiente es muy relajante, ideal para desconectar un rato y descansar. La verdad, me fui muy conforme y renovado. Lo recomiendo totalmente.", author: "Francisco Paredes" },
      { text: "Me había hecho con Byron hace unos años y perdí su contacto, hoy pude encontrarlo y es realmente muy bueno en lo que hace, cómo lee el cuerpo y sabe dónde tiene que hacerlo. Probé su técnica de masajes con CBD y recomiendo muchísimo…", author: "Iván Canga" },
    ],
    visitTitle: "Visitanos en Belgrano",
    cta: {
      title: "¿Te sacamos esa contractura?",
      lead: "Elegí masaje, día y hora online. Tarda 30 segundos.",
    },
  },

  services: [
    { id: "descontracturante", name: "Masaje descontracturante", desc: "Cuello, espalda y puntos de tensión. El clásico que resuelve.", price: 38000, duration: 60 },
    { id: "relajante",         name: "Masaje relajante",         desc: "Para bajar un cambio: presión suave y ambiente en calma.", price: 35000, duration: 60 },
    { id: "piedras",           name: "Piedras calientes",        desc: "Calor profundo que afloja lo que el masaje solo no llega.", price: 45000, duration: 75 },
    { id: "cbd",               name: "Descontracturante con CBD", desc: "Su técnica estrella: aceite CBD para potenciar la recuperación.", price: 75000, duration: 60 },
    { id: "reflexologia",      name: "Reflexología tailandesa",  desc: "Trabajo sobre pies y puntos reflejos, técnica certificada.", price: 30000, duration: 45 },
    { id: "maderoterapia",     name: "Maderoterapia",            desc: "Herramientas de madera para modelar y descontracturar.", price: 40000, duration: 60 },
  ],

  staff: [
    { id: "byron", name: "Byron", role: "Masoterapeuta", daysOff: [] },
  ],

  /* Horarios reales de Google (jul 2026): lun a sáb de corrido. */
  hours: {
    0: null,
    1: [["09:00", "19:30"]],
    2: [["09:00", "19:30"]],
    3: [["09:00", "19:30"]],
    4: [["09:00", "19:30"]],
    5: [["09:00", "19:30"]],
    6: [["09:00", "19:30"]],
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
