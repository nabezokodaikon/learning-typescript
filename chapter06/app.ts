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

server.get('/', handlerOne);
server.get('/Test', handlerTwo);

server.listen(portNumber, () => {
  console.log(`Listening on localhost: ${portNumber}`);
});
