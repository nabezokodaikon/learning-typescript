module list03_17 {

  interface WheelCleaning {
    cleanWheels(): void;
  }

  class BasicWheelCleaning implements WheelCleaning {
    cleanWheels() {
      console.log('Soaping Wheel');
      console.log('Brushing Wheel');
    }
  }

  class ExecutiveWheelCleaning extends BasicWheelCleaning {
    cleanWheels() {
      super.cleanWheels();
      console.log('Soaping Wheel');
      console.log('Rinsing Wheel');
    }
  }

  interface BodyCleaning {
    cleanBody(): void;
  }

  class BasicBodyCleaning implements BodyCleaning {
    cleanBody() {
      console.log('Soaping Car');
      console.log('Brushing Car');
    }
  }

  class ExecutiveBodyCleaning extends BasicBodyCleaning {
    cleanWheels() {
      super.cleanBody();
      console.log('Waxing Car');
      console.log('Blow drying Car');
    }
  }

  interface ValetFactory {
    getWheelCleaning(): WheelCleaning;
    getBodyCleaning(): BodyCleaning;
  }

  class BronzeWashFactory implements ValetFactory {
    getWheelCleaning() {
      return new BasicWheelCleaning();
    }

    getBodyCleaning() {
      return new BasicBodyCleaning();
    }
  }

  class SilverWashFactory implements ValetFactory {
    getWheelCleaning() {
      return new BasicWheelCleaning();
    }

    getBodyCleaning() {
      return new ExecutiveBodyCleaning();
    }
  }

  class GoldWashFactory implements ValetFactory {
    getWheelCleaning() {
      return new ExecutiveWheelCleaning();
    }

    getBodyCleaning() {
      return new ExecutiveBodyCleaning();
    }
  }

  class CarWashProgram {
    constructor(private cleaningFactory: ValetFactory) {}

    runWash() {
      const wheelWash = this.cleaningFactory.getWheelCleaning();
      wheelWash.cleanWheels();

      const bodyWash = this.cleaningFactory.getBodyCleaning();
      bodyWash.cleanBody();
    }
    
  }

  const a = new CarWashProgram(new GoldWashFactory());
  a.runWash();
}
