import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Tab from 'App/Models/Tab'
//import Database from '@ioc:Adonis/Lucid/Database'
export default class TabsController {
    public async insert1({request}:HttpContextContract){
        let tab = new Tab()
        tab.id = request.input('id')
        tab.name = request.input('name')
        tab.save()
        

        return "Successfully Inserted" + tab
        
        }
        
        public async read(){
        
            return await Tab.all()
            
            }

        public async update(){
          const user=await Tab.findByOrFail('id',4)
          user.name='revin'
           await user.save()
           return Tab.all()
        }
        
        public async delete(){
            const user=await Tab.findByOrFail('id',4)
             user.delete()
             await user.save()
             return Tab.all()
          }
            
}
