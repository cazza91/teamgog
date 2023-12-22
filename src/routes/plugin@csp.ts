import type { RequestHandler } from "@builder.io/qwik-city";
import { isDev } from "@builder.io/qwik/build";
 
export const onRequest: RequestHandler = event => {
  // if (isDev) return; // Will not return CSP headers in dev mode
  const nonce = Date.now().toString(36); // Your custom nonce logic here
  event.sharedMap.set("@nonce", nonce);
  const csp = [
    `default-src 'self' 'unsafe-inline'`,
    `font-src 'self'`,
    `img-src 'self' 'unsafe-inline' data: https://www.pastafattaincasa.com  https://media.istockphoto.com`,
    `script-src 'self' 'unsafe-inline' 'unsafe-eval' https: 'nonce-${nonce}' 'strict-dynamic'`,
    `style-src 'self' 'unsafe-inline'`,
    `frame-src 'self' 'nonce-${nonce}'`,
    `object-src 'none'`,
    `base-uri 'self'`,
  ];
 
  event.headers.set("Content-Security-Policy", csp.join("; "));
};
