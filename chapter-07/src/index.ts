{
  function parse(birthday: string): Date | null {
    let date = new Date(birthday);
    if (!isValid(date)) {
      return null;
    }
    return date;
  }

  function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]'
      && !Number.isNaN(date.getTime());
  }

  // const stdin = process.openStdin();
  // stdin.addListener("data", input => {
    // if (input) {
      // let date = parse(input);
      // if (date) {
        // console.info('Date is ', date.toISOString());
      // } else {
        // console.error('Error parsing date for some reason');
      // }
    // }
  // });
}

{
  class InvalidDateFormatError extends RangeError {}
  class DateIsInTHeFutureError extends RangeError {}

  function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]'
      && !Number.isNaN(date.getTime());
  }

  /**
   * @throws {InvalidDateFormatError}
   * @throws {DateIsInTHeFutureError}
   */
  function parse(birthday: string): Date {
    const date = new Date(birthday);
    if (!isValid(date)) {
      throw new InvalidDateFormatError('Enter a date in the from YYYY/MM/DD');
    }
    if (date.getTime() > Date.now()) {
      throw new DateIsInTHeFutureError('Are you a timelord?');
    }
    return date
  }

  // try {
    // const date = parse('a2021/01/18');
    // console.info('Date is ', date.toISOString());
  // } catch (e) {
    // if (e instanceof InvalidDateFormatError) {
      // console.error(e.message);
    // } else if (e instanceof DateIsInTHeFutureError) {
      // console.info(e.message);
    // } else {
      // throw e;
    // }
  // }
}

{
  class InvalidDateFormatError extends RangeError {}
  class DateIsInTheFutureError extends RangeError {}

  function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]'
      && !Number.isNaN(date.getTime());
  }

  function parse(
    birthday: string
  ): Date | InvalidDateFormatError | DateIsInTheFutureError {
    const date = new Date(birthday)
    if (!isValid(date)) {
      return new InvalidDateFormatError('Enter a date in the from YYYY/MM/DD');
    }
    if (date.getTime() > Date.now()) {
      return new DateIsInTheFutureError('Are you a time lord?');
    }
    return date;
  }

  // const result = parse('a2021/01/18');
  // if (result instanceof InvalidDateFormatError) {
    // console.error(result.message);
  // } else if (result instanceof DateIsInTheFutureError) {
    // console.error(result.message);
  // } else {
    // console.info('Date is', result.toISOString());
  // }
}

{
  function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]'
      && !Number.isNaN(date.getTime());
  }

  function parse(birthday: string): Date[] {
    const date = new Date(birthday);
    if (!isValid(date)) {
      return [];
    }
    return [date];
  }

  function ask() {
    const result = '2001/01/01';
    if (result === null) {
      return [];
    }
    return [result];
  }

  function flatten<T>(array: T[][]): T[] {
    return Array.prototype.concat.apply([], array);
  }

  const result = flatten(ask()
    .map(parse))
    .map(date => date.toISOString());
  // console.log(result);
}

{
  interface Option<T> {
    flatMap<U>(f: (value: T) => None): None
    flatMap<U>(f: (value: T) => Option<U>): Option<U>
    getOrElse(value: T): T
  }
  class Some<T> implements Option<T> {
    constructor(private value: T) {}
    flatMap<U>(f: (value: T) => None): None
    flatMap<U>(f: (value: T) => Some<U>): Some<U>
    flatMap<U>(f: (value: T) => Option<U>): Option<U> {
      return f(this.value);
    }
    getOrElse(): T {
      return this.value;
    }
  }
  class None implements Option<never> {
    flatMap(): None {
      return this;
    }
    getOrElse<U>(value: U): U {
      return value;
    }
  }

  function Option<T>(value: null | undefined): None
  function Option<T>(value: T): Some<T>
  function Option<T>(value: T): Option<T> {
    if (value === null) {
      return new None;
    }
    return new Some(value);
  }

  const result = Option(6)
    .flatMap(n => Option(n * 3))
    .flatMap(n => new Some(n))
    .getOrElse();
  console.log(result);

  function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]'
      && !Number.isNaN(date.getTime());
  }

  function parse(birthday: string): Option<Date> {
    const date = new Date(birthday);
    if (!isValid(date)) {
      return new None();
    }
    return new Some(date);
  }

  function ask() {
    const result = '2001/01/01';
    if (result === null) {
      return new None();
    }
    return new Some(result);
  }

  // ask()
    // .flatMap(parse)
    // .flatMap(date => new Some(date.toISO)) 
}
