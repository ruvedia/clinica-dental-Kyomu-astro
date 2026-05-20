export const config = {
  clinicName: "Clínica Dental Kyomu",
  cif: "B12345678",
  analyticsId: "",
  heroStyle: "split", // Estilos: 'split', 'background', 'minimal', 'glass', 'interactive'
  headerStyle: "classic", // Estilos: 'classic', 'minimal', 'centered', 'pill'
  testimonialsStyle: "slider", // Estilos: 'grid', 'slider', 'bento'
  description: "En Clínica Dental Kyomu en Leganés, combinamos tecnología avanzada con un trato humano y cercano. Especialistas en Implantes, Ortodoncia Invisible y Estética Dental.",
  contact: {
    phone: "623 34 41 50",
    whatsapp: "623 34 41 50",
    email: "info@kyomu.com",
    address: "Calle Río Duero 28, Leganés 28913, Madrid",
    city: "Leganés",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=40.324888979375,-3.766345684607869"
  },
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#"
  },
  schedule: [
    { day: "Lunes a Jueves", hours: "10:00 - 20:00", highlight: false },
    { day: "Viernes", hours: "10:00 - 19:00", highlight: true },
    { day: "Sábado y Domingo", hours: "Cerrado", highlight: true, closed: true }
  ],
  navigation: [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Equipo", href: "/equipo" },
    { name: "Contacto", href: "/contacto" }
  ],
  hero: {
    badge: "Bienvenido a Kyomu",
    title: "Clínica Dental Kyomu: <span class=\"text-teal-600 relative inline-block\">Tu sonrisa, nuestra prioridad</span>",
    description: "Descubre un nuevo concepto de salud dental donde la tecnología de vanguardia se encuentra con la calidez humana. Minimalismo y precisión para tu bienestar."
  },
  services: [
    {
      title: "Implantes Dentales",
      description: "Recupera la funcionalidad y estética de tu boca con la tecnología de implantología más avanzada y duradera.",
      icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>`
    },
    {
      title: "Ortodoncia Invisible",
      description: "Alinea tu sonrisa de forma discreta y cómoda con alineadores transparentes de última generación.",
      icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16m-7 6h7" /></svg>`
    },
    {
      title: "Estética Dental",
      description: "Blanqueamientos, carillas y diseños de sonrisa para que luzcas tu mejor versión con naturalidad.",
      icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>`
    },
    {
      title: "Odontopediatría",
      description: "Cuidamos la sonrisa de los más pequeños en un ambiente relajado y divertido para ellos.",
      icon: `<svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
    }
  ],
  testimonials: [
    {
      nombre: "Ana García",
      puesto: "Paciente de Estética",
      comentario: "La mejor clínica dental en la que he estado. El trato es increíble y las instalaciones son súper modernas.",
      estrellas: 5,
      foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=100&w=256&h=256&fit=crop"
    },
    {
      nombre: "Carlos Pérez",
      puesto: "Paciente de Ortodoncia",
      comentario: "Me hice la ortodoncia invisible aquí y no puedo estar más contenta. Muy profesionales y atentos.",
      estrellas: 5,
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=100&w=256&h=256&fit=crop"
    }
  ]
};
