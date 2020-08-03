module list02_13 {

  class C1 {

    constructor(public name: string) {}

    show(hint?: string) {
      return 1;
    }
  }

  class C2 {
    constructor(public name: string) {}

    show(hint: string = 'default') {
      return Math.floor(Math.random() * 10);
    }
  }

  class C3 {
    constructor(public name: string) {}

    show() {
      return <any> 'Dynamic';
    }
  }

  const T4 = {
    name: '',
    show() {
      return 1;
    }
  };

  const c1 = new C1('name1');
  const c2 = new C2('name2');
  const c3 = new C3('name3');

  const arr: C1[] = [c1, c2, c3, T4];

  arr.forEach(i => console.log(i.show()));
}
