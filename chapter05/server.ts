import { serve, Response } from "https://deno.land/std/http/server.ts";

const setCORS = (res: Response): void => {
  res.headers!.append("access-control-allow-origin", "*")
  res.headers!.append(
    "access-control-allow-headers",
    "Origin, X-Requested-With, Content-Type, Accept, Range"
  );
  res.headers!.append('Access-Control-Allow-Origin', 'http://localhost:8000');
  res.headers!.append('Access-Control-Allow-Credentials', 'true');
}

const createResponse = (): Response => {
  const headers = new Headers();
  headers.set('content-type', 'text/html');

  const res = {
    status: 200,
    headers: headers,
    body: 'Hello!!!!!'
  };

  return res;
}


const server = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const req of server) {
  const res = createResponse();
  setCORS(res);
  req.respond(res);
}
