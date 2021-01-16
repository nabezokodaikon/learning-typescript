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

  try {
    const date = parse('a2021/01/18');
    console.info('Date is ', date.toISOString());
  } catch (e) {
    if (e instanceof InvalidDateFormatError) {
      console.error(e.message);
    } else if (e instanceof DateIsInTHeFutureError) {
      console.info(e.message);
    } else {
      throw e;
    }
  }
}
