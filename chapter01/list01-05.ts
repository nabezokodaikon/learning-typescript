const name1: string = 'Steve';
const heightInCentimeters: number = 182.88;
const isActive: boolean = true;

const names: string[] = ['James', 'Nick', 'Rebeca', 'Lily'];

let sayHello: (name: string) => string;

sayHello = function(name: string) {
  return `Hello ${name}`;
}

let person: { name: string; heightInCentimeters: number; };

person = {
  name: 'Mark',
  heightInCentimeters: 183
};



