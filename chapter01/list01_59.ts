function reverse<T>(list: T[]): T[] {
  const reversedList: T[] = [];

  for (let i = (list.length - 1); i >= 0; i--) {
    reversedList.push(list[i]);
  }

  return reversedList
}

let letters = ['a', 'b', 'c', 'd'];
let reversedLetters = reverse(letters);
console.log(reversedLetters);
