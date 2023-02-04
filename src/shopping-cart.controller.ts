import { Controller, Param, Post, Body } from '@nestjs/common';
import { Price } from './option-1/price.value-object';
import ShoppingCartDomain from './option-1/shopping-cart-domain';
import { ShoppingCartRepository } from './shopping-cart.repository';

type CreateShoppingItemDTO = {
  name: string;
  price: number;
  currency: string;
};

@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(private shoppingCartRepository: ShoppingCartRepository) {}

  @Post()
  async create() {
    const shoppingCart = new ShoppingCartDomain();
    await this.shoppingCartRepository.persistAndFlush(shoppingCart);
  }

  @Post(':id/items')
  async addItem(@Param() { id }, @Body() body: CreateShoppingItemDTO) {
    const shoppingCart = await this.shoppingCartRepository.get(+id);
    const { name, price, currency } = body;
    shoppingCart.addItem(name, new Price(price, currency));
    await this.shoppingCartRepository.flush();
  }
}
