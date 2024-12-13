import { registerRoute, Route } from 'workbox-routing'
import { cleanupOutdatedCaches, precacheAndRoute } from "workbox-precaching";
import {CacheFirst, NetworkFirst, StaleWhileRevalidate} from 'workbox-strategies'


declare let self: ServiceWorkerGlobalScope

cleanupOutdatedCaches()

precacheAndRoute(self.__WB_MANIFEST);


self.skipWaiting()

// cache images

const imageRoute = new Route(
    ({request, sameOrigin})=>{
        return sameOrigin && request.destination === 'image'
    },
    new CacheFirst({
        cacheName: 'images'
    })
)

registerRoute(imageRoute);

// cache api calls

const fetchTaskRoute = new Route(
    ({ request }) => {
        // Filtra solo las llamadas GET hacia la URL de la API
        return (
          request.url.startsWith("https://swapi.dev/api/people/") &&
          request.method === "GET"
        );
      },
    new NetworkFirst({
        cacheName: "api/fetch-tasks"
    })
);

registerRoute(fetchTaskRoute)

// Manejar fuentes de Google Fonts
registerRoute(
    ({ url }) => url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com',
    new StaleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    })
  );
  
  // Manejar fuentes desde otros CDN
  registerRoute(
    ({ url }) => url.origin === 'https://fonts.cdnfonts.com',
    new CacheFirst({
      cacheName: 'cdnfonts-cache',

    })
  );