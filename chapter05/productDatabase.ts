import { Product } from './product.ts'

export class ProductDatabase {
  constructor(private name: string, private version: number) {
    const openDatabaseRequest = indexedDB.open(this.name, this.version);
    openDatabaseRequest.onupgradeneeded = this.upgrade;
  }

  upgrade(event: Event) {
    const dbReq = <IDBOpenDBRequest>event.target;
    const db = <IDBDatabase>dbReq.result;

    const objectStore = 
      db.createObjectStore('products', { keyPath: 'productId' });

    objectStore.createIndex('name', 'name', { unique: false });
    objectStore.transaction.oncomplete = () => {

      const products = [
        new Product(1, 'My first product'),
        new Product(2, 'My second product'),
        new Product(3, 'My third product'),
      ]

      const productStore =
        db.transaction('products', 'readwrite').objectStore('products');
      products.forEach(product => productStore.add(product))
    };
  }

  getProduct(productId: number, callback: (result: Product) => void) {
    const openDatabaseRequest = indexedDB.open(this.name, this.version);

    openDatabaseRequest.onsuccess = () => {
      const db = openDatabaseRequest.result;
      const productStore = db.transaction(['products']).objectStore('products');
      const query = productStore.get(productId);
      query.onsuccess = () => {
        callback(query.result);
      };
    };
  }

  addProduct(product: Product) {
    const openDatabaseRequest = indexedDB.open(this.name, this.version);

    openDatabaseRequest.onsuccess = () => {
      const db = openDatabaseRequest.result;

      const productStore = 
        db.transaction('products', 'readwrite').objectStore('products');

      productStore.add(product);
    };
  }

  deleteProduct(productId: number) {
    const openDatabaseRequest = indexedDB.open(this.name, this.version);

    openDatabaseRequest.onsuccess = () => {
      const db = openDatabaseRequest.result;

      const productStore =
        db.transaction('products', 'readwrite').objectStore('products');

      productStore.delete(productId);
    };
  }

}
