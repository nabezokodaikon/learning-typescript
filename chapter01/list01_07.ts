interface Monument {
  name: string;
  heightInMeters: number;
}

const monuments: Monument[] = [];

monuments.push({
  name: 'Status of Liberty',
  heightInMeters: 46,
});

monuments.push({
  name: 'Peter the Great',
  heightInMeters: 96,
});

monuments.push({
  name: 'Angel of the North',
  heightInMeters: 20,
});

const compareMonumentHeights = (a: Monument, b: Monument) => {
  if (a.heightInMeters > b.heightInMeters) {
    return -1;
  } else if (a.heightInMeters < b.heightInMeters) {
    return 1;
  } else {
    return 0;
  }
}

const monumentsOrderedByHeight = monuments.sort(compareMonumentHeights);
const tallestMonument = monumentsOrderedByHeight[0];
console.log(tallestMonument.name);
