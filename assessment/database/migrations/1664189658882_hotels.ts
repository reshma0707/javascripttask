import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'hotels'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('hotel_id').primary()
      table.string('hotel_name')
      table.integer('door_no')
      table.string('city')
      table.integer('pincode')
      table.integer('phone_number')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
