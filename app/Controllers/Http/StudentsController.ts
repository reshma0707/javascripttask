 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import studs from 'App/Models/Stud'
import Database from '@ioc:Adonis/Lucid/Database'
import studentValidator from 'App/Validators/StudentValidator'


export default class StudentsController {
   

// To Insert
   public async insertStudents({request}:HttpContextContract){
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


    // To read student table
    public async readStudents(){
      try{
     const show = studs.query()
     return show 
      
      } 
      catch{
        return "Cannot read"
      }
    }


    // To delete 
    public async deleteStudents({request}:HttpContextContract){
      try{
        const user=await studs.findByOrFail('id',request.input('id'))
         user.delete()
         await user.save()
         return studs.all()
        }
      catch{
        return "User not deleted!!"
      }
      }

    // To update students table
    public async updateStudents(){

      const user = await studs.findByOrFail('id',3108)
      user.name="gem"
      await user.save()
      return user.all()
     
     }
    // joins
    public async joinStudentsDepartment(){

        const data = await studs.query()
        .join('departments', 'studs.department_id', '=', 'departments.department_id').select('studs.*').where('hod','revin')
        return data
    
     }   
    
   // user queriescd
   public async getUser({request}:HttpContextContract){

    try{
    const user=await studs.findOrFail(request.input('id'))
    return user
    }
    catch{
      return "user not found"
    }
   }
  
   public async getUserName({request}:HttpContextContract){

    try{
    const userName= await studs.findByOrFail('name',request.input("name"))
     return userName
    }
    catch{
      return "user name not found"
    }
   }
   
   public async getUserNameList({request}:HttpContextContract){

   try{
    const userName= await Database.from('studs').select('studs.name').where('department_name',request.input("departmentName"))
    return userName
   }
   catch{
    return "students not found"
   }
  }

}




