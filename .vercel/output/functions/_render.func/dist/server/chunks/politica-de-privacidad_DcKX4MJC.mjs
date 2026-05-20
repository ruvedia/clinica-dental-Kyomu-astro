import { c as createComponent } from './astro-component_C2-YdCeC.mjs';
import 'piccolore';
import { T as renderTemplate, B as maybeRenderHead } from './sequence_BzuxnACm.mjs';
import { r as renderComponent } from './entrypoint_ClbOfMVx.mjs';
import { $ as $$MainLayout } from './MainLayout_B9Vy00KL.mjs';
import { c as config } from './config_CYsxdpBX.mjs';

const $$PoliticaDePrivacidad = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `Política de Privacidad | ${config.clinicName}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-slate-50 border-b border-gray-100 py-16"> <div class="max-w-4xl mx-auto px-4"> <h1 class="text-4xl md:text-5xl font-bold text-secondary text-center">Política de Privacidad</h1> </div> </div> <div class="max-w-4xl mx-auto py-16 px-4"> <div class="prose prose-lg text-gray-600 max-w-none prose-headings:text-secondary prose-a:text-primary"> <p>Para <strong>${config.clinicName}</strong> (en adelante, la "Clínica"), la protección de sus datos personales y su privacidad es de suma importancia. A través de este documento explicamos cómo recopilamos y tratamos sus datos cuando utiliza nuestros servicios y visita nuestra página web.</p> <h2>1. Responsable del Tratamiento</h2> <ul> <li><strong>Identidad:</strong> ${config.clinicName}</li> <li><strong>CIF / NIF:</strong> ${config.cif}</li> <li><strong>Dirección:</strong> ${config.contact.address}</li> <li><strong>Correo electrónico:</strong> ${config.contact.email}</li> </ul> <h2>2. ¿Con qué finalidad tratamos sus datos personales?</h2> <p>Sus datos personales (nombre, correo electrónico, teléfono y motivo de la consulta) recogidos a través de los formularios de la web serán utilizados exclusivamente para:</p> <ul> <li>Gestionar su cita médica o terapéutica.</li> <li>Responder a las consultas o solicitudes de información enviadas.</li> <li>Enviarle información relevante relacionada estrictamente con los servicios solicitados.</li> </ul> <h2>3. Base legal para el tratamiento de los datos</h2> <p>La base legal para el tratamiento de sus datos es el <strong>consentimiento específico</strong> que usted nos otorga al aceptar explícitamente esta Política de Privacidad antes de enviar cualquier formulario en nuestra web.</p> <h2>4. Conservación de los datos</h2> <p>Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o terapéutica o, en su caso, durante los años necesarios para cumplir con las obligaciones legales aplicables a la gestión de historiales clínicos, y no se solicitará su supresión por el interesado.</p> <h2>5. Sus Derechos (ARCO)</h2> <p>Usted tiene derecho a obtener confirmación sobre si en <strong>${config.clinicName}</strong> estamos tratando sus datos personales. Puede ejercer los siguientes derechos contactando con nuestro email:</p> <ul> <li>Derecho de <strong>A</strong>cceso, <strong>R</strong>ectificación, <strong>C</strong>ancelación u <strong>O</strong>posición.</li> <li>Derecho a retirar su consentimiento en cualquier momento.</li> </ul> </div> </div> ` })}`;
}, "/Users/francervantesruiz/Documents/0_webs/1. Proyectos Ruvedia/clinica dental kyomu/astro/src/pages/politica-de-privacidad.astro", void 0);

const $$file = "/Users/francervantesruiz/Documents/0_webs/1. Proyectos Ruvedia/clinica dental kyomu/astro/src/pages/politica-de-privacidad.astro";
const $$url = "/politica-de-privacidad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PoliticaDePrivacidad,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
