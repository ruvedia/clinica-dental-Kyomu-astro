import { c as createComponent } from './astro-component_C2-YdCeC.mjs';
import 'piccolore';
import { T as renderTemplate, B as maybeRenderHead } from './sequence_BzuxnACm.mjs';
import { r as renderComponent } from './entrypoint_DImIPBR4.mjs';
import { $ as $$MainLayout, r as renderScript, c as config } from './MainLayout_B7cddy_1.mjs';
import { $ as $$Contact } from './Contact_DTU5_F4-.mjs';

const $$Equipo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `Nuestro Equipo | ${config.clinicName}`, "description": config.description }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-slate-50 border-b border-gray-100 py-16 sm:py-24"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <span class="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Especialistas</span> <h1 class="text-4xl md:text-6xl font-bold text-slate-900">Nuestro Equipo</h1> </div> </div>  <section class="py-24 bg-white relative overflow-hidden"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-3 gap-12"> <!-- Card 1 --> <div class="js-team-card group relative bg-slate-50 rounded-[2.5rem] overflow-hidden border border-gray-100/50 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 hover:-translate-y-1"> <div class="aspect-[4/5] overflow-hidden relative"> <img src="/img/2024-05-09-5.jpg" alt="Doctor en Kyomu" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"> <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60"></div> </div> <div class="p-8"> <h3 class="text-2xl font-bold text-slate-900 mb-2 font-heading">Dr. Especialista</h3> <p class="text-teal-600 font-semibold text-sm mb-4">Expertos en salud dental</p> <p class="text-gray-500 text-sm leading-relaxed">
Profesionales altamente cualificados dedicados a cuidar de tu salud bucodental con la máxima precisión y delicadeza.
</p> </div> </div> <!-- Card 2 --> <div class="js-team-card group relative bg-slate-50 rounded-[2.5rem] overflow-hidden border border-gray-100/50 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 hover:-translate-y-1"> <div class="aspect-[4/5] overflow-hidden relative"> <img src="/img/2024-05-09-2.jpg" alt="Equipo Kyomu" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"> <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60"></div> </div> <div class="p-8"> <h3 class="text-2xl font-bold text-slate-900 mb-2 font-heading">Atención Personalizada</h3> <p class="text-teal-600 font-semibold text-sm mb-4">Compromiso y excelencia</p> <p class="text-gray-500 text-sm leading-relaxed">
Nos enfocamos en escucharte activamente y en ofrecerte una experiencia cómoda, cercana y completamente adaptada a tus necesidades.
</p> </div> </div> <!-- Card 3 --> <div class="js-team-card group relative bg-slate-50 rounded-[2.5rem] overflow-hidden border border-gray-100/50 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 hover:-translate-y-1"> <div class="aspect-[4/5] overflow-hidden relative"> <img src="/img/2024-05-09-6.jpg" alt="Instalaciones Kyomu" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"> <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60"></div> </div> <div class="p-8"> <h3 class="text-2xl font-bold text-slate-900 mb-2 font-heading">Tecnología Avanzada</h3> <p class="text-teal-600 font-semibold text-sm mb-4">Innovación constante</p> <p class="text-gray-500 text-sm leading-relaxed">
Equipamiento dental digital y de última generación para garantizar diagnósticos 100% precisos y tratamientos mínimamente invasivos.
</p> </div> </div> </div> </div> </section>  ${renderComponent($$result2, "Contact", $$Contact, {})} ` })} ${renderScript($$result, "/Users/francervantesruiz/Documents/0_webs/1. Proyectos Ruvedia/clinica dental kyomu/astro/src/pages/equipo.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/francervantesruiz/Documents/0_webs/1. Proyectos Ruvedia/clinica dental kyomu/astro/src/pages/equipo.astro", void 0);

const $$file = "/Users/francervantesruiz/Documents/0_webs/1. Proyectos Ruvedia/clinica dental kyomu/astro/src/pages/equipo.astro";
const $$url = "/equipo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Equipo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
