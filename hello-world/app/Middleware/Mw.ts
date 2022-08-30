import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { appKey } from 'Config/app'

export default class Mw {
  public async handle({request,response}: HttpContextContract, next: () => Promise<void>) {
  const rand= request.header('appkey')
    // code for middleware goes here. ABOVE THE NEXT CALL
  if (appKey!=rand){
    return response.status(404)
  }
    await next()
  }
}
