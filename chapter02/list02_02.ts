module list02_02 {

  interface ObjectId {
    getValue(): number;
  }

  class CustomerId {
    constructor(private id: number) {}

    getValue() {
      return this.id;
    }
  }

  class ProductId {
    constructor(private id: number) {}

    getValue() {
      return this.id;
    }
  }

  class Example {
    static avoidAccidentalEquivalence(id: CustomerId) {
    }

    static useEquivalence(id: ObjectId) {
    }
  }

  const customId = new CustomerId(1);
  const productId = new ProductId(5);

  Example.avoidAccidentalEquivalence(customId);
  // Example.avoidAccidentalEquivalence(productId)
  Example.useEquivalence(customId);
  Example.useEquivalence(productId);

}
