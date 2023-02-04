import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import BaseEntity from '../shared/database/base.entity';
import ShoppingCart from './shopping-cart.entity';

@Entity()
class ShoppingCartItem extends BaseEntity {
  @Property()
  name: string;

  @Property()
  price: number;

  @Property()
  currency: string;

  @ManyToOne({
    entity: () => ShoppingCart,
    serializer: (it) => it.id,
    serializedName: 'shoppingCartId',
  })
  shoppingCart: ShoppingCart;

  constructor(name: string, price: number, currency: string) {
    super();
    this.name = name;
    this.price = price;
    this.currency = currency;
  }
}

export default ShoppingCartItem;
