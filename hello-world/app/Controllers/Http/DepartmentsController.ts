import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import deptValidator from 'App/Validators/DepartmentValidator'
import departments from 'App/Models/Department'

export default class DepartmentsController {

    // TO INSERT DATA INTO departments TABLE 
    public async insertDept({request}:HttpContextContract){
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
    public async readDept(){
        const show = departments.query()
        return show 
        }


    // To update deparments table
    public async updateDept(){
        try{
      const user=await departments.findByOrFail('department_id',4)
       user.hod='reshma'
       await user.save()
       return departments.all()
        }
        catch{
            return "error"
        }
    } 

    // To delete 
    public async deleteDept(){
        const user=await departments.findByOrFail('hod',"revin")
         user.delete()
         await user.save()
         return departments.all()
      }
}
