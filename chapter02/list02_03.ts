module List02_03 {

  class OrderedArray<T> {
    private items: T[] = [];

    constructor(private comparer?: (a: T, b: T) => number) {}

    add(item: T): void {
      this.items.push(item);
      this.items.sort(this.comparer);
    }

    getItem(index: number) : T | null {
      if (this.items.length > index) {
        return this.items[index];
      } else {
        return null;
      }
    }
  }

  const orderedArray: OrderedArray<number> = new OrderedArray<number>();

  orderedArray.add(5);
  orderedArray.add(1);
  orderedArray.add(3);

  const firstItem: number | null = orderedArray.getItem(5);
  console.log(firstItem);

}
