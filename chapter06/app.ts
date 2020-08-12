import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 8000 });
console.log('http://localhost:8000');

for await (const req of server) {
    req.respond({
      status: 200,
      headers: new Headers({
        'Content-Type': 'text/plain',
      }),
      body: 'Response Text Here'
    });
}
