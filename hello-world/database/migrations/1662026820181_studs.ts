import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'studs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name')
      table.integer('department_id').references('department_id').inTable('departments')
      table.string('department_name')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
