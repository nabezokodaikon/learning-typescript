enum Size {
  S,
  M,
  L,
  XL
}

let size = Size.S;
++size;
console.log(Size[size]);

size = Size.XL;
--size;
console.log(Size[size]);

size = Size.XL;
++size;
console.log(Size[size]);
