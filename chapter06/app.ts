import express from 'express';

const server = express();
const portNumber = 8080;

// const requestListener = (req: express.Request,
                         // res: express.Response) => {
  // res.send(`You requested ${req.query.firstname} ${req.query.lastname}`);
// };

const handlerOne = (_req: express.Request, res: express.Response) => {
  res.send('You got handlerOne');
};

const handlerTwo = (_req: express.Request, res: express.Response) => {
  res.send('You got handlerTwo');
};

const handler = () => {
  throw Error('Deliberate Error!');
}

server.get('/', handlerOne);
server.get('/Test', handlerTwo);
server.get('/Error', handler);

server.use((error: any, _req: express.Request, res: express.Response, _next: any) => {
  console.error(error.stack);
  res.status(500).send('An error has occurred');
});

server.listen(portNumber, () => {
  console.log(`Listening on localhost: ${portNumber}`);
});
