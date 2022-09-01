
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Department from './Department'

export default class Stud extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name:string

  @column()
  @hasOne(() => Department)
  public department: HasOne<typeof Department>

}
