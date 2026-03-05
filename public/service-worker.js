self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  console.log("QUALQUER REQUEST:", event.request.url);
  const request = event.request;
  console.log("Declarando service worker")
  if (
    request.url.includes("forms-na1.hsforms.com") &&
    request.method === "GET"
  ) {
    const url = new URL(request.url);
    const key = url.searchParams.get("key");

    if (key && key.includes("RENDER_SUCCESS")) {
      event.waitUntil(
        self.clients.matchAll().then((clients) => {
          clients.forEach((client) => {
            client.postMessage({
              type: "FORM_RENDER_SUCCESS",
              payload: key,
            });
          });
        })
      );
    }
  }

  event.respondWith(fetch(request));
});
