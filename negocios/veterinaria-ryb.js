/* =========================================================
   NEGOCIO · Clínica Veterinaria RyB (Lista A #5)
   ---------------------------------------------------------
   Datos reales de Google (jul 2026): 4,9★ (290), Cdad. de la
   Paz 2688, lun-vie 10-19, sáb 10-15. Staff en reseñas:
   Dra. Laura ("Lau"). Negocio familiar con clínica, cirugía,
   laboratorio, baño/peluquería, delivery y pet shop. Los dos
   golden retrievers de la casa salen en las fotos del perfil.
   Paleta: teal del logo r&b. Precios de ejemplo del rubro.
   ========================================================= */
window.PELU_NEGOCIOS = window.PELU_NEGOCIOS || {};
window.PELU_NEGOCIOS["veterinaria-ryb"] = {
  slug: "veterinaria-ryb",
  orden: 5,
  rubro: "Veterinaria",

  business: {
    over: "Clínica veterinaria",
    name: "RyB",
    tagline: "Clínica, pet shop y peluquería en Belgrano.",
    phoneDisplay: "011 6372-3844",
    phoneE164: "+541163723844",
    whatsapp: "541163723844",
    waDefaultMsg: "Hola RyB! Quería pedir un turno para mi mascota.",
    address: { street: "Cdad. de la Paz 2688", area: "Belgrano, CABA", zip: "C1428CPB" },
    mapsQuery: "Ciudad+de+la+Paz+2688,+CABA",
    instagram: "",
    rating: { score: "4,9", count: 290 },
    faviconEmoji: "🐾",
  },

  /* Paleta del logo real: teal de r&b veterinaria + dorado golden. */
  theme: {
    colors: {
      "bone":       "#fafbfa",
      "bone-2":     "#f1f6f4",
      "sand":       "#e2ece8",
      "ink":        "#14201d",
      "espresso":   "#123f37",
      "espresso-2": "#0c2e28",
      "muted":      "#5b6e68",
      "line":       "#dce5e1",
      "clay":       "#128b78",
      "clay-deep":  "#0a6353",
      "clay-soft":  "#d7eee9",
      "gold":       "#c79a4e",
    },
  },

  content: {
    meta: {
      title: "Clínica Veterinaria RyB · Belgrano · Turnos online",
      description: "Veterinaria en Belgrano: clínica, cirugía, laboratorio, baño y peluquería, farmacia y pet shop. Atención familiar con 4,9★ en Google. Cdad. de la Paz 2688.",
    },
    hero: {
      eyebrow: "Belgrano · Veterinaria & pet shop",
      title: "Una familia que cuida a la tuya.",
      lead: "RyB es clínica, farmacia, laboratorio, peluquería canina y pet shop en Ciudad de la Paz 2688. Atiende la Dra. Laura con su familia, y las reseñas lo dicen mejor: una familia que ama a los animales.",
      proof2: "Clínica, cirugía, laboratorio y peluquería",
      badgeNum: "2",
      badgeLabel: "goldens de la casa te reciben",
      photo: { src: "assets/veterinaria-ryb/goldens.jpg", alt: "Dos golden retrievers sonrientes en el consultorio, junto a la camilla" },
    },
    servicesIntro: "Turnos online para consultas, vacunas y peluquería. Las urgencias, siempre por teléfono.",
    gallery: {
      intro: "El local: consultorio, farmacia y un pet shop completo.",
      photos: [
        { src: "assets/veterinaria-ryb/petshop.jpg", alt: "Interior del pet shop con góndolas de alimentos premium", wide: true },
        { src: "assets/veterinaria-ryb/golden-mostrador.jpg", alt: "Golden retriever descansando frente al mostrador de la farmacia" },
        { src: "assets/veterinaria-ryb/entrada.jpg", alt: "Entrada del local con accesorios, camas y un golden dormido en el piso" },
        { src: "assets/veterinaria-ryb/mostrador.jpg", alt: "Mostrador con el logo de RyB y el cartel de baño, peluquería y delivery" },
      ],
    },
    about: {
      title: "La Dra. Laura y su familia",
      paragraphs: [
        "RyB es un negocio familiar y se nota: las reseñas hablan de empatía, de seguimiento después de cada consulta y de recordatorios de turnos. La Dra. Laura, Lau para los clientes, atiende con un cariño que hace que hasta los que se mudan de barrio sigan viniendo.",
        "Además de la clínica hay cirugía, laboratorio, farmacia veterinaria, baño y peluquería con delivery, y un pet shop con todo: alimentos premium, juguetes, camas y accesorios. Y sí: los dos golden de la casa suelen estar para recibirte.",
      ],
      checklist: [
        "Consulta, cirugía y laboratorio en el local",
        "Baño, peluquería y delivery",
        "Seguimiento y recordatorio de turnos",
      ],
      photo: { src: "assets/veterinaria-ryb/consultorio.jpg", alt: "Consultorio con camilla de acero, balanza para mascotas y láminas de nutrición" },
    },
    reviews: [
      { text: "Vamos a RyB hace casi dos años. Son empáticos y atentos. Es una familia que ama a los animales. Lau es una genia total. Y siempre están atentos a cómo sigue la mascota y a recordar los turnos. Unos divinos. Nos mudamos y seguimos yendo! Los recomiendo!", author: "Solimar Marcano Verde" },
      { text: "Excelente atención y profesionalismo. Lo que más valoro es la calidad humana de todo el equipo. No solo atendieron a mi perro con mucho cariño y dedicación, sino que además se preocuparon por hacer un seguimiento de su evolución después de la consulta.", author: "Gerar Bar" },
    ],
    visitTitle: "Visitanos en Belgrano",
    cta: {
      title: "¿Le reservamos un turno a tu mascota?",
      lead: "Elegí motivo, día y hora online. Tarda 30 segundos.",
    },
  },

  services: [
    { id: "consulta",    name: "Consulta clínica",        desc: "Revisión general con la Dra. Laura, con tiempo para tus preguntas.", price: 20000, duration: 30 },
    { id: "vacunacion",  name: "Vacunación",              desc: "Plan de vacunas al día, con recordatorio para la próxima.", price: 15000, duration: 30 },
    { id: "control",     name: "Control + desparasitación", desc: "Chequeo de rutina con desparasitación incluida.", price: 18000, duration: 30 },
    { id: "peluqueria",  name: "Baño y peluquería",       desc: "Baño, corte y secado con paciencia. Sale perfumado.", price: 28000, duration: 60 },
    { id: "laboratorio", name: "Análisis de laboratorio", desc: "Extracción en el local y resultados sin vueltas.", price: 32000, duration: 30 },
    { id: "prequirurgico", name: "Control prequirúrgico", desc: "Evaluación completa antes de una cirugía programada.", price: 25000, duration: 45 },
  ],

  staff: [
    { id: "laura", name: "Dra. Laura", role: "Veterinaria", daysOff: [] },
  ],

  /* Horarios reales de Google (jul 2026). */
  hours: {
    0: null,
    1: [["10:00", "19:00"]],
    2: [["10:00", "19:00"]],
    3: [["10:00", "19:00"]],
    4: [["10:00", "19:00"]],
    5: [["10:00", "19:00"]],
    6: [["10:00", "15:00"]],
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
