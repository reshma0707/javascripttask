import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Hotel extends BaseModel {
  @column({ isPrimary: true })
  public hotelId: number

  @column()
  public hotelName: string

  @column()
  public doorNo: number

  @column()
  public city: string
 
  @column()
  public pincode: number
 
  @column()
  public phoneNumber: number
}
