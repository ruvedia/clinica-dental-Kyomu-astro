import { c as createComponent } from './astro-component_C2-YdCeC.mjs';
import 'piccolore';
import { T as renderTemplate, B as maybeRenderHead, a4 as addAttribute } from './sequence_BzuxnACm.mjs';
import { r as renderComponent } from './entrypoint_uYE-PROV.mjs';
import { $ as $$MainLayout, c as config } from './MainLayout_Cyb-1hYg.mjs';

const $$AvisoLegal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `Aviso Legal | ${config.clinicName}` }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-slate-50 border-b border-gray-100 py-16 sm:py-24"> <div class="max-w-4xl mx-auto px-4 text-center"> <span class="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Términos Legales</span> <h1 class="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">Aviso Legal</h1> </div> </div> <div class="max-w-4xl mx-auto py-16 sm:py-24 px-4"> <div class="prose prose-lg text-gray-600 max-w-none prose-headings:text-slate-900 prose-a:text-teal-600"> <p class="text-xl leading-relaxed text-gray-500 mb-12">
En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), detallamos los datos identificativos del titular de este portal web:
</p> <!-- Titular Info Card --> <div class="bg-slate-50 rounded-[2.5rem] p-8 sm:p-10 border border-gray-100/80 mb-12 shadow-sm relative overflow-hidden group"> <div class="absolute -right-4 -bottom-4 w-32 h-32 bg-teal-600/5 rounded-full blur-2xl"></div> <h2 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3"> <span class="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-sm font-bold"><i class="fas fa-id-card"></i></span>
Titular del Sitio Web
</h2> <ul class="list-none p-0 m-0 space-y-4 text-sm sm:text-base text-gray-600"> <li class="flex items-center gap-3"><strong class="w-48 text-slate-900">Razón Social:</strong> ${config.clinicName}</li> <li class="flex items-center gap-3"><strong class="w-48 text-slate-900">CIF / NIF:</strong> ${config.cif}</li> <li class="flex items-center gap-3"><strong class="w-48 text-slate-900">Domicilio Fiscal:</strong> ${config.contact.address}</li> <li class="flex items-center gap-3"><strong class="w-48 text-slate-900">Email de Contacto:</strong> <a${addAttribute(`mailto:${config.contact.email}`, "href")} class="text-teal-600 font-semibold">${config.contact.email}</a></li> </ul> </div> <!-- Condiciones de uso --> <div class="mb-10"> <h2 class="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"> <span class="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-sm font-bold">1</span>
Condiciones Generales de Uso
</h2> <p class="leading-relaxed">
El acceso y/o uso de este portal web atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas condiciones serán de aplicación independiente de las condiciones generales de contratación que, en su caso, resulten de obligado cumplimiento para la clínica.
</p> </div> <!-- Propiedad intelectual --> <div class="mb-10"> <h2 class="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"> <span class="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-sm font-bold">2</span>
Propiedad Intelectual e Industrial
</h2> <p class="leading-relaxed"> <strong>${config.clinicName}</strong> por sí o como cesionaria, es propietaria de todos los derechos de propiedad intelectual e industrial de su portal web, así como de los elementos contenidos en el mismo (a título enunciativo: imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.).
</p> <p class="leading-relaxed">
Queda expresamente prohibida la reproducción, distribución o comunicación pública de la totalidad o parte de los contenidos de este portal web con fines comerciales, en cualquier soporte o medio técnico, sin la autorización expresa y escrita del titular.
</p> </div> <!-- Exclusión de garantías --> <div class="mb-12"> <h2 class="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"> <span class="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-sm font-bold">3</span>
Exclusión de Garantías y Responsabilidad
</h2> <p class="leading-relaxed m-0"> <strong>${config.clinicName}</strong> no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal, o la transmisión de virus o programas maliciosos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas de seguridad necesarias para evitarlo.
</p> </div> </div> </div> ` })}`;
}, "/Users/francervantesruiz/Documents/0_webs/1. Proyectos Ruvedia/clinica dental kyomu/astro/src/pages/aviso-legal.astro", void 0);

const $$file = "/Users/francervantesruiz/Documents/0_webs/1. Proyectos Ruvedia/clinica dental kyomu/astro/src/pages/aviso-legal.astro";
const $$url = "/aviso-legal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AvisoLegal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
