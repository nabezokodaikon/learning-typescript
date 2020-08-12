import http from 'http';

const portNumber = 8080;

const requestListener = (
  req: http.IncomingMessage, res: http.ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(`Method: ${req.method}\nUrl: ${req.url}\n`);
  res.write('Response Text Here');
  res.end();
};

http.createServer(requestListener).listen(portNumber);

console.log(`Listening on localhost: ${portNumber}`);
