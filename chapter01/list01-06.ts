interface Person {
  name: string;
  heightInCentimeters: number;
}

{
  const person: Person = {
    name: 'Mark',
    heightInCentimeters: 183,
  };

  console.log(person);
}
