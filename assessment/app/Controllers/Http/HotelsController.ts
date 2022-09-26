import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import hotels from 'App/Models/Hotel'
import HotelValidator from 'App/Validators/HotelValidator'
export default class HotelsController {

public async insertHotels({request}:HttpContextContract){
   
       const hotelVal = await request.validate(HotelValidator)
       let hotel = new hotels()
       hotel.hotelId = hotelVal['hotelId']
       hotel.hotelName = hotelVal['hotelName']
       hotel.doorNo= hotelVal['doorNo']
       hotel.city= hotelVal['city']
       hotel.pincode= hotelVal['pincode']
       hotel.phoneNumber= hotelVal['phoneNumber']
       await hotel.save() 
   }

 public async readHotels(){
    const show = hotels.query()
    return show 
 }
 public async deleteHotels({request}:HttpContextContract){
   
      const user=await hotels.findByOrFail('hotelId',request.params().hotelId)
       user.delete()
       await user.save()
       return hotels.all()
 }

 public async updateHotels({request}:HttpContextContract){
   
     const userone=await hotels.findOrFail(request.params().hotelId)
     const updateVal = await request.validate(HotelValidator)
     userone.hotelId =updateVal['hotelId']
     userone.hotelName =updateVal['hotelName']
     userone.doorNo=updateVal['doorNo']
     userone.city=updateVal['city']
     userone.pincode=updateVal['pincode']
     userone.phoneNumber= updateVal['phoneNumber']
        await userone.save()
        return hotels.all()
 }

 public async searchHotels({request}:HttpContextContract){
    const word = request.input("word")
    if (!(/^[0-9]/.test(word))){
    const userName= hotels.query()
    .where('hotelName',word).orWhere('city',word)
    return userName
    }
    else{
     const userName= hotels.query()
    .where('hotelId',word).orWhere('doorNo',word).orWhere('pincode',word).orWhere('phoneNumber',word)
    return userName
}
 }
 // sorting 
  public async sortAce(){
    const show = hotels.query().orderBy("hotelId","asc")
    return show 
   }
   public async sortDesc(){
    const show = hotels.query().orderBy("hotelId","desc")
    return show 
   }
   public async sortNameAce(){
    const show = hotels.query().orderBy("hotelName","asc")
    return show 
   }
   public async sortNamedesc(){
    const show = hotels.query().orderBy("hotelName","desc")
    return show 
   }
   public async sortCityAce(){
    const show = hotels.query().orderBy("city","desc")
    return show 
   }
   public async sortCityDesc(){
    const show = hotels.query().orderBy("city","desc")
    return show 
   }
   public async sortDoorAce(){
    const show = hotels.query().orderBy("doorNo","desc")
    return show 
   }
   public async sortDoorDesc(){
    const show = hotels.query().orderBy("doorNo","desc")
    return show 
   }
   public async sortPinAce(){
    const show = hotels.query().orderBy("pincode","desc")
    return show 
   }
   public async sortPinDesc(){
    const show = hotels.query().orderBy("pincode","desc")
    return show 
   }
}