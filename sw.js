self.addEventListener('install', (event) => {
    console.log('Service Worker instalado no projeto PD.');
});

self.addEventListener('fetch', (event) => {
    // Intercepta as requisições (obrigatório para disparar o botão de instalar)
    event.respondWith(fetch(event.request));
});