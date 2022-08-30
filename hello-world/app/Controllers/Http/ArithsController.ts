import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Tab from 'App/Models/Tab';
import Database from '@ioc:Adonis/Lucid/Database'
import ValiValidator from 'App/Validators/ValiValidator';
import {schema} from '@ioc:Adonis/Core/Validator'
export default class ArithsController {

   public async add({request}:HttpContextContract){
    const resh = await request.validate(ValiValidator)
    const a:number = resh['num1']
    const b:number = resh['num2']

            return a+b
          
    }
    public async sub({request}:HttpContextContract){
     const resh = await request.validate(ValiValidator)
     const a:number = resh['num1']
     const b:number = resh['num2']
 
             return a-b
           
     }
     public async div({request}:HttpContextContract){
          const resh = await request.validate(ValiValidator)
          const a:number = resh['num1']
          const b:number = resh['num2']
      
                  return a/b
                
          }
          public async mul({request}:HttpContextContract){
               const resh = await request.validate(ValiValidator)
               const a:number = resh['num1']
               const b:number = resh['num2']
           
                       return a*b
                     
               }
          
                
}
