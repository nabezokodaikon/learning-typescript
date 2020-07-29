{
  const getAverage = (a: number, b: number, c?: number): string => {
    let total = a;
    let count = 1; 

    total += b;
    count++;

    if (c !== undefined) {
      total += c;
      count ++;
    }

    const average = total / count;
    return `The average is ${average}`
  };

  console.log(getAverage(1, 2));
  console.log(getAverage(1, 2, 3));
}
