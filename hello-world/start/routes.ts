/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
Route.group(()=>{
// Department table 
Route.get('/insertDept','DepartmentsController.readDept')
Route.get('/readDept','DepartmentsController.readDept')
Route.patch('/updateDept','DepartmentsController.updateDept')
Route.get('/deleteDept','DepartmentsController.readDept')
// Students Table 
Route.get('/insertStudents','StudentsController.readStudents')
Route.get('/readStudents','StudentsController.readStudents')
Route.post('/updateStudents','StudentsController.updateStudents')
Route.get('/joinStudentsDepartment','StudentsController.joinStudentsDepartment')
Route.post('/getUser','StudentsController.getUser')
Route.post('/getUserName','StudentsController.getUserName')
Route.post('/getUserNameList','StudentsController.getUserNameList')
Route.delete('/deleteStudents','StudentsController.delete_Students')}).middleware('Mw')