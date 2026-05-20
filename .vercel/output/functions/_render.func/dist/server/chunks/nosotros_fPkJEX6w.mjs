import { c as createComponent } from './astro-component_C2-YdCeC.mjs';
import 'piccolore';
import { T as renderTemplate, B as maybeRenderHead } from './sequence_BzuxnACm.mjs';
import { r as renderComponent } from './entrypoint_CS70yPFQ.mjs';
import { $ as $$MainLayout } from './MainLayout_DkC5nJb9.mjs';

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Nosotros | Clínica Dental Kyomu" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-header section-spacing"> <div class="container"> <span class="section-tag">Conócenos</span> <h1 class="section-title">Sobre Clínica Kyomu</h1> </div> </section>  <section class="philosophy section-spacing" style="padding-top: 0;"> <div class="container philosophy-grid"> <div class="philosophy-image-wrapper reveal"> <div class="image-frame-v2"> <img src="/img/unnamed.jpg" alt="Instalaciones de Clínica Dental Kyomu" class="parallax-img"> </div> </div> <div class="philosophy-content reveal"> <span class="section-tag">Filosofía Kyomu</span> <h2 class="section-title">Minimalismo y precisión en cada detalle</h2> <div class="philosophy-text"> <p>Kyomu nace de la idea de simplificar la experiencia dental. Creemos que un entorno limpio, minimalista y tranquilo es esencial para una salud dental óptima.</p> <p>Nuestras instalaciones están diseñadas para ofrecerte el máximo confort mientras utilizamos las técnicas más precisas del sector. Cada paciente es único, por eso nuestro enfoque se basa en la escucha activa y la personalización absoluta de cada tratamiento.</p> </div> </div> </div> </section> ` })}`;
}, "/Users/francervantesruiz/Documents/0_webs/1. Proyectos Ruvedia/clinica dental kyomu/astro/src/pages/nosotros.astro", void 0);

const $$file = "/Users/francervantesruiz/Documents/0_webs/1. Proyectos Ruvedia/clinica dental kyomu/astro/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Nosotros,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
