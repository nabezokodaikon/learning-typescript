interface Device extends Event {
  initEvent(
    type: string,
  ): void
}

declare const Device: {
  prototype: Device;
  new(): Device;
};

console.log(new Device());
