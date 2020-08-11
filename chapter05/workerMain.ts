const worker = new Worker(new URL('worker.js', import.meta.url).href, {
  type: 'module',
});

worker.postMessage(`Message: ${Date.now()}`);

const workerMessageRecived = (event: any) => {
  const response = event.data;
  console.log(`(response.id) ${response.message}`)
};

worker.addEventListener('message', workerMessageRecived);
