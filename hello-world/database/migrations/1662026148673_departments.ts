import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'departments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('department_id').primary()
      table.string('department_name')
      table.string('hod')
     
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
