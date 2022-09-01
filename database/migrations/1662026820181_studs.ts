import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'studs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.integer('department').references('departments.id')
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
