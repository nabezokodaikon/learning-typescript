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
