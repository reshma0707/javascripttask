
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
//import Department from './Department'

export default class Stud extends BaseModel {
  all() {
    throw new Error('Method not implemented.')
  }
  @column({ isPrimary: true })
  public id: number

  @column()
  public name:string

  @column()
  public departmentId:number
   

  @column()
  public departmentName:string
}
