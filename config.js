/* =========================================================
   CONFIG DEL NEGOCIO · Peluquería Pepe
   ---------------------------------------------------------
   TODO el demo se re-brandea editando SOLO este archivo:
   nombre, colores, servicios, precios, staff y horarios.
   Para armar el demo de otro negocio: copiá la carpeta,
   editá este archivo y (opcional) las fotos de assets/.
   ========================================================= */
window.PELU_CONFIG = {
  /* Namespace de datos del demo (localStorage). Cambialo por negocio. */
  slug: "peluqueria-pepe",

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
