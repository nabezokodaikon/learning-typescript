{
  interface Monument {
    name: string;
    heightInMeters: number;
  }

  const monuments: Monument[] = [];

  monuments.push({
    name: 'Statue of Liberty',
    heightInMeters: 46,
    // location: 'USA'
  });

  monuments.push({
    name: 'Peter the Great',
    heightInMeters: 96,
  });

  monuments.push({
    name: 'Angel of the North',
    heightInMeters: 20,
  });

  function compareMonumentHeights(a: Monument, b: Monument) {
    if (a.heightInMeters > b.heightInMeters) {
      return -1;
    }
    if (a.heightInMeters < b.heightInMeters) {
      return 1;
    }
    return 0;
  }

  const monumentsOrderedByHeight = monuments.sort(compareMonumentHeights);

  const tallestMonument = monumentsOrderedByHeight[0];

  console.log(tallestMonument.name);
}
