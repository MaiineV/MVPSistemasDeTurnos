/* =========================================================
   NEGOCIO · Peluquería Pepe (Lista A #2)
   ---------------------------------------------------------
   Cada negocio es UN archivo como este que se registra en
   window.PELU_NEGOCIOS. app/biz.js elige el activo según
   ?n=slug o el último usado. Editá solo este archivo para
   cambiar la identidad completa del demo de este negocio.
   ========================================================= */
window.PELU_NEGOCIOS = window.PELU_NEGOCIOS || {};
window.PELU_NEGOCIOS["peluqueria-pepe"] = {
  slug: "peluqueria-pepe",
  orden: 2,                       // posición en la Lista A (para el switcher)
  rubro: "Peluquería",

  business: {
    over: "Peluquería",           // línea chica del logo
    name: "Pepe",                 // línea grande del logo
    tagline: "Corte, color y cuidado en Belgrano.",
    phoneDisplay: "011 4787-6724",
    phoneE164: "+541147876724",
    whatsapp: "541147876724",     // sin "+", sin espacios (54 9 11... si es celular)
    waDefaultMsg: "Hola Pepe! Quería reservar un turno.",
    address: { street: "Av. Congreso 2292", area: "Belgrano, CABA", zip: "C1428BVH" },
    mapsQuery: "Av.+Congreso+2292,+CABA",
    instagram: "",   // verificado 2026-07: el Pepe de Belgrano NO tiene IG (los @pepe* son otros negocios)
    rating: { score: "4,8", count: 402 },
    faviconEmoji: "💈",
  },

  /* Claves = custom properties de styles.css (sin el "--"). */
  theme: {
    colors: {
      "bone":       "#f6f1e9",
      "bone-2":     "#efe7da",
      "sand":       "#e6d8c4",
      "ink":        "#211b16",
      "espresso":   "#2c231c",
      "espresso-2": "#382c23",
      "muted":      "#7a6c5d",
      "line":       "#ddd0bd",
      "clay":       "#b66544",
      "clay-deep":  "#9a4f33",
      "clay-soft":  "#d98e6e",
      "gold":       "#b08a4f",
    },
  },

  /* Textos largos de la landing (todo lo que era HTML fijo). */
  content: {
    meta: {
      title: "Peluquería Pepe · Belgrano · Corte, color y cuidado",
      description: "Peluquería de barrio en Belgrano. Corte de caballero y dama, barba, color y cobertura de canas. Atienden Héctor y Pilo. Reservá tu turno o llamá. 4,8★ en Google.",
    },
    hero: {
      eyebrow: "Belgrano · Peluquería de barrio",
      title: "Tu pelo, en manos que conocen el oficio.",
      lead: "Peluquería de barrio en el corazón de Belgrano. Atienden Héctor y Pilo, dos peluqueros de oficio, con la confianza de más de 400 vecinos que ya los eligen.",
      proof2: "A pasos de Av. Cabildo",
      badgeNum: "+20",
      badgeLabel: "años cortando en el barrio",
      photo: { src: "assets/peluqueria-pepe/fachada.jpg", alt: "Frente de Peluquería Pepe en Av. Congreso 2292, con el cartel desde 1999" },
    },
    servicesIntro: "Te escuchamos antes de tocar la tijera. Asesoramos, cuidamos el pelo y nos aseguramos de que salgas contento.",
    gallery: {
      intro: "Algunos cortes, colores y peinados que salieron de esta silla.",
      photos: [
        { src: "assets/peluqueria-pepe/vidriera.jpg", alt: "Vidriera de la peluquería con el toldo amarillo sobre Av. Congreso" },
        { src: "assets/peluqueria-pepe/secando.jpg", alt: "Peinado y secado, tijera en mano" },
        { src: "assets/peluqueria-pepe/salon-noche.jpg", alt: "El salón de noche, con el cartel de Peluquería Pepe iluminado", wide: true },
        { src: "assets/peluqueria-pepe/pared.jpg", alt: "La pared del local, con recortes e historia del barrio" },
        { src: "assets/peluqueria-pepe/interior.jpg", alt: "El interior del local, un corte en la silla clásica" },
      ],
    },
    about: {
      title: "Héctor y Pilo, tijera en mano",
      paragraphs: [
        "Peluquería Pepe es de esas de barrio, de las que quedan pocas: dos peluqueros de oficio, Héctor y Pilo, que hace más de veinte años cortan en el mismo lugar de Belgrano. Muchos clientes vienen hace más de una década.",
        "Acá te atienden rápido y bien. Sin vueltas: escuchan cómo lo querés, cortan como la gente y te vas conforme. Podés pedir turno por teléfono o pasar y preguntar si hay lugar.",
      ],
      checklist: [
        "Dos peluqueros de oficio, Héctor y Pilo",
        "Atención rápida, sin esperas eternas",
        "Turno por teléfono o al paso",
      ],
      photo: { src: "assets/peluqueria-pepe/cortando.jpg", alt: "Uno de los peluqueros, de guardapolvo blanco, cortando en el salón" },
    },
    reviews: [
      { text: "Genios Héctor y Pilo, excelente atención siempre. Llevo una década cortándome con ellos. Les doy 5 estrellas, ¡aunque se llene! ;)", author: "Nicolás Torok" },
      { text: "Excelente peluquería. Me atienden muy rápido y me voy muy conforme con el corte. Hay dos peluqueros y los dos cortan muy bien. Se puede pedir turno por teléfono. Recomendable.", author: "Cristian Pieslinger" },
    ],
    visitTitle: "Visitanos en Belgrano",
    cta: {
      title: "¿Listo para tu próximo corte?",
      lead: "Elegí servicio, día y hora online. Tarda 30 segundos.",
    },
  },

  /* price en ARS, duration en minutos. */
  services: [
    { id: "corte-caballero", name: "Corte de caballero", desc: "Clásico o moderno, máquina y tijera. Como te gusta, prolijo y listo en el momento.", price: 15000, duration: 30 },
    { id: "barba",           name: "Barba & afeitado",   desc: "Perfilado y afeitado clásico con toalla caliente. El ritual completo.", price: 12000, duration: 30 },
    { id: "corte-dama",      name: "Corte de dama",      desc: "Corte, lavado y peinado. Te escuchamos antes de tocar la tijera.", price: 20000, duration: 45 },
    { id: "color",           name: "Color & canas",      desc: "Cobertura de canas y color parejo, con productos que cuidan el pelo.", price: 38000, duration: 90 },
    { id: "corte-ninos",     name: "Corte de niños",     desc: "Paciencia y buena mano para los más chicos. Sin dramas.", price: 12000, duration: 30 },
    { id: "peinado",         name: "Peinado & brushing", desc: "Para una ocasión especial o el día a día. Llegás, te peinamos, salís listo.", price: 16000, duration: 45 },
  ],

  staff: [
    { id: "hector", name: "Héctor", role: "Peluquero", daysOff: [] },
    { id: "pilo",   name: "Pilo",   role: "Peluquero", daysOff: [] },
  ],

  /* Horarios por día (0=domingo ... 6=sábado). null = cerrado.
     Cada día acepta varios rangos: [["10:00","13:00"],["16:00","20:00"]]. */
  hours: {
    0: null,
    1: null,
    2: [["10:00", "20:00"]],
    3: [["10:00", "20:00"]],
    4: [["10:00", "20:00"]],
    5: [["10:00", "20:00"]],
    6: [["10:00", "20:00"]],
  },

  booking: {
    enabled: true,          // false = los CTAs vuelven a WhatsApp
    slotMinutes: 30,        // grilla de horarios
    windowDays: 14,         // cuántos días para adelante se puede reservar
    leadTimeMinutes: 60,    // anticipación mínima para reservar hoy
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
