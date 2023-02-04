import { Collection, Entity, OneToMany, Property } from '@mikro-orm/core';
import BaseEntity from '../shared/database/base.entity';
import ShoppingCartItem from './shopping-cart-item.entity';

@Entity()
class ShoppingCart extends BaseEntity {
  @OneToMany({
    entity: () => ShoppingCartItem,
    mappedBy: (it) => it.shoppingCart,
    eager: true,
  })
  items = new Collection<ShoppingCartItem>(this);
}

export default ShoppingCart;
