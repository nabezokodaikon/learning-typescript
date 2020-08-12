import express from 'express';

const server = express();
const portNumber = 8080;

const requestListener = (req: express.Request,
                         res: express.Response) => {
  res.send(`You requested ${req.query.firstname} ${req.query.lastname}`);
};

server.get('/', requestListener);

server.listen(portNumber, () => {
  console.log(`Listening on localhost: ${portNumber}`);
});
