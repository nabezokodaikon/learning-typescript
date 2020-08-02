class DomainId<T> {
  constructor(public id: T) {}

  get value(): T {
    return this.id;
  }
}

class OrderId extends DomainId<number> {
  constructor(public orderIdValue: number) {
    super(orderIdValue)
  }
}
