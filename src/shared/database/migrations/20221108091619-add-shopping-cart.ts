import { Migration } from '@mikro-orm/migrations';

const TABLE_NAME = 'shopping_cart';

export class CreateShoppingCart extends Migration {
  async up(): Promise<void> {
    const knex = this.getKnex();

    const createShoppingCartTable = knex.schema.createTable(
      TABLE_NAME,
      (table) => {
        table.increments('id');
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

    this.addSql(createShoppingCartTable.toQuery());
  }

  async down(): Promise<void> {
    const knex = this.getKnex();

    this.addSql(knex.schema.dropTable(TABLE_NAME).toQuery());
  }
}
