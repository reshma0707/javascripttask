import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Form extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public name:string
  @column()
  public email:string
  @column()
  public gender:string
  @column()
  public city:string
  @column()
  public checkbox:boolean
  
}
