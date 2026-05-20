import { a8 as defineMiddleware, ah as sequence } from './chunks/sequence_BzuxnACm.mjs';
import 'piccolore';
import 'clsx';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const response = await next();
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  const csp = `
    default-src 'self' https:;
    font-src 'self' https: data:;
    style-src 'self' 'unsafe-inline' https:;
    img-src 'self' data: https: blob:;
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
    connect-src 'self' https:;
  `.replace(/\s{2,}/g, " ").trim();
  response.headers.set("Content-Security-Policy", csp);
  return response;
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
