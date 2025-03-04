import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bookmarks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.string('title').notNullable()
      table.string('url').notNullable()
      table.text('content').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}