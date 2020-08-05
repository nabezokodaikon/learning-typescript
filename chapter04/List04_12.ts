module List04_12 {

  interface Subscriber {
    (message: string): void;
  }

  class Publisher {
    private subscribers: Subscriber[] = [];

    addSubscriber(subscriber: Subscriber) {
      this.subscribers.push(subscriber);
    }

    notify(message: string) {
      for (let i = 0; i < this.subscribers.length; i++) {
        this.subscribers[i](message);
      }
    }
  }

  let publisher = new Publisher();

  publisher.addSubscriber(message => {
    console.log(`A: ${message}`);
  });

  publisher.addSubscriber(message => {
    console.log(`B: ${message}`);
  });

  publisher.notify('Test message');
}
