import { LoadStrategy } from '@mikro-orm/core';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database.config';
import ShoppingCart from './option-1/shopping-cart.entity';
import entities from './shared/database/entities';
import { ShoppingCartController } from './shopping-cart.controller';
import { ShoppingCartRepository } from './shopping-cart.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        loadStrategy: LoadStrategy.JOINED,
        ...config.get('database'),
        entities,
      }),
    }),
    MikroOrmModule.forFeature([ShoppingCart]),
  ],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartRepository],
})
export class AppModule {}
