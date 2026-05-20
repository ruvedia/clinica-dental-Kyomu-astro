import { c as createComponent } from './astro-component_C2-YdCeC.mjs';
import 'piccolore';
import { T as renderTemplate, B as maybeRenderHead, a4 as addAttribute } from './sequence_BzuxnACm.mjs';
import { r as renderComponent } from './entrypoint_CS70yPFQ.mjs';
import { $ as $$MainLayout, c as config } from './MainLayout_DkC5nJb9.mjs';

const $$AvisoLegal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `Aviso Legal | ${config.clinicName}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-slate-50 border-b border-gray-100 py-16"> <div class="max-w-4xl mx-auto px-4"> <h1 class="text-4xl md:text-5xl font-bold text-secondary text-center">Aviso Legal</h1> </div> </div> <div class="max-w-4xl mx-auto py-16 px-4"> <div class="prose prose-lg text-gray-600 max-w-none prose-headings:text-secondary prose-a:text-primary"> <p>En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se detallan los datos identificativos del titular de este sitio web:</p> <ul class="bg-gray-50 p-6 rounded-xl border border-gray-100 list-none mb-8"> <li class="mb-2"><strong>Titular del sitio web:</strong> ${config.clinicName}</li> <li class="mb-2"><strong>CIF/NIF:</strong> ${config.cif}</li> <li class="mb-2"><strong>Domicilio:</strong> ${config.contact.address}</li> <li><strong>Email de contacto:</strong> <a${addAttribute(`mailto:${config.contact.email}`, "href")}>${config.contact.email}</a></li> </ul> <h2>Condiciones generales de uso</h2> <p>El acceso y/o uso de este portal web atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.</p> <h2>Propiedad Intelectual e Industrial</h2> <p><strong>${config.clinicName}</strong> por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.). Todos los derechos reservados.</p> <h2>Exclusión de garantías y responsabilidad</h2> <p><strong>${config.clinicName}</strong> no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p> </div> </div> ` })}`;
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
