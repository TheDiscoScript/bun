console.log("Hello via Bun!");

const server = Bun.serve({
  port: Bun.env.PORT || process.env.PORT || 8000, //no .dotenv package needed
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname == "/")
      return new Response("Hello via fetch Bun! - HOMEPAGE");
    if (url.pathname == "/about")
      return new Response("Bun is Life, Bun is Love! - ABOUT PAGE");
    return new Response("404! - NOT FOUND", { status: 404 });
  },
});

console.log(`Listening on port ${server.port}...`);

// bun --watch index.ts // in need to reload the page
// bun --hot index.ts //this is hotreload(i dont want to reload the page)
// or scripts in package.json ==> bun start | bun dev | bun hot

//bunx cowsay - Hello Bun
//--> bunx do something from package (like react-create-app) without installing package
