/* =========================================================
   NEGOCIO · Veterinaria Aurora (Lista A #6)
   ---------------------------------------------------------
   Datos reales de Google (jul 2026): 4,9★ (197), Av. Crámer
   2993, lun-vie 10-13:30 y 17-20 (cortado), sáb solo mañana.
   Dr. Rodolfo Doldán ("Rodi"), citado en 4 de 5 reseñas,
   +20 años en el barrio. Paleta: verde agua del cartel real.
   Fotos: perfil de Google. Precios de ejemplo del rubro.
   ========================================================= */
window.PELU_NEGOCIOS = window.PELU_NEGOCIOS || {};
window.PELU_NEGOCIOS["veterinaria-aurora"] = {
  slug: "veterinaria-aurora",
  orden: 6,
  rubro: "Veterinaria",

  business: {
    over: "Clínica veterinaria",
    name: "Aurora",
    tagline: "Veterinaria de barrio en Belgrano.",
    phoneDisplay: "011 4544-4059",
    phoneE164: "+541145444059",
    whatsapp: "541145444059",
    waDefaultMsg: "Hola Rodi! Quería pedir un turno para mi mascota.",
    address: { street: "Av. Crámer 2993", area: "Belgrano, CABA", zip: "C1429AKI" },
    mapsQuery: "Av.+Cramer+2993,+CABA",
    instagram: "",
    rating: { score: "4,9", count: 197 },
    faviconEmoji: "🐶",
  },

  /* Paleta del cartel real: verde agua AURORA sobre ladrillo y herrería negra. */
  theme: {
    colors: {
      "bone":       "#faf8f5",
      "bone-2":     "#f2efe9",
      "sand":       "#e5decf",
      "ink":        "#1d2422",
      "espresso":   "#17332f",
      "espresso-2": "#204540",
      "muted":      "#5c6b67",
      "line":       "#e3e7e3",
      "clay":       "#1f8578",
      "clay-deep":  "#166a5f",
      "clay-soft":  "#d9f0ec",
      "gold":       "#c08a4e",
    },
  },

  content: {
    meta: {
      title: "Veterinaria Aurora · Belgrano · Dr. Rodolfo Doldán",
      description: "Veterinaria de barrio en Belgrano: consultas, cirugías, farmacia y pet shop, con atención personal del Dr. Doldán hace más de 20 años. 4,9★ en Google. Av. Crámer 2993.",
    },
    hero: {
      eyebrow: "Belgrano · Veterinaria de barrio",
      title: "El veterinario que te explica todo.",
      lead: "El Dr. Rodolfo Doldán, Rodi, atiende Aurora en Av. Crámer 2993: consultas, cirugías y farmacia, con la claridad, la contención y los precios justos que sus clientes destacan hace 20 años.",
      proof2: "Atención personal del mismo veterinario",
      badgeNum: "+20",
      badgeLabel: "años cuidando a las mascotas del barrio",
      photo: { src: "assets/veterinaria-aurora/fachada.jpg", alt: "Fachada de Veterinaria Aurora de noche: cartel verde agua y vidriera cálida sobre ladrillo visto" },
    },
    servicesIntro: "Turnos online para consultas y controles. Las urgencias, siempre por teléfono.",
    gallery: {
      intro: "Pacientes de la casa: los que se atienden con Rodi.",
      photos: [
        { src: "assets/veterinaria-aurora/yorkshire.jpg", alt: "Yorkshire terrier atendido en la veterinaria, con su chapita identificatoria" },
        { src: "assets/veterinaria-aurora/gato.jpg", alt: "Gato naranja y blanco durmiendo tranquilo sobre una manta", wide: true },
        { src: "assets/veterinaria-aurora/caniche.jpg", alt: "Caniche gris recuperándose en casa después de la consulta" },
        { src: "assets/veterinaria-aurora/confianza.jpg", alt: "Perro apoyando la cabeza en la falda de su dueña, relajado y en confianza" },
      ],
    },
    about: {
      title: "Rodi, de los veterinarios que quedan pocos",
      paragraphs: [
        "Rodolfo Doldán atiende personalmente hace más de veinte años en el mismo lugar de Crámer, hoy renovado: ladrillo visto, herrería negra y el cartel verde agua. Las reseñas repiten tres cosas: claridad para explicar, contención y precios justos.",
        "Consultas, vacunas, cirugías y esterilizaciones, más farmacia veterinaria y accesorios. Te explica todo puntillosamente, para que te vayas sin dudas y tu mascota, mejor que como llegó.",
      ],
      checklist: [
        "Atención personal del Dr. Doldán",
        "Cirugías y esterilizaciones en el local",
        "4,9★ en Google, con 197 reseñas",
      ],
      photo: { src: "assets/veterinaria-aurora/interior.jpg", alt: "Interior de la clínica visto desde la vidriera, con un bulldog francés esperando su turno" },
    },
    reviews: [
      { text: "Rodolfo es de lo mejor! Súper claro, explica muy bien, sin vueltas y con mucha contención. Una veterinaria atendida de forma personal. Me mudé de la zona y sigo llevando a mi perro que estuvimos operando con él…", author: "Brau Pérez Martí" },
      { text: "Toda mi vida tuve animales y definitivamente Rodolfo es el mejor veterinario que conozco… acompañó a mi perrita de 18 años hasta el último segundo de vida, con amor, empatía y contención… te explica todo puntillosamente para que no te quede ninguna duda.", author: "Wonda Ramirez" },
    ],
    visitTitle: "Visitanos en Belgrano R",
    cta: {
      title: "¿Turno para tu mascota?",
      lead: "Elegí motivo, día y hora online. Tarda 30 segundos.",
    },
  },

  services: [
    { id: "consulta",       name: "Consulta clínica",     desc: "Revisión general con Rodi, explicado todo sin apuro.", price: 18000, duration: 30 },
    { id: "vacunacion",     name: "Vacunación",           desc: "Plan de vacunas al día para perros y gatos.", price: 14000, duration: 30 },
    { id: "desparasitacion", name: "Desparasitación",     desc: "Interna y externa, con el producto adecuado a tu mascota.", price: 12000, duration: 30 },
    { id: "senior",         name: "Control adultos mayores", desc: "Chequeo completo para mascotas veteranas.", price: 20000, duration: 45 },
    { id: "esterilizacion", name: "Consulta por esterilización", desc: "Evaluación previa y fecha para la cirugía.", price: 22000, duration: 30 },
    { id: "estudios",       name: "Ecografía / estudios", desc: "Estudios complementarios coordinados en el local.", price: 28000, duration: 45 },
  ],

  staff: [
    { id: "rodi", name: "Dr. Doldán", role: "Veterinario", daysOff: [] },
  ],

  /* Horarios reales de Google (jul 2026): cortado al mediodía, sáb solo a la mañana. */
  hours: {
    0: null,
    1: [["10:00", "13:30"], ["17:00", "20:00"]],
    2: [["10:00", "13:30"], ["17:00", "20:00"]],
    3: [["10:00", "13:30"], ["17:00", "20:00"]],
    4: [["10:00", "13:30"], ["17:00", "20:00"]],
    5: [["10:00", "13:30"], ["17:00", "20:00"]],
    6: [["10:00", "13:30"]],
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
