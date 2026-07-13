/* =========================================================
   NEGOCIO · Lumina Depilación Definitiva (Lista A #8)
   ---------------------------------------------------------
   Datos reales de Google (jul 2026): 5,0★ (140), Av. Cabildo
   2287, abierto lun/mié/jue/sáb 8-20 (martes y viernes cierra).
   Staff en reseñas: Roxi (turnos/WhatsApp) y Fiama (láser).
   Paleta: verde salvia del logo oficial. Fotos del perfil de
   Google. Precios de ejemplo del rubro.
   ========================================================= */
window.PELU_NEGOCIOS = window.PELU_NEGOCIOS || {};
window.PELU_NEGOCIOS["lumina-depilacion"] = {
  slug: "lumina-depilacion",
  orden: 8,
  rubro: "Depilación láser",

  business: {
    over: "Depilación definitiva",
    name: "Lumina",
    tagline: "Depilación láser en Belgrano.",
    phoneDisplay: "011 15-5450-7159",
    phoneE164: "+5491154507159",
    whatsapp: "5491154507159",
    waDefaultMsg: "Hola Lumina! Quería reservar una sesión.",
    address: { street: "Av. Cabildo 2287", area: "Belgrano, CABA", zip: "C1428AAK" },
    mapsQuery: "Av.+Cabildo+2287,+CABA",
    instagram: "",   // llegan clientas por IG (reseñas) pero el handle no está verificado
    rating: { score: "5,0", count: 140 },
    faviconEmoji: "✨",
  },

  /* Paleta del logo real: verde salvia + blancos cálidos del local spa. */
  theme: {
    colors: {
      "bone":       "#faf8f4",
      "bone-2":     "#f3efe7",
      "sand":       "#e0d6c4",
      "ink":        "#23261e",
      "espresso":   "#31352a",
      "espresso-2": "#3d4233",
      "muted":      "#5f6255",
      "line":       "#e5e0d5",
      "clay":       "#708060",
      "clay-deep":  "#5c6b4e",
      "clay-soft":  "#a9b89a",
      "gold":       "#ba9455",
    },
  },

  content: {
    meta: {
      title: "Lumina · Depilación definitiva en Belgrano",
      description: "Depilación láser en Belgrano: sesiones de 30 minutos, resultados desde la primera. 5★ en Google con 140 reseñas. Av. Cabildo 2287.",
    },
    hero: {
      eyebrow: "Belgrano · Depilación láser",
      title: "Piel suave, de una vez y para siempre.",
      lead: "Lumina es depilación definitiva en Belgrano: sesiones puntuales de 30 minutos, resultados que se notan desde la primera y un espacio que parece spa. Te atienden Roxi y Fiama.",
      proof2: "En un edificio Art Deco de Av. Cabildo",
      badgeNum: "5★",
      badgeLabel: "perfectas, en 140 reseñas de Google",
      photo: { src: "assets/lumina-depilacion/recepcion.jpg", alt: "Cartel de Lumina en la recepción, con eucalipto seco y vela aromática" },
    },
    servicesIntro: "Depilación definitiva por zonas, con equipos de última generación y sesiones de 30 minutos que se respetan.",
    gallery: {
      intro: "El espacio: cabinas tranquilas en un edificio con historia.",
      photos: [
        { src: "assets/lumina-depilacion/cabina.jpg", alt: "Cabina de tratamiento con camilla preparada, persianas beige y un cuadro estilo Monet" },
        { src: "assets/lumina-depilacion/escalera.jpg", alt: "Escalera Art Deco de mármol del edificio de Av. Cabildo" },
        { src: "assets/lumina-depilacion/entrada.jpg", alt: "Entrada del edificio, con puertas de hierro y vidrio y mosaicos originales" },
      ],
    },
    about: {
      title: "Roxi y Fiama, un spa para tu piel",
      paragraphs: [
        "Lumina funciona en un edificio Art Deco de Av. Cabildo, con escalera de mármol y un interior en calma: madera clara, eucalipto, velas. Roxi te acompaña con los turnos por WhatsApp y Fiama, especialista en depilación definitiva, hace el resto.",
        "Las reseñas repiten lo mismo: resultados desde la primera sesión, horarios que se cumplen y una piel que cambia para mejor. Son 140 opiniones en Google y todas tienen 5 estrellas.",
      ],
      checklist: [
        "Resultados desde la primera sesión",
        "Sesiones puntuales de 30 minutos",
        "5,0★ en Google, con 140 reseñas",
      ],
      photo: { src: "assets/lumina-depilacion/interior.jpg", alt: "Recepción de Lumina: piso de madera clara, mostrador blanco y pared dorada" },
    },
    reviews: [
      { text: "Era la primera vez que me hacían y desde el primer momento me hicieron sentir cómoda, buena atención y disponibilidad horaria. Tuve resultados desde la primera sesión; ya voy por la 5ta y casi ni me crece y hubo un cambio para mejor en la piel. Recomiendo!", author: "Celeste Asenjo" },
      { text: "Me atendió desde el minuto uno Roxi, una divina total, siempre muy atenta tanto en persona como por WhatsApp. Me atendí siempre con Fiama, una genia total, una profesional en depilación definitiva. Es mi tercera sesión pero noté los cambios a la primera…", author: "Piera W." },
    ],
    visitTitle: "Visitanos en Belgrano",
    cta: {
      title: "¿Empezamos con tu primera sesión?",
      lead: "Elegí zona, día y hora online. Tarda 30 segundos.",
    },
  },

  services: [
    { id: "axilas",    name: "Axilas",             desc: "La zona más pedida: rápida, efectiva y sin dolor.", price: 12000, duration: 30 },
    { id: "cavado",    name: "Cavado completo",    desc: "Definitivo, con equipos aptos para todo tipo de piel.", price: 18000, duration: 30 },
    { id: "piernas",   name: "Piernas enteras",    desc: "Piernas completas, chau cera para siempre.", price: 32000, duration: 45 },
    { id: "rostro",    name: "Rostro / bozo",      desc: "Zonas chicas del rostro con máxima precisión.", price: 10000, duration: 30 },
    { id: "espalda",   name: "Espalda o pecho",    desc: "Zonas amplias del torso, para ellas y ellos.", price: 25000, duration: 45 },
    { id: "combo",     name: "Combo cuerpo entero", desc: "Todas las zonas en una sesión más larga, al mejor precio.", price: 70000, duration: 90 },
  ],

  staff: [
    { id: "fiama", name: "Fiama", role: "Especialista en láser", daysOff: [] },
  ],

  /* Horarios reales de Google (jul 2026): mar, vie y dom cerrado. */
  hours: {
    0: null,
    1: [["08:00", "20:00"]],
    2: null,
    3: [["08:00", "20:00"]],
    4: [["08:00", "20:00"]],
    5: null,
    6: [["08:00", "20:00"]],
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
