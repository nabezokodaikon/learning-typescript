import {fork} from 'child_process';

let child = fork('./src/ChildThread.js');

child.on('messages', data => 
  console.log('Child process sent a messages', data)
);

child.send({type: 'syn', data: [3]});
