{
  class RandomHandler {}
  class ReverseHandler {}
  class Handler {}

  class HandlerFactory {
    getHandler(type: 'Random'): RandomHandler;
    getHandler(type: 'Reversed'): ReverseHandler;
    getHandler(type: string): Handler;
    getHandler(type: string): Handler {
      switch (type) {
        case 'Random':
          return new RandomHandler();
        case 'Reversed':
          return new ReverseHandler();
        default:
          return new Handler()
      }
    }
  }

  const handler = new HandlerFactory();
  console.log(handler.getHandler('abc'));
}
