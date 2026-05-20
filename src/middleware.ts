import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  
  // Agregar Headers de Seguridad Básicos
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // Content Security Policy (CSP) - Versión más relajada para evitar bloqueos de scripts locales
  const csp = `
    default-src 'self' https:;
    font-src 'self' https: data:;
    style-src 'self' 'unsafe-inline' https:;
    img-src 'self' data: https: blob:;
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
    connect-src 'self' https:;
  `.replace(/\s{2,}/g, ' ').trim();
  
  response.headers.set('Content-Security-Policy', csp);
  
  return response;
});
