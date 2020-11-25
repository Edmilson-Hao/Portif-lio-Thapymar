const staticAssets = [
    './',
    './empresarial.html',
    './index.html',
    './individual.html',
    './main.css',
    './main.js',
    './manifest.json',
    './secondstyle.css',
    './sw.js',
    './img/empresarial/amil/amilempresarial.jpg',
    './img/empresarial/amil/odontopme.jpg',
    './img/empresarial/hapvida/pme.jpg',
    './img/empresarial/hapvida/supersimples.jpg',
    './img/empresarial/lifeday/pme.jpg',
    './img/empresarial/medvida/pme.jpg',
    './img/empresarial/sulamerica/diretoaenfermariamei.jpg',
    './img/empresarial/sulamerica/diretoapartamentomei.jpg',
    './img/empresarial/unimed/pme.jpg',
    './img/individual/amil/amildental.jpg',
    './img/individual/amil/amilpremium.jpg',
    './img/individual/amil/amilsupremo.jpg',
    './img/individual/amil/guiaamilpremium.jpg',
    './img/individual/amil/guiamilsupremo.jpg',
    './img/individual/bradesco/bradescoodonto.jpg',
    './img/individual/bradesco/bradescopremium.jpg',
    './img/individual/bradesco/bradescosupremo.jpg',
    './img/individual/bradesco/guiabradescopremium.jpg',
    './img/individual/bradesco/guiabradescosupremo.jpg',
    './img/individual/bradesco/guiasupremohospitalar.jpg',
    './img/individual/bradesco/supremohospitalar.jpg',
    './img/individual/hapvida/ascomp.jpg',
    './img/individual/hapvida/coletivoclubedesaude.jpg',
    './img/individual/hapvida/guiahapvida.jpg',
    './img/individual/hapvida/hapvidaassbra.jpg',
    './img/individual/hapvida/individual.jpg',
    './img/individual/hapvida/listadeunidades.jpg',
    './img/individual/medvida/individual.jpg',
    './img/individual/sulamerica/extramed.jpg',
    './img/individual/sulamerica/guiasulamericapremium.jpg',
    './img/individual/sulamerica/guiasulamericapremiumhospitalar.jpg',
    './img/individual/sulamerica/guiasulamericasupremo.jpg',
    './img/individual/sulamerica/guiasulamericasupremohospitalar.jpg',
    './img/individual/sulamerica/odonto.jpg',
    './img/individual/sulamerica/sulamericapremium.jpg',
    './img/individual/sulamerica/sulamericapremiumhospitalar.jpg',
    './img/individual/sulamerica/sulamericasupremo.jpg',
    './img/individual/sulamerica/sulamericasupremohospitalar.jpg',
    './img/individual/unimed/coletivoporadesao.jpg',
    './img/individual/unimed/guiaunimed.pdf',
    './img/informativo/compradecarenciasulamerica.jpg',
    './img/informativo/idades.jpg',
    './img/informativo/redecredenciadasulamerica.pdf',
    './img/logos/amil.png',
    './img/logos/bradesco.png',
    './img/logos/hapvida.png',
    './img/logos/idades.png',
    './img/logos/lifeday.png',
    './img/logos/medvida.png',
    './img/logos/sulamerica.png',
    './img/logos/thapymar.png',
    './img/logos/thapymar192.png',
    './img/logos/thapymar512.png',
    './img/logos/unimed.png',
    './img/idades.jpg'
];

self.addEventListener('install', async event => {
    const cache = await caches.open('news-static');
    cache.addAll(staticAssets);
});

self.addEventListener('install', async event => {
    console.log("Install");
    const cache = await caches.open('news-static');
});

self.addEventListener('fetch', event => {
    console.log('fetch');
    const req = event.request;
    event.respondWith(cacheFirst(req));
});

async function cacheFirst(req){
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}