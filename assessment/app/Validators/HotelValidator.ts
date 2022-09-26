import { schema} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HotelValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    hotelId : schema.number(),
    hotelName : schema.string(),
    doorNo: schema.number(),
    city : schema.string(),
    pincode : schema.number(),
    phoneNumber: schema.number(),

  })
 
}
