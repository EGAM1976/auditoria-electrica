/* Service worker: guarda la app en el teléfono para que abra sin señal.
   Estrategia: red primero (para recibir actualizaciones cuando hay cobertura),
   caché como respaldo (para que funcione dentro de planta). */
const CACHE = "auditoria-acl-v1";
const ARCHIVOS = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ARCHIVOS)).then(()=>self.skipWaiting()));
});

self.addEventListener("activate", e=>{
  e.waitUntil(
    caches.keys()
      .then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch", e=>{
  if(e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(res=>{
        const copia = res.clone();
        caches.open(CACHE).then(c=>c.put(e.request, copia)).catch(()=>{});
        return res;
      })
      .catch(()=>caches.match(e.request).then(r=>r || caches.match("./index.html")))
  );
});
