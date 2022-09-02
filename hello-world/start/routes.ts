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
Route.post('/update_dept','DepartmentsController.update_dept')
Route.get('/read_dept','DepartmentsController.read_dept')
Route.get('/join_one','StudentsController.join_one')
Route.post('/insertstuds','JoinsController.insertstuds')
Route.post('/getUser','StudentsController.getUser')
Route.post('/getUserName','StudentsController.getUserName')
