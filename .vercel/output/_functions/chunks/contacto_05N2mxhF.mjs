import { c as createComponent } from './astro-component_C2-YdCeC.mjs';
import 'piccolore';
import { T as renderTemplate, B as maybeRenderHead } from './sequence_BzuxnACm.mjs';
import { r as renderComponent } from './entrypoint_W-y1S0Dv.mjs';
import { $ as $$MainLayout } from './MainLayout_B4GhWPs3.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Contacto | Clínica Dental Kyomu" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-header section-spacing"> <div class="container"> <span class="section-tag">Hablemos</span> <h1 class="section-title">Contacto</h1> </div> </section>  <section class="contact section-spacing" style="padding-top: 60px;"> <div class="container"> <div class="contact-compact-grid"> <!-- Left Side: Info & Form --> <div class="contact-content-side reveal"> <div class="contact-methods"> <div class="info-item"> <h3><i class="fas fa-map-marker-alt"></i> Dirección</h3> <p>Calle Río Duero 28, Leganés 28913, Madrid</p> </div> <div class="info-item"> <h3><i class="fas fa-phone-alt"></i> Teléfono / WhatsApp</h3> <p>+34 623 34 41 50</p> </div> <div class="info-item"> <h3><i class="fas fa-clock"></i> Horario</h3> <ul class="schedule-list"> <li><span>Lun - Jue:</span> 10:00-20:00 | <span>Vie:</span> 10:00-19:00</li> </ul> </div> </div> <form action="#" class="kyomu-form"> <div class="form-grid"> <div class="form-group"><input type="text" placeholder="Nombre" required></div> <div class="form-group"><input type="email" placeholder="Email" required></div> </div> <div class="form-group"><textarea placeholder="¿Cómo podemos ayudarte?" rows="3"></textarea></div> <button type="submit" class="btn btn-primary">Enviar Mensaje</button> </form> </div> <!-- Right Side: Compact Map Card --> <div class="contact-map-side reveal"> <div class="map-card"> <div class="map-container-inner"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.2505232490226!2d-3.766345684607869!3d40.324888979375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418badde81e9f1%3A0x86770e0a5d6f1f62!2sCalle%20R%C3%ADo%20Duero%2C%2028%2C%2028913%20Legan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1713550000000" allowfullscreen="" loading="lazy"></iframe> </div> <a href="https://maps.app.goo.gl/YourMapLink" target="_blank" class="map-btn-compact"> <i class="fas fa-directions"></i> Ver en Maps
</a> </div> </div> </div> </div> </section> ` })}`;
}, "/Users/francervantesruiz/Documents/0_webs/1. Proyectos Ruvedia/clinica dental kyomu/astro/src/pages/contacto.astro", void 0);

const $$file = "/Users/francervantesruiz/Documents/0_webs/1. Proyectos Ruvedia/clinica dental kyomu/astro/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contacto,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
