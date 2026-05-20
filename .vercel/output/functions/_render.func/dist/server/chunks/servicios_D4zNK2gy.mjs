import { c as createComponent } from './astro-component_C2-YdCeC.mjs';
import 'piccolore';
import { T as renderTemplate, B as maybeRenderHead } from './sequence_BzuxnACm.mjs';
import { r as renderComponent } from './entrypoint_ClbOfMVx.mjs';
import { $ as $$MainLayout } from './MainLayout_B9Vy00KL.mjs';

const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Servicios | Clínica Dental Kyomu" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-header section-spacing"> <div class="container"> <span class="section-tag">Tratamientos</span> <h1 class="section-title">Cuidado dental integral</h1> </div> </section>  <section class="services section-spacing" style="background-color: var(--surface); padding-top: 60px;"> <div class="container"> <div class="services-grid"> <!-- Implantes --> <div class="service-card"> <div class="service-icon"><i class="fas fa-tooth"></i></div> <h3>Implantes Dentales</h3> <p>Recupera la funcionalidad y estética de tu boca con la tecnología de implantología más avanzada y duradera.</p> <div class="card-arrow"><i class="fas fa-arrow-right"></i></div> </div> <!-- Ortodoncia --> <div class="service-card"> <div class="service-icon"><i class="fas fa-align-center"></i></div> <h3>Ortodoncia Invisible</h3> <p>Alinea tu sonrisa de forma discreta y cómoda con alineadores transparentes de última generación.</p> <div class="card-arrow"><i class="fas fa-arrow-right"></i></div> </div> <!-- Estética --> <div class="service-card"> <div class="service-icon"><i class="fas fa-magic"></i></div> <h3>Estética Dental</h3> <p>Blanqueamientos, carillas y diseños de sonrisa para que luzcas tu mejor versión con naturalidad.</p> <div class="card-arrow"><i class="fas fa-arrow-right"></i></div> </div> <!-- Odontopediatría --> <div class="service-card"> <div class="service-icon"><i class="fas fa-child"></i></div> <h3>Odontopediatría</h3> <p>Cuidamos la sonrisa de los más pequeños en un ambiente relajado y divertido para ellos.</p> <div class="card-arrow"><i class="fas fa-arrow-right"></i></div> </div> </div> </div> </section> ` })}`;
}, "/Users/francervantesruiz/Documents/0_webs/1. Proyectos Ruvedia/clinica dental kyomu/astro/src/pages/servicios.astro", void 0);

const $$file = "/Users/francervantesruiz/Documents/0_webs/1. Proyectos Ruvedia/clinica dental kyomu/astro/src/pages/servicios.astro";
const $$url = "/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Servicios,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
