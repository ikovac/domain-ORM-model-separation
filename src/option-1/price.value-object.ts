import { CurrencyNotSupportedError, PriceLessThenZeroError } from './errors';

const DOLLAR = '$';

export class Price {
  price: number;
  currency: string;

  constructor(price: number, currency: string) {
    if (price < 0) throw new PriceLessThenZeroError();
    if (currency !== DOLLAR) throw new CurrencyNotSupportedError();
    this.price = price;
    this.currency = currency;
  }
}
