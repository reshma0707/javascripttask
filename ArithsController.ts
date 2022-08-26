// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ArithsController {

   public async add({request}){
    var a = request.input('a')
    var b = request.input('b')

            return Number(a) + Number(b);
          
    }
    public async sub({request}){
        var a = request.input('a')
        var b = request.input('b')
    
                return Number(a) - Number(b);
              
        }

        public async mul({request}){
            var a = request.input('a')
            var b = request.input('b')
           
                 return Number(a) * Number(b);
                     
               }
               public async div({request}){
                var a = request.input('a')
                var b = request.input('b')
               
                     return Number(a) / Number(b);
                         
                   }
}
