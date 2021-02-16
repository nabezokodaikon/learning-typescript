declare const foo: Function

class MyClass {
  private ng3: RegExp | undefined
  public readonly ng1: boolean
  private ok1 = 1
  ok2 = !this.ng1
  constructor(ok3: string, ng1: boolean, ng3?: RegExp) {
    this.ng3 = ng3
    this.ng1 = ng1
  }
}
