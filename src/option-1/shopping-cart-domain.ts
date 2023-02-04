import { Price } from './price.value-object';
import ShoppingCartItem from './shopping-cart-item.entity';
import ShoppingCart from './shopping-cart.entity';

class ShoppingCartDomain {
  private _shoppingCart: ShoppingCart;

  constructor(shoppingCart?: ShoppingCart) {
    this._shoppingCart = shoppingCart || new ShoppingCart();
  }

  addItem(name: string, { price, currency }: Price) {
    const shoppingCartItem = new ShoppingCartItem(name, price, currency);
    this._shoppingCart.items.add(shoppingCartItem);
    this._shoppingCart.updatedAt = new Date();
  }

  get entity(): ShoppingCart {
    return this._shoppingCart;
  }
}

export default ShoppingCartDomain;
