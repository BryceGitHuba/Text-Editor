// src-sw.js
const { warmStrategyCache } = require('workbox-recipes');
const { StaleWhileRevalidate, CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

// Use the precacheAndRoute to precache the assets defined in the manifest
precacheAndRoute(self.__WB_MANIFEST);

// Cache CSS and JavaScript files
registerRoute(
  // Define the match callback
  ({ request }) => request.destination === 'style' || request.destination === 'script',
  // Use a CacheFirst strategy for these assets
  new CacheFirst({
    // Define the cache name
    cacheName: 'asset-cache',
    plugins: [
      // This plugin will cache responses with these headers to a maximum age of 60 days
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      // Use the ExpirationPlugin to limit the number of items in the cache and their age
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 60 * 24 * 60 * 60, // 60 days
      }),
    ],
  })
);

// Cache images with a CacheFirst strategy
registerRoute(
  // Define the match callback
  ({ request }) => request.destination === 'image',
  // Use a CacheFirst strategy for images
  new CacheFirst({
    // Define the cache name
    cacheName: 'image-cache',
    plugins: [
      // This plugin will cache responses with these headers to a maximum age of 30 days
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      // Use the ExpirationPlugin to limit the number of items in the cache and their age
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  })
);
