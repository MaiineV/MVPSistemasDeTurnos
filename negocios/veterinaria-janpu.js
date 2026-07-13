/* =========================================================
   NEGOCIO · Veterinaria JANPU (Lista A #10)
   ---------------------------------------------------------
   Datos reales de Google (jul 2026): 4,8★ (122), Av. Congreso
   2295, lun-vie 10-19, sáb 10-13. Al frente: Dra. Natalia
   ("Nati"), muy elogiada en reseñas. Paleta: naranja de los
   gatos atigrados del perfil (no hay color institucional).
   Fotos: perfil de Google. Precios de ejemplo del rubro.
   ========================================================= */
window.PELU_NEGOCIOS = window.PELU_NEGOCIOS || {};
window.PELU_NEGOCIOS["veterinaria-janpu"] = {
  slug: "veterinaria-janpu",
  orden: 10,
  rubro: "Veterinaria",

  business: {
    over: "Veterinaria",
    name: "JANPU",
    tagline: "Perros y gatos, atendidos con calma.",
    phoneDisplay: "011 3074-6558",
    phoneE164: "+541130746558",
    whatsapp: "541130746558",
    waDefaultMsg: "Hola Nati! Quería pedir un turno para mi mascota.",
    address: { street: "Av. Congreso 2295", area: "Belgrano, CABA", zip: "C1428BVH" },
    mapsQuery: "Av.+Congreso+2295,+CABA",
    instagram: "",
    rating: { score: "4,8", count: 122 },
    faviconEmoji: "🐱",
  },

  /* Paleta cálida: consultorio blanco luminoso + naranja de los gatos del perfil. */
  theme: {
    colors: {
      "bone":       "#faf7f2",
      "bone-2":     "#f3ede4",
      "sand":       "#e4d9c8",
      "ink":        "#2b2220",
      "espresso":   "#3e2e27",
      "espresso-2": "#503b30",
      "muted":      "#7a6d63",
      "line":       "#e8dfd3",
      "clay":       "#c25e3a",
      "clay-deep":  "#a84a2b",
      "clay-soft":  "#f4dfd4",
      "gold":       "#d9a441",
    },
  },

  content: {
    meta: {
      title: "Veterinaria JANPU · Belgrano · Dra. Natalia",
      description: "Veterinaria en Belgrano: consultas, cirugías y seguimiento responsable para perros y gatos, con la Dra. Natalia. 4,8★ en Google. Av. Congreso 2295.",
    },
    hero: {
      eyebrow: "Belgrano · Veterinaria",
      title: "Medicina con paciencia, para perros y gatos.",
      lead: "La Dra. Natalia atiende JANPU en Av. Congreso 2295: consultas, cirugías y seguimiento de verdad, con el trato calmo que las mascotas notan y los tutores agradecen.",
      proof2: "Emergencias a disposición por teléfono",
      badgeNum: "4,8★",
      badgeLabel: "en 122 reseñas de Google",
      photo: { src: "assets/veterinaria-janpu/consulta.jpg", alt: "La veterinaria acariciando a un cachorro sobre la mesa de consulta" },
    },
    servicesIntro: "Turnos online para consultas y controles de perros y gatos. Urgencias, siempre por teléfono.",
    gallery: {
      intro: "Pacientes de JANPU: los que ya pasaron por el consultorio.",
      photos: [
        { src: "assets/veterinaria-janpu/gato-naranja.jpg", alt: "Gato naranja atigrado mirando a cámara durante su consulta" },
        { src: "assets/veterinaria-janpu/siames.jpg", alt: "Gato siamés de ojos celestes en primer plano", wide: true },
        { src: "assets/veterinaria-janpu/caniche.jpg", alt: "Caniche blanco con abrigo escocés esperando su turno" },
        { src: "assets/veterinaria-janpu/shihtzu.jpg", alt: "Shih tzu paciente de la veterinaria, descansando en su casa" },
      ],
    },
    about: {
      title: "La Dra. Nati y sus pacientes",
      paragraphs: [
        "Natalia, Nati, está al frente de JANPU y las reseñas cuentan siempre lo mismo: explica claro, atiende con calma y hace seguimiento responsable después de cada consulta o cirugía. Hasta los pacientes con miedo salen tranquilos.",
        "El consultorio es luminoso y está equipado para clínica y cirugía. Además hay alimento balanceado, juguetes y accesorios para perros y gatos, todo en el mismo local de Av. Congreso.",
      ],
      checklist: [
        "Explica todo con claridad",
        "Cirugías con seguimiento responsable",
        "Alimentos y accesorios en el local",
      ],
      photo: { src: "assets/veterinaria-janpu/premio.jpg", alt: "La veterinaria dándole un premio a un cachorro sobre la mesa de atención" },
    },
    reviews: [
      { text: "Siempre resuelve los problemas de salud de Lulú. Es atenta y paciente y te explica todo con claridad. Aclara tus dudas, te da tranquilidad y los resultados se ven enseguida. Siempre hace seguimiento responsable. Es una suerte tenerla como mi vete.", author: "María Cristina Masnata" },
      { text: "Mi experiencia en Veterinaria Janpu fue excepcional. Nati brindó una explicación clara y programamos la cirugía. La cirugía fue impecable y Nati fue extremadamente atenta y cálida en todo momento. Recomiendo esta veterinaria al 100%!", author: "Zoe Lucía Alonso García" },
    ],
    visitTitle: "Visitanos en Belgrano",
    cta: {
      title: "¿Turno para tu mascota?",
      lead: "Elegí motivo, día y hora online. Tarda 30 segundos.",
    },
  },

  services: [
    { id: "consulta",   name: "Consulta clínica",        desc: "Revisión completa con la Dra. Natalia, sin apuro.", price: 18000, duration: 30 },
    { id: "vacunacion", name: "Vacunación",              desc: "Plan de vacunas al día para perros y gatos.", price: 14000, duration: 30 },
    { id: "castracion", name: "Consulta por castración", desc: "Evaluación previa y fecha para la cirugía.", price: 22000, duration: 30 },
    { id: "cirugia",    name: "Consulta prequirúrgica",  desc: "Chequeo completo antes de una cirugía programada.", price: 25000, duration: 45 },
    { id: "desparasitacion", name: "Desparasitación",    desc: "Interna y externa, según peso y edad.", price: 12000, duration: 30 },
    { id: "postoperatorio",  name: "Control postoperatorio", desc: "Seguimiento después de la cirugía, parte del tratamiento.", price: 15000, duration: 30 },
  ],

  staff: [
    { id: "nati", name: "Dra. Nati", role: "Veterinaria", daysOff: [] },
  ],

  /* Horarios reales de Google (jul 2026). */
  hours: {
    0: null,
    1: [["10:00", "19:00"]],
    2: [["10:00", "19:00"]],
    3: [["10:00", "19:00"]],
    4: [["10:00", "19:00"]],
    5: [["10:00", "19:00"]],
    6: [["10:00", "13:00"]],
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
