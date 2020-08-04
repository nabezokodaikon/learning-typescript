module list03_13 {

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
      console.log('Soaping car');
      console.log('Rinsing car');
    }
  }

  const a = new ExecutiveWheelCleaning();
  a.cleanWheels();
}
