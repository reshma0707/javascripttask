 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


import studs from "App/Models/Stud";
import departments from 'App/Models/Department';

export default class JoinsController {

    public async ins({request}:HttpContextContract){
        let tan = new studs()
        tan.id = request.input('id')
        tan.name = request.input('dept')
        tan.department = request.input('hod')
        tan.save()
        

        return "Successfully Inserted" 
        }
public async join(){
    const studentdetail = await studs.query().join('departments', 'studs.department', '=', 'departments.id')
        .select('studs.name')
        .select('departments.deptname')
        .select('departments.hod')
           
        return studentdetail
    }
}
