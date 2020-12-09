{
  enum DiscFlags {
    None = 0,
    Drive = 1,
    Influence = 2,
    Steadiness = 4,
    Conscientiousness = 8,
  }

  const personality = DiscFlags.Drive | DiscFlags.Conscientiousness;

  const hadD = (personality & DiscFlags.Drive) == DiscFlags.Drive;
  console.log(hadD);

  const hasI = (personality & DiscFlags.Influence) == DiscFlags.Influence;
  console.log(hasI);

  const hasS = (personality & DiscFlags.Steadiness) == DiscFlags.Steadiness;
  console.log(hasS);

  const hasC = (personality & DiscFlags.Conscientiousness) == DiscFlags.Conscientiousness;
  console.log(hasC);
}
