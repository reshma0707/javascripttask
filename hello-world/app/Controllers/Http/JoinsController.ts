 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import deptValidator from 'App/Validators/DepartmentValidator';
 import studentValidator from 'App/Validators/StudentValidator';
import departments from 'App/Models/Department';
import studs from "App/Models/Stud";

export default class JoinsController {
       

    // data insert to department table   
    public async insertdept({request}:HttpContextContract){
        const deptVal = await request.validate(deptValidator)
        let department = new departments()
        department.departmentId = deptVal['departmentId']
        department.departmentName = deptVal['departmentName']
        department.hod = deptVal['hod']
        department.save()
    
    return "Successfully Inserted" 
    }

    // data insert to students table
    public async insertstuds({request}:HttpContextContract){
        const studsInput = await request.validate(studentValidator)
        const students = new studs()
        students.id = studsInput['id']
        students.name = studsInput['name']
        students.departmentId = studsInput['departmentId']
        students.departmentName = studsInput['departmentName']
        students.save()
    
        return "Successfully Inserted" 
        }



}
