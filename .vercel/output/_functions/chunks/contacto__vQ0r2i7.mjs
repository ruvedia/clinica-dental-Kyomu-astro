import { c as createComponent } from './astro-component_C2-YdCeC.mjs';
import 'piccolore';
import { T as renderTemplate, B as maybeRenderHead } from './sequence_BzuxnACm.mjs';
import { r as renderComponent } from './entrypoint_tQs4wuKp.mjs';
import { c as config, $ as $$MainLayout } from './MainLayout_BE9lXY21.mjs';
import { $ as $$Contact } from './Contact_CV5vNw2i.mjs';
import nodemailer from 'nodemailer';

const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Contacto;
  let success = false;
  let errorMsg = "";
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const requestOrigin = Astro2.request.headers.get("origin") || "";
      const requestHost = Astro2.request.headers.get("host") || "";
      if (requestOrigin && !requestOrigin.includes(requestHost) && !requestOrigin.includes("localhost") && !requestOrigin.includes("127.0.0.1")) {
        console.error(`[SECURITY CSRF] Petición no autorizada desde origen externo: ${requestOrigin}`);
        errorMsg = "Petición bloqueada por políticas de seguridad de origen (CSRF).";
      } else {
        const honeypot = data.get("address_2");
        if (honeypot && honeypot.toString().trim() !== "") {
          console.warn("[SECURITY] Intento de spam bot interceptado y neutralizado mediante honeypot.");
          success = true;
        } else {
          const name = data.get("name")?.toString().trim().replace(/<[^>]*>/g, "") || "";
          const email = data.get("email")?.toString().trim() || "";
          const reason = data.get("reason")?.toString().trim().replace(/<[^>]*>/g, "") || "";
          const rgpdConsent = data.get("rgpd_consent");
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!name || name.length > 80) {
            errorMsg = "El nombre es inválido o excede el límite de seguridad (80 caracteres).";
          } else if (!email || !emailRegex.test(email) || email.length > 100) {
            errorMsg = "La dirección de correo electrónico no es válida o es demasiado larga.";
          } else if (!reason || reason.length > 1e3) {
            errorMsg = "La consulta no es válida o excede el límite de seguridad (1000 caracteres).";
          } else if (!rgpdConsent) {
            errorMsg = "Es obligatorio aceptar la cláusula de protección de datos (RGPD).";
          } else {
            const smtpHost = undefined                          || process.env.SMTP_HOST;
            const smtpPort = parseInt(undefined                          || process.env.SMTP_PORT || "465");
            const smtpUser = undefined                          || process.env.SMTP_USER;
            const smtpPass = undefined                          || process.env.SMTP_PASS;
            const contactReceiver = undefined                                 || process.env.CONTACT_RECEIVER || smtpUser || "ruvedia@hotmail.com";
            if (!smtpHost || !smtpUser || !smtpPass) {
              console.error("[SMTP CONFIG ERROR] Falta configurar variables de entorno SMTP seguras en Vercel.");
              errorMsg = "El backend del formulario está activo pero requiere configurar las credenciales SMTP en Vercel.";
            } else {
              const transporter = nodemailer.createTransport({
                host: smtpHost,
                port: smtpPort,
                secure: smtpPort === 465,
                // Cifrado SSL/TLS implícito para puerto 465
                auth: {
                  user: smtpUser,
                  pass: smtpPass
                },
                tls: {
                  rejectUnauthorized: true
                  // Requiere certificados SSL/TLS de confianza en servidor
                }
              });
              const sanitizedSubject = `Web Kyomu: Nueva Consulta de ${name.slice(0, 40)}`;
              const mailOptions = {
                from: `"${config.clinicName}" <${smtpUser}>`,
                to: contactReceiver,
                replyTo: email,
                subject: sanitizedSubject,
                text: `Nueva consulta de paciente:

Nombre: ${name}
Email: ${email}
Consulta: ${reason}

Consiento RGPD: Sí`,
                html: `
                <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 30px; border: 1px solid #f0f0f0; border-radius: 24px; background-color: #ffffff; color: #334155; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                  <div style="text-align: center; margin-bottom: 30px;">
                    <div style="display: inline-block; padding: 12px; background-color: #f0fdfa; border-radius: 16px; color: #0d9488;">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block; margin: 0 auto;"><path d="M12 2C9 2 7 4 7 8c0 3 1.5 6 3 7 1.5 1 2 2.5 2 4v1a1 1 0 0 0 2 0v-1c0-1.5.5-3 2-4 1.5-1 3-4 3-7 0-4-2-6-5-6z"/></svg>
                    </div>
                    <h2 style="color: #0f172a; margin: 15px 0 5px 0; font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">${config.clinicName}</h2>
                    <span style="color: #0d9488; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Formulario Web de Contacto</span>
                  </div>
                  <hr style="border: 0; border-top: 1px solid #f1f5f9; margin-bottom: 30px;">
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #475569; margin-bottom: 30px;">
                    <tr>
                      <td style="padding: 10px 0; font-weight: 600; color: #0f172a; width: 120px;">Paciente:</td>
                      <td style="padding: 10px 0; color: #334155;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; font-weight: 600; color: #0f172a;">Email:</td>
                      <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #0d9488; text-decoration: none; font-weight: 500;">${email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; font-weight: 600; color: #0f172a; vertical-align: top; padding-top: 14px;">Consulta:</td>
                      <td style="padding: 10px 0; color: #334155; line-height: 1.6; background-color: #f8fafc; padding: 20px; border-radius: 16px; border: 1px solid #f1f5f9; margin-top: 4px; display: block;">${reason}</td>
                    </tr>
                  </table>
                  <hr style="border: 0; border-top: 1px solid #f1f5f9; margin-top: 30px; margin-bottom: 20px;">
                  <div style="font-size: 10px; color: #94a3b8; text-align: center; line-height: 1.5;">
                    Este mensaje ha sido procesado de forma encriptada y segura desde la función serverless de Vercel.<br>
                    Cumple estrictamente con el Reglamento General de Protección de Datos (RGPD) médico.
                  </div>
                </div>
              `
              };
              await transporter.sendMail(mailOptions);
              success = true;
            }
          }
        }
      }
    } catch (error) {
      console.error("[SERVER FORM EXCEPTION] Error de procesamiento severo:", error);
      errorMsg = "Se ha producido una excepción en el servidor al intentar enviar su mensaje. Por favor, intente de nuevo en unos minutos.";
    }
  }
  if (Astro2.request.headers.get("accept")?.includes("application/json")) {
    return new Response(JSON.stringify({ success, errorMsg }));
  }
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `Contacto y Citas | ${config.clinicName}`, "description": config.description }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-slate-50 border-b border-gray-100 py-16 sm:py-24"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <span class="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Ubicación</span> <h1 class="text-4xl md:text-6xl font-bold text-slate-900">Contacto y Citas</h1> </div> </div>  ${renderComponent($$result2, "Contact", $$Contact, { "success": success, "errorMsg": errorMsg })} ` })}`;
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
