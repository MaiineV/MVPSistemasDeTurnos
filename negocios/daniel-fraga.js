/* =========================================================
   NEGOCIO · Daniel Fraga Peluquería (Lista A #15)
   ---------------------------------------------------------
   Datos reales de Google (jul 2026): 4,3★ (84), Cdad. de la
   Paz 2775, piso 2 dto A, mar-vie 10-18, sáb 10-17. Atiende
   Dani en persona (atelier). Paleta: bordó del sillón a rayas
   que es la marca de la casa. Fotos: perfil de Google.
   Precios de ejemplo del rubro.
   ========================================================= */
window.PELU_NEGOCIOS = window.PELU_NEGOCIOS || {};
window.PELU_NEGOCIOS["daniel-fraga"] = {
  slug: "daniel-fraga",
  orden: 15,
  rubro: "Peluquería atelier",

  business: {
    over: "Peluquería",
    name: "Daniel Fraga",
    tagline: "Color y corte de autor, en Belgrano.",
    phoneDisplay: "011 3058-4547",
    phoneE164: "+541130584547",
    whatsapp: "541130584547",
    waDefaultMsg: "Hola Dani! Quería reservar un turno.",
    address: { street: "Cdad. de la Paz 2775, piso 2", area: "Belgrano, CABA", zip: "C1428CPA" },
    mapsQuery: "Ciudad+de+la+Paz+2775,+CABA",
    instagram: "",
    rating: { score: "4,3", count: 84 },
    faviconEmoji: "✂️",
  },

  /* Paleta del atelier real: blanco luminoso + bordó del sillón a rayas. */
  theme: {
    colors: {
      "bone":       "#faf8f5",
      "bone-2":     "#f4efe8",
      "sand":       "#e7dcc9",
      "ink":        "#211a1c",
      "espresso":   "#2b2224",
      "espresso-2": "#3a2c2f",
      "muted":      "#6f625e",
      "line":       "#e5ddd4",
      "clay":       "#96434b",
      "clay-deep":  "#7a343c",
      "clay-soft":  "#f0dedd",
      "gold":       "#b98a55",
    },
  },

  content: {
    meta: {
      title: "Daniel Fraga · Belgrano · Peluquería atelier",
      description: "Salón atelier en Belgrano: balayage, mechas, alisados y corte con atención personal de Dani. Cdad. de la Paz 2775, piso 2.",
    },
    hero: {
      eyebrow: "Belgrano · Salón atelier",
      title: "Color y corte con luz natural.",
      lead: "Daniel Fraga atiende en su atelier de Ciudad de la Paz 2775: un segundo piso con balcón, luz natural y vista arbolada, especializado en balayage, mechas y alisados.",
      proof2: "Atención personal de Dani, sin trabajo en serie",
      badgeNum: "2º",
      badgeLabel: "piso con balcón y luz natural",
      photo: { src: "assets/daniel-fraga/salon.jpg", alt: "Interior del atelier: sillones de corte frente a espejos y vista arbolada por los ventanales" },
    },
    servicesIntro: "Corte, color y alisados en un atelier sin apuro.",
    gallery: {
      intro: "Trabajos del atelier: balayage, bob y mechas.",
      photos: [
        { src: "assets/daniel-fraga/balayage.jpg", alt: "Balayage rubio con reflejos sobre corte lob recto" },
        { src: "assets/daniel-fraga/bob.jpg", alt: "Bob invertido rubio visto desde atrás, terminación prolija" },
        { src: "assets/daniel-fraga/lavado.jpg", alt: "El sector de lavado del atelier, con lámpara cálida de cobre", wide: true },
        { src: "assets/daniel-fraga/castano.jpg", alt: "Corte bob castaño con mechas iluminadoras" },
        { src: "assets/daniel-fraga/mechas.jpg", alt: "Mechas rubias sobre corte largo medio, vista de espalda" },
      ],
    },
    about: {
      title: "Dani, tijera de autor",
      paragraphs: [
        "Daniel Fraga corta y colorea en persona, en un atelier en un segundo piso de Ciudad de la Paz: sillones frente a espejos grandes, un sillón a rayas bordó que es marca de la casa y ventanales que dan a los árboles.",
        "Su fuerte es el color: balayage con efecto natural, mechas iluminadoras y alisados. Reservás online y el turno es tuyo: acá no se trabaja en serie.",
      ],
      checklist: [
        "Atención personal de Dani",
        "Especialista en balayage y alisados",
        "Atelier con balcón y luz natural",
      ],
      photo: { src: "assets/daniel-fraga/clienta-bob.jpg", alt: "Clienta con bob rubio recién terminado en el atelier" },
    },
    reviews: [
      { text: "Me encantó!! Dani me renovó el balayage que ya tenía de hacía mucho tiempo y me cortó. Muy profesional y simpático!! Recomiendo mucho.", author: "Shirli Brodsky" },
    ],
    visitTitle: "Visitanos en Belgrano",
    cta: {
      title: "¿Cambio de color?",
      lead: "Elegí servicio, día y hora online. Tarda 30 segundos.",
    },
  },

  services: [
    { id: "corte",    name: "Corte & styling",    desc: "Corte a medida con lavado y peinado incluidos.", price: 20000, duration: 45 },
    { id: "balayage", name: "Balayage",           desc: "El fuerte de la casa: efecto natural, hecho con tiempo.", price: 55000, duration: 120 },
    { id: "mechas",   name: "Mechas & reflejos",  desc: "Iluminación por zonas, del sutil al impacto.", price: 45000, duration: 90 },
    { id: "alisado",  name: "Alisado",            desc: "Liso duradero con productos profesionales.", price: 58000, duration: 120 },
    { id: "color",    name: "Color completo",     desc: "Cobertura pareja y brillo, del tono que quieras.", price: 38000, duration: 90 },
    { id: "brushing", name: "Brushing & peinado", desc: "Para salir de acá directo al evento.", price: 15000, duration: 45 },
  ],

  staff: [
    { id: "dani", name: "Dani", role: "Estilista", daysOff: [] },
  ],

  /* Horarios reales de Google (jul 2026): mar-vie 10-18, sáb 10-17. */
  hours: {
    0: null,
    1: null,
    2: [["10:00", "18:00"]],
    3: [["10:00", "18:00"]],
    4: [["10:00", "18:00"]],
    5: [["10:00", "18:00"]],
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
