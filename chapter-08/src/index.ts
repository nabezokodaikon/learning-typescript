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

