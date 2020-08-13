class ApplicationError implements Error {
  constructor(public name: string, public message: string) {
    if (typeof console !== 'undefined') {
      console.log(`Creating ${this.name} ${message}`);
    }
  }

  toString() {
    return `${this.name}: ${this.message}`;
  }
}
