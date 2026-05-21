import { c as createComponent } from './astro-component_C2-YdCeC.mjs';
import 'piccolore';
import { T as renderTemplate, B as maybeRenderHead } from './sequence_BzuxnACm.mjs';
import { r as renderComponent } from './entrypoint_C6RGDqt5.mjs';
import { $ as $$MainLayout, c as config } from './MainLayout_D3C-pk1D.mjs';
import { $ as $$Servicios$1 } from './Servicios_D1Ilkl24.mjs';
import { $ as $$Contact } from './Contact_BCbDryLK.mjs';

const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `Tratamientos y Servicios | ${config.clinicName}`, "description": config.description }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-slate-50 border-b border-gray-100 py-16 sm:py-24"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <span class="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Tratamientos</span> <h1 class="text-4xl md:text-6xl font-bold text-slate-900">Cuidado Dental Integral</h1> </div> </div>  ${renderComponent($$result2, "Servicios", $$Servicios$1, {})}  ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
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
