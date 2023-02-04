import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import ShoppingCartDomain from './option-1/shopping-cart-domain';
import ShoppingCart from './option-1/shopping-cart.entity';

@Injectable()
export class ShoppingCartRepository {
  constructor(
    @InjectRepository(ShoppingCart)
    private readonly shoppingCartRepository: EntityRepository<ShoppingCart>,
  ) {}

  async get(id: ShoppingCart['id']): Promise<ShoppingCartDomain> {
    const shoppingCart = await this.shoppingCartRepository.findOne(id);
    const shoppingCartDomain = new ShoppingCartDomain(shoppingCart);
    return shoppingCartDomain;
  }

  persistAndFlush(shoppingCart: ShoppingCartDomain) {
    return this.shoppingCartRepository.persistAndFlush(shoppingCart.entity);
  }

  flush() {
    return this.shoppingCartRepository.flush();
  }
}
