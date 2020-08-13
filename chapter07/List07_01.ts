const errorOnThree = (input: number) => {
  if (input === 3) {
    throw new Error('Three is not allowd');
  }
};

errorOnThree(3);
