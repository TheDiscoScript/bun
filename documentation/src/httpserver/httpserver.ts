//TLS
const serverTLS = Bun.serve({
  fetch: (request) => new Response("Welcome to Bun!"),
  tls: {
    cert: Bun.file("cert.pem"),
    key: Bun.file("key.pem"),
  },
});

const serverBasic = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("Welcome to Bun!");
  },
});

console.log(`Listening on localhost: ${serverBasic.port}`);

const response = await fetch("https://bun.sh/api", {
  method: "POST",
  body: JSON.stringify({ message: "Hello from Bun!" }),
  headers: { "Content-Type": "application/json" },
});
const body = await response.json();
