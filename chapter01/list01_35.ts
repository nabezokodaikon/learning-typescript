interface NodeList {
  length: number;
  item(index: number): string;
  [index: number]: string;
}

const nl: NodeList = {
  length: 3,
  item: (i: number) => i.toString(),
};

nl[0] = 'hoge';

console.log(nl[0]);
