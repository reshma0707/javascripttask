import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Form from "App/Models/Form"

export default class FormsController {
    public async readForm(){
        try{
       const show = Form.query()
       return show 
        
        } 
        catch{
          return "Cannot read"
        }
      }

      public async insert({request}:HttpContextContract){
        try{
        const forms = new Form()
        forms.id = request.input('id')
        forms.name = request.input('name')
        forms.email= request.input('email')
        forms.gender= request.input('gender')
        forms.city= request.input('city')
        forms.checkbox= request.input('checkbox')
        forms.save()
    
        return "Successfully Inserted" 
        }
        catch{
            return "Not insterted"
        }
    }
 
    public async delete({request}:HttpContextContract){
        try{
          const user=await Form.findByOrFail('id',request.params().id)
           user.delete()
           await user.save()
           return Form.all()
          }
        catch{
          return "User not deleted!!"
        }
        }
    
}
