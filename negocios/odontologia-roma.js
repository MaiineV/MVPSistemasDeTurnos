/* =========================================================
   NEGOCIO · Odontología ROMA (Lista A #14)
   ---------------------------------------------------------
   Datos reales de Google (jul 2026): 5,0★ (92), Av. Cabildo
   3073, lun-vie 9-19. Dra. Antonella ("Anto"), nombrada en
   todas las reseñas. Sus flyers dicen "turnos solo por
   WhatsApp". Paleta: azul índigo de su marca. Única foto
   usable del perfil: el consultorio (el resto son fotos
   clínicas, que no van en una landing). Sin galería a
   propósito. Precios de ejemplo del rubro.
   ========================================================= */
window.PELU_NEGOCIOS = window.PELU_NEGOCIOS || {};
window.PELU_NEGOCIOS["odontologia-roma"] = {
  slug: "odontologia-roma",
  orden: 14,
  rubro: "Odontología",

  business: {
    over: "Odontología",
    name: "ROMA",
    tagline: "Odontología sin miedo, en Belgrano.",
    phoneDisplay: "011 3626-7584",
    phoneE164: "+5491136267584",
    whatsapp: "5491136267584",
    waDefaultMsg: "Hola! Quería pedir un turno en Odontología ROMA.",
    address: { street: "Av. Cabildo 3073", area: "Belgrano, CABA", zip: "C1429AAA" },
    mapsQuery: "Av.+Cabildo+3073,+CABA",
    instagram: "",
    rating: { score: "5,0", count: 92 },
    faviconEmoji: "🦷",
  },

  /* Paleta de la marca real: azul índigo de sus flyers + consultorio blanco. */
  theme: {
    colors: {
      "bone":       "#fafbfc",
      "bone-2":     "#f1f4f8",
      "sand":       "#e9e4d8",
      "ink":        "#171d33",
      "espresso":   "#1e2a4a",
      "espresso-2": "#16203a",
      "muted":      "#5a6377",
      "line":       "#dfe4ec",
      "clay":       "#2b3a94",
      "clay-deep":  "#1f2b73",
      "clay-soft":  "#e7eaf8",
      "gold":       "#bfa46f",
    },
  },

  content: {
    meta: {
      title: "Odontología ROMA · Belgrano · Dra. Antonella",
      description: "Consultorio odontológico en Belgrano: limpiezas, blanqueamiento, implantes y ortodoncia, con un trato paciente ideal para quienes le temen al dentista. 5★ en Google. Av. Cabildo 3073.",
    },
    hero: {
      eyebrow: "Belgrano · Odontología",
      title: "Ir al dentista sin miedo, por fin.",
      lead: "La Dra. Antonella atiende en Av. Cabildo 3073 con una especialidad que no figura en el título: la paciencia. Sus 92 reseñas en Google tienen 5 estrellas, muchas de pacientes que le perdieron el miedo al dentista.",
      proof2: "De limpiezas a implantes y ortodoncia",
      badgeNum: "5★",
      badgeLabel: "perfectas, en 92 reseñas de pacientes",
      photo: { src: "assets/odontologia-roma/consultorio.jpg", alt: "Consultorio de Odontología ROMA: sillón moderno junto a un ventanal con vista a Belgrano" },
    },
    servicesIntro: "Turnos online para consultas y tratamientos. Sin apuro y explicándote todo antes.",
    gallery: {
      intro: "",
      photos: [],
    },
    about: {
      title: "La Dra. Anto, paciencia ante todo",
      paragraphs: [
        "Las reseñas de ROMA se parecen entre sí: pacientes que postergaron años una limpieza por miedo y salieron aliviados. Anto explica tu situación, espera tus tiempos y te ayuda a mejorar hábitos en lugar de retarte.",
        "El consultorio es moderno y luminoso, con vista a Belgrano, y cubre todo: odontología general, estética, blanqueamientos, implantes, endodoncia, periodoncia, ortodoncia y odontopediatría.",
      ],
      checklist: [
        "Trato paciente, ideal si el dentista te da miedo",
        "5,0★ en Google, con 92 reseñas",
        "De limpiezas a implantes y ortodoncia",
      ],
      photo: null,
    },
    reviews: [
      { text: "Recontra recomiendo!! La doc Anto es muy paciente. Te explica muy bien tu situación y lo que necesitás. Se preocupa mucho por el bienestar del paciente mientras trabaja. Una genia.", author: "Eliana Otero" },
      { text: "Estuve más de 5 años postergando la limpieza porque tenía miedo, pero hoy me animé a ir con la genia de Anto, y le pondría 10 estrellas a la experiencia. Tiene muchísima paciencia, comprende el temor, te espera y en vez de retarte te ayuda a mejorar tus hábitos de cuidado.", author: "Iara Marchand" },
    ],
    visitTitle: "Visitanos en Belgrano",
    cta: {
      title: "¿Sacamos ese turno que venís posponiendo?",
      lead: "Elegí motivo, día y hora online. Tarda 30 segundos.",
    },
  },

  services: [
    { id: "consulta",   name: "Consulta y diagnóstico", desc: "Revisión completa con plan de tratamiento explicado sin apuro.", price: 15000, duration: 30 },
    { id: "limpieza",   name: "Limpieza profunda",      desc: "Con ultrasonido y pulido. Ideal si venís postergándola.", price: 25000, duration: 45 },
    { id: "blanqueamiento", name: "Blanqueamiento",     desc: "Dientes más blancos en una sesión, con control posterior.", price: 45000, duration: 60 },
    { id: "caries",     name: "Arreglo de caries",      desc: "Restauraciones estéticas del color de tu diente.", price: 30000, duration: 45 },
    { id: "ortodoncia", name: "Consulta de ortodoncia", desc: "Evaluación y plan para alinear tu sonrisa.", price: 18000, duration: 30 },
    { id: "urgencia",   name: "Urgencia odontológica",  desc: "Dolor o golpe: te hacemos un lugar en el día.", price: 28000, duration: 30 },
  ],

  staff: [
    { id: "anto", name: "Dra. Anto", role: "Odontóloga", daysOff: [] },
  ],

  /* Horarios reales de Google (jul 2026): lun a vie 9-19. */
  hours: {
    0: null,
    1: [["09:00", "19:00"]],
    2: [["09:00", "19:00"]],
    3: [["09:00", "19:00"]],
    4: [["09:00", "19:00"]],
    5: [["09:00", "19:00"]],
    6: null,
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
