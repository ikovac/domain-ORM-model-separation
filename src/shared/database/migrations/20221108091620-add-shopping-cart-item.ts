import { Migration } from '@mikro-orm/migrations';

const TABLE_NAME = 'shopping_cart_item';

export class CreateShoppingCartItem extends Migration {
  async up(): Promise<void> {
    const knex = this.getKnex();

    const createShoppingCartItemTable = knex.schema.createTable(
      TABLE_NAME,
      (table) => {
        table.increments('id');
        table.string('name');
        table.float('price');
        table.string('currency');
        table.integer('shopping_cart_id');
        table.foreign('shopping_cart_id').references('shopping_cart.id');
        table
          .timestamp('created_at', { useTz: true })
          .notNullable()
          .defaultTo(knex.fn.now());
        table
          .timestamp('updated_at', { useTz: true })
          .notNullable()
          .defaultTo(knex.fn.now());
      },
    );

    this.addSql(createShoppingCartItemTable.toQuery());
  }

  async down(): Promise<void> {
    const knex = this.getKnex();

    this.addSql(knex.schema.dropTable(TABLE_NAME).toQuery());
  }
}
