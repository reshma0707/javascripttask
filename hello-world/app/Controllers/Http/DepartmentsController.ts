import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import deptValidator from 'App/Validators/DepartmentValidator'
import departments from 'App/Models/Department'

export default class DepartmentsController {

    // TO INSERT DATA INTO departments TABLE 

    public async insert_dept({request}:HttpContextContract){
     try
       {
        const deptVal = await request.validate(deptValidator)
        let department = new departments()
        department.departmentId = deptVal['departmentId']
        department.departmentName = deptVal['departmentName']
        department.hod = deptVal['hod']
        department.save()
    
        return "Successfully Inserted" 
        }

     catch{
            return "Not inserted"
        }
        
    }


    // To read deparments table

    public async read_dept(){
        
        return await departments.all()
        
        }


    // To update deparments table

    public async update_dept(){
      const user=await departments.findByOrFail('department_id',4)
      user.hod='revin'
       await user.save()
       return departments.all()
    } 

    // To delete 


    public async delete_dept(){
        const user=await departments.findByOrFail('hod',"revin")
         user.delete()
         await user.save()
         return departments.all()
      }
}
