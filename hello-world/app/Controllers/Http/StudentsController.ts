 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import studs from 'App/Models/Stud'

import studentValidator from 'App/Validators/StudentValidator'


export default class StudentsController {
   
    public async insert_studs({request}:HttpContextContract){
        try{
        const studsInput = await request.validate(studentValidator)
        const students = new studs()
        students.id = studsInput['id']
        students.name = studsInput['name']
        students.departmentId = studsInput['departmentId']
        students.departmentName = studsInput['departmentName']
        students.save()
    
        return "Successfully Inserted" 
        }
        catch{
            return "Not insterted"
        }
    }
      // To read studs table

    public async read_studs(){
        
      return await studs.all()
        
    }


    // To update studs table
    public async update_dept(){
        const user=await studs.findByOrFail('department_id',4)
        user.name='revin'
         await user.save()
         return studs.all()
      } 

    // To delete 


    public async delete_studs(){
        const user=await studs.findByOrFail('id',3101)
         user.delete()
         await user.save()
         return studs.all()
      }


    // joins
    
    public async join_one(){
        const data = await studs.query()
        .join('departments', 'studs.department_id', '=', 'departments.department_id')
      //  .select('studs.*')
        .select('departments.*')
       .select('studs.*')
      // .select(())
        return data
    }   
    
   // user queries
   public async getUser({request}:HttpContextContract){
    const user=await studs.findOrFail(request.input('id'))
     return user
   }
  
   public async getUserName({request}:HttpContextContract){
    
    const userName= await studs.findBy('name',request.input("name"))
     return userName
   }

}



