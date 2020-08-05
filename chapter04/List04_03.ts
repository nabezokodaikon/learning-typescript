let scope = 1;

{
  let scope = 2;
  console.log(`Inner: ${scope}`);
}

console.log(`Outer: ${scope}`);
