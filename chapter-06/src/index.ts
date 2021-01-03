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
