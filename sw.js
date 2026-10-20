// تخزين مؤقت للعمل بلا إنترنت: الصفحة (شبكة أولاً)، وباقي الملفات من نفس الموقع (كاش أولاً ثم تحديث). غيّر V عند تغيير الملفات.
const V = 'farm-v1';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(caches.open(V).then(async c => {
    const hit = await c.match(r);
    const net = fetch(r).then(res => { if (res.ok) c.put(r, res.clone()); return res; }).catch(() => hit);
    return r.mode === 'navigate' ? net.then(x => x || hit) : hit || net;
  }));
});
