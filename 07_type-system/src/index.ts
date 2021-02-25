{
  const num: number = 123;
  function identity(num: number): number {
    return num;
  }
}

{
  let num: number;
  let str: string;
  let bool: boolean;

  num = 123;
  num = 123.456;
}

{
  let boolArray: boolean[];
  boolArray = [true, false];
  console.log(boolArray[0]);
  console.log(boolArray.length)
}

{
  interface Name {
    first: string;
    second: string;
  }

  let name: Name;
  name = {
    first: 'John',
    second: 'Doe',
  };
  console.log(name);
}

{
  let name: {
    first: string,
    second: string,
  }
  name = {
    first: 'John',
    second: 'Doe'
  }
  console.log(name);
}

{
  let num: number;
  let str: string;
  // num = null;
  // str = undefined;
}

{
  function reverse<T>(items: T[]): T[] {
    const toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
      toreturn.push(items[i])
    }
    return toreturn;
  }

  const sample = [1, 2, 3];
  const reversed = reverse(sample);
  console.log(reversed);
}

{
  function formatCommlandline(command: string[]|string) {
    let line = '';
    if (typeof command === 'string') {
      return command.trim();
    } else {
      return command.join(' ').trim();
    }
  }

  console.log(formatCommlandline('abc'));
  console.log(formatCommlandline(['a', 'b', 'c']));
}

{
  function extend<T, U>(first: T, second: U): T & U {
    return { ...first, ...second };
  }

  const x = extend({ a: 'hello' }, { b: 42 });
  console.log(`${x.a} ${x.b}`);
}

{
  type StrOrNum = string|number;

  let sample: StrOrNum;
  sample = 123;
  console.log(sample);
  sample = '123';
  console.log(sample);
}
