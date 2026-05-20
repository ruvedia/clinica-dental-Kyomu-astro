import { c as createComponent } from './astro-component_C2-YdCeC.mjs';
import 'piccolore';
import { T as renderTemplate, B as maybeRenderHead } from './sequence_BzuxnACm.mjs';
import { r as renderComponent } from './entrypoint_CS70yPFQ.mjs';
import { $ as $$MainLayout, c as config } from './MainLayout_DkC5nJb9.mjs';

const $$PoliticaDeCookies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `Política de Cookies | ${config.clinicName}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-slate-50 border-b border-gray-100 py-16"> <div class="max-w-4xl mx-auto px-4"> <h1 class="text-4xl md:text-5xl font-bold text-secondary text-center">Política de Cookies</h1> </div> </div> <div class="max-w-4xl mx-auto py-16 px-4"> <div class="prose prose-lg text-gray-600 max-w-none prose-headings:text-secondary prose-a:text-primary"> <p>Esta página web de <strong>${config.clinicName}</strong> utiliza cookies propias y de terceros para mejorar la experiencia del usuario y ofrecer contenidos adaptados a sus intereses.</p> <h2>¿Qué son las cookies?</h2> <p>Las cookies son pequeños archivos de texto que se almacenan en su navegador cuando visita cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página.</p> <h2>¿Qué cookies utilizamos?</h2> <ul> <li><strong>Cookies Técnicas o Necesarias:</strong> Aquellas imprescindibles para que el sitio web funcione. Permiten funcionalidades básicas como la navegación por la página y guardar sus preferencias sobre el banner de cookies.</li> <li><strong>Cookies Analíticas (En su caso):</strong> Aquellas que, bien tratadas por nosotros o por terceros (como Google Analytics), nos permiten cuantificar el número de usuarios y medir estadísticamente el uso que hacen de los servicios ofertados.</li> </ul> <h2>¿Cómo deshabilitar las cookies en su navegador?</h2> <p>Puede configurar su navegador para aceptar, denegar o eliminar las cookies instaladas. Los pasos varían en función del navegador utilizado (Chrome, Firefox, Safari o Edge). Considere que el bloqueo de ciertas cookies puede devaluar la calidad de la experiencia en la página web.</p> </div> </div> ` })}`;
}, "/Users/francervantesruiz/Documents/0_webs/1. Proyectos Ruvedia/clinica dental kyomu/astro/src/pages/politica-de-cookies.astro", void 0);

const $$file = "/Users/francervantesruiz/Documents/0_webs/1. Proyectos Ruvedia/clinica dental kyomu/astro/src/pages/politica-de-cookies.astro";
const $$url = "/politica-de-cookies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PoliticaDeCookies,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
