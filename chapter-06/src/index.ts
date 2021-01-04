{
  class Animal {}
  class Bird extends Animal {
    chirp() {}
  }
  class Crow extends Bird {
    caw() {}
  }

  function chirp(bird: Bird): Bird {
    bird.chirp()
    return bird
  }

  // chirp(new Animal())
  chirp(new Bird())
  chirp(new Crow())

  function clone(f: (b: Bird) => Bird): void {
    const parent = new Bird()
    const babyBird = f(parent)
    babyBird.chirp()
  }

  const birdToBird = (b: Bird) => b
  clone(birdToBird)

  const birdToCrow = (b: Bird) => new Crow()
  clone(birdToCrow)

  const birdToAnimal = (b: Bird) => new Animal()
  // clone(birdToAnimal)

  const animalToBird = (a: Animal) => new Bird()
  clone(animalToBird)

  const crowToBird = (a: Crow) => {
    a.caw()
    return new Bird()
  }
  // clone(crowToBird)
}

{
  let e = [1, {x: 2}] as const;
  // e[1].x = 2
}

{
  type Options = {
    baseURL: string
    cacheSize?: number
    tier?: 'prod' | 'dev'
  }

  class API {
    constructor(private options: Options) {}
  }

  new API({
    baseURL: 'https://api.mysite.com',
    tier: 'prod'
  });

  // new API({
    // baseURL: 'https://api.mysite.com',
    // badTier: 'prod'
  // });

  new API({
    baseURL: 'https://api.mysite.com',
    badTier: 'prod'
  } as Options);

  const badOptions = {
    baseURL: 'https://api.mysite.com',
    badTier: 'prod'
  }
  new API(badOptions)

  // const options: Options = {
    // baseURL: 'https://api.mysite.com',
    // badTier: 'prod'
  // };
  // new API(options)
}
