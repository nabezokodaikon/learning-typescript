interface Message {
  id: number;
  message: string;
}

// let id = 0;
// self.setInterval(() => {
  // id++; 
  // const message: Message  = {
    // 'id': id,
    // 'message': `Message sent at ${Date.now()}`,
  // };
  // self.postMessage(message, '*');
// }, 1000);

self.onmessage = async (e: any) => {
  console.log(e.data);
  self.postMessage('bar', '*');

  const arrBuf = new ArrayBuffer(8);
  self.postMessage('bar', '*', [arrBuf]);
};
