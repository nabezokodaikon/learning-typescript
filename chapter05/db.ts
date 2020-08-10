import { Product } from './product.ts';
import { ProductDatabase } from './productDatabase.ts';

const versionNumber = 1;
const db = new ProductDatabase('ExampleDatabase', versionNumber);

document.addEventListener('load', ev => {
  db.upgrade(ev);
});

const inputElement = <HTMLInputElement>document.getElementById('productId')!;
inputElement.addEventListener('keyup', _ev => {
  const productId = +inputElement.value;

  db.getProduct(productId, product => {
    document.getElementById('content')!.innerHTML = product ?
      `The result for product id: ${product.productId} is: ${product.name}` :
      'No result';
  });
});

document.getElementById('addButton')!.addEventListener('click', _ev => {
  const productId = +inputElement.value;
  const product = new Product(productId, `Data: ${Date.now()}`);
  db.addProduct(product);
});

document.getElementById('deleteButton')!.addEventListener('click', () => {
  const productId = +inputElement.value;
  db.deleteProduct(productId);
});
