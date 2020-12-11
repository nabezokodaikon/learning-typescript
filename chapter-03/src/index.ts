function squareOf(n: number) {
  return n * n
}

console.log(squareOf(2))
// console.log(squareOf('z'))

let a: unknown = 30
console.log(a === 123)

// console.log(a + 10)
if (typeof a === 'number') {
  console.log(a + 10)
}
