/// <reference lib="dom" />

module List04_13 {

  class ClickLogger {
    constructor() {
      document.addEventListener('click', this.eventListener);
    }

    eventListener(e: Event) {
      const phase = e.eventPhase;
      const tag = (<HTMLElement>e.target).nodeName;
      console.log(`Click event in phase ${phase} detected on element ${tag} by ClickLogger`);
    }

  }

  const clickLogger = new ClickLogger();
}
