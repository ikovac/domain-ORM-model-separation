export class PriceLessThenZeroError extends Error {
  constructor() {
    super('Price can not be less than zero');
    this.name = this.constructor.name;
  }
}

export class CurrencyNotSupportedError extends Error {
  constructor() {
    super('Provided currency is not supported');
    this.name = this.constructor.name;
  }
}
