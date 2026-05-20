import { c as createComponent } from './astro-component_C2-YdCeC.mjs';
import 'piccolore';
import { T as renderTemplate, D as renderSlot, b9 as renderHead, a4 as addAttribute } from './sequence_BzuxnACm.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title = "Clínica Dental Kyomu | Tu sonrisa, nuestra prioridad",
    description = "En Clínica Dental Kyomu en Leganés, combinamos tecnología avanzada con un trato humano y cercano. Especialistas en Implantes, Ortodoncia Invisible y Estética Dental."
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><!-- Icons & Fonts --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"><link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">', '</head> <body> <div class="progress-bar-container"> <div class="progress-bar"></div> </div> <!-- Header --> <header> <div class="container"> <nav> <a href="/" class="logo">Kyomu</a> <ul class="nav-links"> <li><a href="/" class="nav-link">Inicio</a></li> <li><a href="/nosotros" class="nav-link">Nosotros</a></li> <li><a href="/servicios" class="nav-link">Servicios</a></li> <li><a href="/equipo" class="nav-link">Equipo</a></li> <li><a href="/contacto" class="nav-link">Contacto</a></li> <li class="nav-cta-wrapper"><a href="https://wa.me/34623344150?text=Hola,%20me%20gustaría%20solicitar%20una%20cita%20en%20Kyomu." target="_blank" class="btn btn-primary nav-cta">Pedir Cita</a></li> </ul> <div class="nav-actions"> <div class="hamburger"> <span></span> <span></span> <span></span> </div> </div> </nav> </div> </header> <main> ', ' </main> <!-- Footer --> <footer style="padding: 60px 0; border-top: 1px solid #EEE; text-align: center;"> <div class="container"> <h2 class="logo" style="margin-bottom: 20px;">Kyomu</h2> <p style="color: var(--text-muted);">&copy; ', ' Clínica Dental Kyomu. Todos los derechos reservados.</p> </div> </footer> <!-- Floating WhatsApp --> <a href="https://wa.me/34623344150?text=Hola,%20me%20gustaría%20solicitar%20una%20cita%20en%20Kyomu." target="_blank" class="floating-whatsapp"> <i class="fab fa-whatsapp"></i> <span>Pedir Cita</span> </a> <!-- Scripts --> <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"><\/script> <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"><\/script> <script src="/script.js"><\/script> </body> </html>'])), title, addAttribute(description, "content"), renderHead(), renderSlot($$result, $$slots["default"]), (/* @__PURE__ */ new Date()).getFullYear());
}, "/Users/francervantesruiz/Documents/0_webs/1. Proyectos Ruvedia/clinica dental kyomu/astro/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
