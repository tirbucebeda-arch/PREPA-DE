const CACHE_NAME = 'revision-deb-quiz-8-antennes-connexion-v9';
const APP_FILES = [
  "./j1-chirurgie-corrige.pdf",
  "./j1-gyneco-corrige.pdf",
  "./j1-medecine-corrige.pdf",
  "./j1-pediatrie-corrige.pdf",
  "./j1-ssr-corrige.pdf",
  "./j1-sante-corrige.pdf",

  "./Recueil_Corriges_DEB_2026_8_Antennes.pdf",
  "./",
  "./chirurgie-quiz.html",
  "./chirurgie.html",
  "./de-blanc-2026-agboville-ide.pdf",
  "./de-blanc-2026-agboville-sfm.pdf",
  "./de-blanc-2026-daloa-ide.pdf",
  "./de-blanc-2026-daloa-sfm.pdf",
  "./de-blanc-2026-korhogo-ide.pdf",
  "./de-blanc-2026-korhogo-sfm.pdf",
  "./de-blanc-2026-sujets.html",
  "./document-chirurgie.pdf",
  "./document-medecine.pdf",
  "./document-pediatrie.pdf",
  "./document-sante-publique.pdf",
  "./droits-auteur-avertissement.pdf",
  "./droits-auteur.html",
  "./icone-l3-192.png",
  "./icone-l3-512.png",
  "./illustration-page-004.png",
  "./illustration-page-007.png",
  "./illustration-page-036.png",
  "./illustration-page-037.png",
  "./illustration-page-054.png",
  "./illustration-page-055.png",
  "./illustration-page-092.png",
  "./illustration-page-093.png",
  "./index.html",
  "./manifest.webmanifest",
  "./medecine-quiz.html",
  "./medecine.html",
  "./pediatrie-cas.html",
  "./pediatrie-qroc.html",
  "./pediatrie-quiz.html",
  "./pediatrie.html",
  "./portail.html",
  "./quiz-promo-p8.html",
  "./sante-publique-quiz.html",
  "./sante-publique.html",
  "./chirurgie-abengourou-2026-corrige.pdf",
  "./medecine-abengourou-2026-corrige.pdf",
  "./ssr-pf-gu-genre-abengourou-2026-corrige.pdf",
  "./gynecologie-obstetrique-abengourou-2026-corrige.pdf",
  "./pediatrie-abengourou-2026-corrige.pdf",
  "./sante-publique-abengourou-2026-corrige.pdf"
];

async function cacheAll(progressClient) {
  const cache = await caches.open(CACHE_NAME);
  let done = 0;
  for (const url of APP_FILES) {
    const request = new Request(url, { cache: 'reload' });
    const response = await fetch(request);
    if (!response.ok && url.endsWith(".pdf")) continue;
    if (!response.ok) throw new Error(`Fichier hors ligne introuvable : ${url}`);
    await cache.put(request, response);
    done += 1;
    if (progressClient) progressClient.postMessage({ type: 'OFFLINE_PROGRESS', done, total: APP_FILES.length });
  }
  if (progressClient) progressClient.postMessage({ type: 'OFFLINE_DONE' });
}

self.addEventListener('install', event => {
  event.waitUntil(cacheAll().then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  if (event.data?.type !== 'CACHE_ALL') return;
  event.waitUntil(cacheAll(event.source).catch(() => {
    if (event.source) event.source.postMessage({ type: 'OFFLINE_ERROR' });
  }));
});

function mustUseNetworkFirst(request) {
  if (request.mode === 'navigate') return true;
  const pathname = new URL(request.url).pathname.toLowerCase();
  return pathname.endsWith('.html')
    || pathname.endsWith('.js')
    || pathname.endsWith('.css')
    || pathname.endsWith('.webmanifest');
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request, { cache: 'no-store' });
    if (response && response.ok) await cache.put(request, response.clone());
    return response;
  } catch (_) {
    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) return cached;
    if (request.mode === 'navigate') {
      return new Response('Cette page est indisponible hors connexion. Reconnectez-vous puis rechargez la page.', {
        status: 503,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
    return new Response('', { status: 503, statusText: 'Hors connexion' });
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request, { ignoreSearch: true });
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && response.ok) await cache.put(request, response.clone());
    return response;
  } catch (_) {
    return new Response('', { status: 503, statusText: 'Hors connexion' });
  }
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const requestURL = new URL(event.request.url);
  if (requestURL.origin !== self.location.origin) return;
  if (event.request.headers.has('Range')) return;
  event.respondWith(mustUseNetworkFirst(event.request)
    ? networkFirst(event.request)
    : cacheFirst(event.request));
});
