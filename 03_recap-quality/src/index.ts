type IdDisplay = {
  id: string,
  display: string,
}

const list: IdDisplay[] = [
  {
    id: 'foo',
    display: 'Foo Select',
  },
  {
    id: 'bar',
    display: 'Bar Select'
  },
];

const fooIndex = list.map(i => i.id).indexOf('foo');
console.log(fooIndex);

import { Big } from 'big.js';

export const foo = new Big('11111');
export const bar = foo.plus(new Big('0.0001'));

const x: number = Number(bar.toString());
console.log(x);
