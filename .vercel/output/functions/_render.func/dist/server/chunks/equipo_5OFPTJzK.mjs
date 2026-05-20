import { c as createComponent } from './astro-component_C2-YdCeC.mjs';
import 'piccolore';
import { T as renderTemplate, B as maybeRenderHead } from './sequence_BzuxnACm.mjs';
import { r as renderComponent } from './entrypoint_W-y1S0Dv.mjs';
import { $ as $$MainLayout } from './MainLayout_B4GhWPs3.mjs';

const $$Equipo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Equipo | Clínica Dental Kyomu" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-header section-spacing"> <div class="container"> <span class="section-tag">Especialistas</span> <h1 class="section-title">Nuestro Equipo</h1> </div> </section>  <section class="team section-spacing" style="padding-top: 60px;"> <div class="container"> <div class="team-grid"> <div class="team-card"> <div class="team-img-wrapper"> <img src="/img/2024-05-09-5.jpg" alt="Doctor en Kyomu" class="team-img parallax-img"> </div> <div class="team-info"> <h3>Dr. Especialista</h3> <p>Expertos en salud dental</p> </div> </div> <div class="team-card"> <div class="team-img-wrapper"> <img src="/img/2024-05-09-2.jpg" alt="Equipo Kyomu" class="team-img parallax-img"> </div> <div class="team-info"> <h3>Atención Personalizada</h3> <p>Compromiso y excelencia</p> </div> </div> <div class="team-card"> <div class="team-img-wrapper"> <img src="/img/2024-05-09-6.jpg" alt="Instalaciones Kyomu" class="team-img parallax-img"> </div> <div class="team-info"> <h3>Tecnología Avanzada</h3> <p>Innovación constante</p> </div> </div> </div> </div> </section> ` })}`;
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
