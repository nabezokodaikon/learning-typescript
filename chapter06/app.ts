import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 8000 });
console.log('http://localhost:8000');

for await (const req of server) {
  const body = `Mehotd: ${req.method}\nUrl: ${req.url}\nResponse Text Here`;
  req.respond({
    status: 200,
    headers: new Headers({
      'Content-Type': 'text/plain',
    }),
    body: body
  });
}
