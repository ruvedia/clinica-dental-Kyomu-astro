export const config = {
  clinicName: "Fisioprotema",
  cif: "B12345678",
  analyticsId: "G-1234567890", // Placeholder para Google Analytics o similar
  heroStyle: "background", // Estilos: 'split', 'background', 'minimal', 'glass', 'interactive'
  headerStyle: "classic", // Estilos: 'classic', 'minimal', 'centered', 'pill'
  testimonialsStyle: "grid", // Estilos: 'grid', 'slider', 'bento'
  navigation: [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Equipo", href: "/sobre-nosotros" },
    { name: "Contacto", href: "/contacto" },
  ],
  description: "Fisioterapia avanzada en Leganés. Fisioprotema te ofrece recuperación y bienestar con el mejor equipo de profesionales liderado por Ana Margüenda.",
  contact: {
    phone: "916 86 92 30",
    whatsapp: "637 88 35 87",
    email: "info@fisioprotema.com",
    address: "C/Polvoranca 21, 28911 Leganés",
    city: "Leganés",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=40.3267593,-3.770689"
  },
  social: {
    facebook: "https://www.facebook.com/fisioprotema/",
    instagram: "https://www.instagram.com/fisioprotema_leganes",
    twitter: "#",
    linkedin: "#"
  },
  schedule: [
    { day: "L - V", hours: "08:00 - 21:00", highlight: false },
    { day: "Sábado", hours: "10:00 - 14:00", highlight: true },
    { day: "Domingo", hours: "Cerrado", highlight: true, closed: true }
  ],
  hero: {
    badge: "Más de 25 años de experiencia",
    title: "Fisioterapia avanzada en Leganés: <span class=\"text-primary relative inline-block\">Recupera tu bienestar<svg class=\"absolute -bottom-1 w-full h-2 text-accent/40 left-0 -z-10\" viewBox=\"0 0 100 10\" preserveAspectRatio=\"none\"><path d=\"M0 5 Q 50 12 100 5\" stroke=\"currentColor\" stroke-width=\"4\" fill=\"transparent\"/></svg></span> con manos expertas",
    description: "El equipo de Fisioprotema, liderado por la experiencia de Ana Margüenda, te ofrece un ambiente de comprensión y acompañamiento profesional para superar tus problemas físicos y contribuir a tu bienestar global."
  },
  services: {
    fisioterapia: [
      {
        title: "Fisioterapia Músculo-esquelética",
        description: "Tratamiento de patologías de espalda, miembro superior e inferior y post-operatorios.",
        icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>`
      },
      {
        title: "Fisioterapia Deportiva",
        description: "Prevención y recuperación de lesiones en el ámbito deportivo recreativo y profesional.",
        icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`
      },
      {
        title: "Manual Ortopédica",
        description: "Técnicas manuales específicas para el diagnóstico y tratamiento de disfunciones articulares y musculares.",
        icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg>`
      },
      {
        title: "Osteopatía",
        description: "Tratamiento global del organismo buscando el equilibrio estructural y funcional.",
        icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>`
      },
      {
        title: "ATM",
        description: "Tratamiento especializado de la articulación temporomandibular y dolores orofaciales.",
        icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
      },
      {
        title: "Punción Seca",
        description: "Técnica invasiva para el tratamiento de los puntos gatillo miofasciales.",
        icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
      },
      {
        title: "EPTE / Electrólisis",
        description: "Electrólisis Percutánea Ecoguiada para la recuperación de tendinopatías crónicas.",
        icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`
      },
      {
        title: "Neuromodulación",
        description: "Tratamiento avanzado del sistema nervioso para la gestión del dolor crónico.",
        icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>`
      },
      {
        title: "tDCS",
        description: "Estimulación por corriente directa transcraneal para rehabilitación neurológica y dolor.",
        icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
      },
      {
        title: "Ejercicio Terapéutico",
        description: "Programas personalizados de movimiento para la rehabilitación y prevención.",
        icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
      }
    ],
    psicologia: [
      {
        title: "Problemas Emocionales",
        description: "Gestión emocional, autoconocimiento y desarrollo personal en cualquier etapa de la vida.",
        icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
      },
      {
        title: "Depresión y Ansiedad",
        description: "Tratamiento especializado para la depresión, ansiedad, estrés y mediación de conflictos.",
        icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>`
      },
      {
        title: "Dificultades de Aprendizaje",
        description: "Evaluación y tratamiento de problemas de conducta y aprendizaje en niños y adolescentes.",
        icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>`
      },
      {
        title: "Asesoramiento a Familias",
        description: "Apoyo psicopedagógico y educativo para familias en el desarrollo de sus hijos.",
        icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`
      },
      {
        title: "Crisis Personal",
        description: "Acompañamiento terapéutico profesional en momentos críticos de cambio o pérdida.",
        icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
      }
    ]
  },
  testimonials: [
    {
      nombre: "Carlos Rodríguez",
      puesto: "Corredor de Maratones",
      comentario: "Gracias a su equipo de fisioterapia deportiva pude recuperarme de una fascitis plantar en tiempo récord. El trato es humano y muy profesional.",
      estrellas: 5,
      foto: "https://images.unsplash.com/photo-1548690312-e3b507d17a47?q=100&w=256&h=256&fit=crop"
    },
    {
      nombre: "Elena Martínez",
      puesto: "Paciente Post-Operatorio",
      comentario: "La rehabilitación tras mi cirugía de rodilla fue excelente. Los ejercicios adaptados y la paciencia del personal marcaron la diferencia en mi recuperación.",
      estrellas: 5,
      foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=100&w=256&h=256&fit=crop"
    },
    {
      nombre: "Javier López",
      puesto: "Atleta Amateur",
      comentario: "Tratamiento de primera clase para mis problemas de espalda. Las sesiones de terapia manual son increíbles y realmente saben lo que hacen.",
      estrellas: 4,
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=100&w=256&h=256&fit=crop"
    }
  ]
};
