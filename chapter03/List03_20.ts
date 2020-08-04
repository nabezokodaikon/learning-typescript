module List03_20 {

  type Constructor<T = {}> = new (...args: any[]) => T;

  function sings<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
      sing() {
        console.log('Shinging');
      }
    }
  }

  function dances<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
      dance() {
        console.log('Dancing');
      }
    }
  }

  function acts<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
      act() {
        console.log('Acting');
      }

      name: string = 'jiro';
    }
  }

  class User {
    name = 'taro';
  }

  const Sings = sings(User);
  const a = new Sings();
  a.sing();

  const Dances = dances(Sings);
  const b = new Dances();
  b.sing();
  b.dance();

  const Acts = acts(Dances);
  const c = new Acts();
  c.sing();
  c.dance();
  c.act(); 
  console.log(c.name);
}
