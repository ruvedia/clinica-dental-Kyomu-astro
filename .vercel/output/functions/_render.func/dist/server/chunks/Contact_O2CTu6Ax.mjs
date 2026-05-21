import { c as createComponent } from './astro-component_C2-YdCeC.mjs';
import 'piccolore';
import { T as renderTemplate, a4 as addAttribute, B as maybeRenderHead } from './sequence_BzuxnACm.mjs';
import 'clsx';
import { c as config } from './MainLayout_BgMCiNTZ.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
let success = false;
let errorMsg = "";
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section id="contacto" class="py-12 bg-white relative"> ', " ", ` <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"> <!-- Map Side --> <div class="flex flex-col"> <div class="mb-8 overflow-hidden rounded-[3rem] border border-gray-100 shadow-xl aspect-video relative group bg-slate-100 animate-pulse"> <!-- Placeholder background while loading --> <div class="absolute inset-0 flex items-center justify-center text-gray-400 text-sm font-medium z-0">
Cargando mapa interactivo...
</div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.2505232490226!2d-3.766345684607869!3d40.324888979375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418badde81e9f1%3A0x86770e0a5d6f1f62!2sCalle%20R%C3%ADo%20Duero%2C%2028%2C%2028913%20Legan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1713550000000" class="absolute inset-0 w-full h-full border-0 transition-all duration-700 z-10" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" onload="this.parentElement.classList.remove('animate-pulse')"></iframe> </div> <div class="mb-10"> <a`, ' target="_blank" class="inline-flex items-center gap-3 px-8 py-4 bg-teal-600 text-white font-bold rounded-full shadow-lg shadow-teal-600/30 hover:scale-105 transition-transform cursor-pointer"> <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>\nAbrir GPS (Google Maps)\n</a> </div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6"> <div class="bg-white p-6 rounded-2xl border border-gray-100 hover:border-teal-600/30 transition-colors"> <div class="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mb-4"> <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> </div> <h4 class="font-bold text-slate-900 text-lg mb-1">Email</h4> <p class="text-teal-600 hover:text-teal-700 transition-colors"><a', ">", '</a></p> </div> <div class="bg-white p-6 rounded-2xl border border-gray-100 hover:border-teal-600/30 transition-colors"> <div class="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mb-4"> <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 111.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> </div> <h4 class="font-bold text-slate-900 text-lg mb-1">Teléfono / WhatsApp</h4> <p class="text-teal-600 hover:text-teal-700 transition-colors"><a', ">", `</a></p> </div> </div> </div> <div class="animate-safari bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 relative"> <form id="contactForm" class="space-y-6" method="POST" action="/contacto"> <!-- Honeypot oculto para bots --> <div class="hidden" aria-hidden="true"> <label for="address_2">No rellenar si eres humano</label> <input type="text" id="address_2" name="address_2" tabindex="-1" autocomplete="off"> </div> <!-- Mensaje Dinámico de Éxito --> <div id="formSuccess" class="hidden bg-teal-50 border border-teal-600 text-teal-800 p-4 rounded-xl mb-4"> <p class="font-medium text-sm">¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.</p> </div> <!-- Mensaje Dinámico de Error --> <div id="formError" class="hidden bg-red-50 border border-red-600 text-red-800 p-4 rounded-xl mb-4"> <p id="formErrorText" class="font-medium text-sm"></p> </div> <div> <label for="name" class="block text-sm font-semibold text-slate-900 mb-2">Nombre completo</label> <input type="text" id="name" name="name" class="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-colors outline-none text-gray-700 bg-gray-50 transform-gpu" placeholder="Ej. Juan Pérez" required> </div> <div> <label for="email" class="block text-sm font-semibold text-slate-900 mb-2">Correo electrónico</label> <input type="email" id="email" name="email" class="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-colors outline-none text-gray-700 bg-gray-50 transform-gpu" placeholder="tu@email.com" required> </div> <div> <label for="reason" class="block text-sm font-semibold text-slate-900 mb-2">¿Cómo podemos ayudarte?</label> <textarea id="reason" name="reason" rows="4" class="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-colors outline-none text-gray-700 bg-gray-50 transform-gpu resize-none" placeholder="Cuéntanos brevemente qué necesitas..." required></textarea> </div> <div class="flex items-start gap-3"> <div class="flex items-center h-5"> <input id="rgpd_consent" name="rgpd_consent" type="checkbox" required class="w-4 h-4 text-teal-600 bg-gray-50 transform-gpu border-gray-300 rounded focus:ring-2 focus:ring-teal-600/50 cursor-pointer"> </div> <div class="text-sm"> <label for="rgpd_consent" class="font-medium text-gray-600 cursor-pointer">
He leído y acepto la <a href="/politica-de-privacidad" class="text-teal-600 hover:underline transition-colors" target="_blank">Política de Privacidad</a>.
</label> </div> </div> <button type="submit" class="w-full py-4 px-6 border border-transparent text-lg font-bold rounded-xl text-white bg-slate-900 hover:bg-teal-600 shadow-lg transition-all cursor-pointer">
Enviar Mensaje
</button> <!-- Cláusula informativa de primer nivel (RGPD) --> <div class="bg-slate-50 p-4 rounded-xl border border-gray-100 text-[10px] sm:text-[11px] text-gray-500 leading-relaxed mt-4"> <p class="m-0 mb-1 font-bold text-slate-800">Información básica sobre protección de datos (RGPD):</p> <ul class="list-none p-0 m-0 space-y-0.5"> <li><strong>Responsable:</strong> Clínica Dental Kyomu</li> <li><strong>Finalidad:</strong> Gestionar su cita o responder a la consulta enviada.</li> <li><strong>Legitimación:</strong> Su consentimiento explícito al marcar la casilla.</li> <li><strong>Derechos:</strong> Acceder, rectificar, limitar y suprimir sus datos escribiendo a nuestro email.</li> <li><strong>Más información:</strong> Consulte nuestra <a href="/politica-de-privacidad" target="_blank" class="text-teal-600 font-semibold underline hover:text-teal-700 transition-colors">Política de Privacidad</a>.</li> </ul> </div> </form> <script type="module">
          const form = document.getElementById('contactForm');
          const successBanner = document.getElementById('formSuccess');
          const errorBanner = document.getElementById('formError');
          const errorText = document.getElementById('formErrorText');

          if (form) {
            form.addEventListener('submit', async (event) => {
              event.preventDefault();
              
              // Ocultar banners anteriores
              successBanner?.classList.add('hidden');
              errorBanner?.classList.add('hidden');

              // Capturar botón y texto original
              const submitBtn = form.querySelector('button[type="submit"]');
              const originalText = submitBtn ? submitBtn.innerText : 'Enviar Mensaje';
              
              if (submitBtn) {
                submitBtn.innerText = 'Enviando...';
                submitBtn.disabled = true;
                submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
              }

              try {
                const formData = new FormData(form);
                const response = await fetch(form.action, {
                  method: 'POST',
                  headers: { 'Accept': 'application/json' },
                  body: formData
                });
                
                const result = await response.json();
                
                if (response.ok && result.success) {
                  // Mostrar éxito
                  successBanner?.classList.remove('hidden');
                  form.reset();
                } else {
                  // Mostrar error del servidor
                  if (errorText) {
                    errorText.innerText = result.errorMsg || 'Se ha producido un error al enviar el mensaje.';
                  }
                  errorBanner?.classList.remove('hidden');
                }
              } catch (err) {
                console.error('Error al enviar formulario:', err);
                if (errorText) {
                  errorText.innerText = 'Error de conexión. Por favor, comprueba tu conexión SMTP o inténtalo de nuevo.';
                }
                errorBanner?.classList.remove('hidden');
              } finally {
                // Restaurar botón
                if (submitBtn) {
                  submitBtn.innerText = originalText;
                  submitBtn.disabled = false;
                  submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                }
              }
            });
          }
        <\/script> </div> </div> </div> </section>`])), maybeRenderHead(), success, errorMsg, addAttribute(config.contact.mapsUrl, "href"), addAttribute(`mailto:${config.contact.email}`, "href"), config.contact.email, addAttribute(`tel:${config.contact.phone.replace(/\s+/g, "")}`, "href"), config.contact.phone);
}, "/Users/francervantesruiz/Documents/0_webs/1. Proyectos Ruvedia/clinica dental kyomu/astro/src/components/Contact.astro", void 0);

export { $$Contact as $ };
