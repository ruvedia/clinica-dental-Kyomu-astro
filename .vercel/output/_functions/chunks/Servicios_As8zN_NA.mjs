import { c as createComponent } from './astro-component_C2-YdCeC.mjs';
import 'piccolore';
import { B as maybeRenderHead, b8 as unescapeHTML, T as renderTemplate } from './sequence_BzuxnACm.mjs';
import 'clsx';
import { c as config, r as renderScript } from './MainLayout_BHOOYz7O.mjs';

const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  const services = config.services;
  return renderTemplate`${maybeRenderHead()}<section id="servicios" class="py-16 bg-white relative overflow-hidden"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center max-w-3xl mx-auto mb-20"> <span class="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Servicios Especializados</span> <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Cuidado Dental Integral</h2> <p class="text-gray-600 text-lg leading-relaxed">Combinamos tecnología de vanguardia y tratamientos innovadores con una atención humana, cercana y totalmente personalizada.</p> </div> <!-- Sección Única de Tratamientos Dentales --> <div class="mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${services.map((service) => renderTemplate`<div class="js-service-card bg-slate-50/50 rounded-[2rem] p-8 border border-gray-100/50 hover:shadow-xl hover:bg-white transition-all duration-500 group hover:-translate-y-1 flex flex-col justify-between min-h-[300px]"> <div> <div class="w-14 h-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-teal-600/20 group-hover:scale-110 transition-transform duration-300">${unescapeHTML(service.icon)}</div> <h3 class="text-xl font-bold text-slate-900 mb-4 leading-tight">${service.title}</h3> <p class="text-gray-500 text-sm leading-relaxed mb-6"> ${service.description} </p> </div> <div class="text-teal-600 text-sm font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
Saber más <i class="fas fa-arrow-right text-xs"></i> </div> </div>`)} </div> </div> </div> </section> ${renderScript($$result, "/Users/francervantesruiz/Documents/0_webs/1. Proyectos Ruvedia/clinica dental kyomu/astro/src/components/Servicios.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/francervantesruiz/Documents/0_webs/1. Proyectos Ruvedia/clinica dental kyomu/astro/src/components/Servicios.astro", void 0);

export { $$Servicios as $ };
