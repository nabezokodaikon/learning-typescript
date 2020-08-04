module list03_03 {

  interface ControlPanel {
    startAlarm(message: string): any;
  }

  interface Sensor {
    check(): any;
  }

  class MasterControlPanel {
    private sensors: Sensor[] = [];

    constructor() {
      this.sensors.push(new HeatSensor(this));
    }

    start() {
      for (let i = 0; i < this.sensors.length; i++) {
        this.sensors[i].check();
      }
      window.setTimeout(() => this.start(), 1000);
    }

    startAlarm(message: string) {
      console.log(`Alarm! ${message}`);
    }
  }

  class HeatSensor {
    private upperLimit = 38;
    private sensor = {
      read: () => {
        return Math.floor(Math.random() * 100);
      }
    };

    constructor(private controlPanel: ControlPanel) {}

    check() {
      if (this.sensor.read() > this.upperLimit) {
        this.controlPanel.startAlarm('Overheating!')
      }
    }
  }

  const cp = new MasterControlPanel();
  cp.start();
}
