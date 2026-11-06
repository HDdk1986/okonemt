// Registration support for the app's home-screen installation flow.
// No caching, request interception, or budget-data access.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
