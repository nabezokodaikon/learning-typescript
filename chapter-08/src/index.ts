import * as fs from 'fs';

{
  setTimeout(() => console.info('A'), 1);
  setTimeout(() => console.info('B'), 2);
  console.info('C');
}

{
  fs.readFile(
    './src/sample.txt',
    {encoding: 'utf8'},
    (error, data) => {
      if (error) {
        console.error('error reading!', error);
        return;
      }
      console.info('success reading!', data);
    }
  );

  fs.appendFile(
    './src/sample.txt',
    'New access log entry',
    error => {
      if (error) {
        console.error('error writing!', error);
      }
    }
  );
}

{
  // function appendAndReadPromise(path: string, data: string): Promise<string> {
    // return appendPromise(path, data)
      // .then(() => readPromise(path))
      // .catch(error => console.error(error));
  // }

  // type Executor<T, E extends Error> = (
    // resolve: (result: T) => void,
    // reject: (error: E) => void,
  // ) => void

  // class Promise<T, E extends Error> {
    // constructor(f: Executor<T, E>) {}
    // then<U, F extends Error>(g: (result: T) => Promise<U, F> | U): Promise<U, F>
    // catch<U, F extends Error>(g: (error: E) => Promise<U, F> | U): Promise<U, F>
  // }

  // readFile(path, (error, result) => {
  // }); 

  // function readFilePromise(path: string): Promise<string> {
    // return new Promise((resolve, reject) => {
      // readFile(path, (error, result) => {
        // if (error) {
          // reject(error);
        // } else {
          // resolve(result);
        // }
      // })
    // })
  // }
}
