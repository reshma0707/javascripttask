<template>
   <v-app>
      <v-form 
    ref="form"
    v-model="valid"
    lazy-validation width="800"
  >
    <v-dialog 
  v-model="pop" 
    > 
  <template v-slot:activator="{ on,attr }">
  <v-flex text-right align-right>
    <v-btn
    elevation='5'
        color="primary"
        v-bind="attr"
        v-on="on"
      >
        <h3><v-icon>ADD</v-icon></h3>
      </v-btn>
    </v-flex>     
      </template>
  <v-card text class="dark" >
    <v-text-field
      v-model="hotelName"
      label="Enter your hotel name"
      required
    ></v-text-field>

    <v-text-field
      v-model="doorNo"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="city"
      label="city"
      required
    ></v-text-field>
    
     <v-text-field
      v-model="pincode"
      label="pincode"
      required
    ></v-text-field>

     <v-text-field
      v-model="phoneNumber"
      label="Phone number"
      required
    ></v-text-field>

   

    <v-btn
      :disabled="!valid" 
      v-if="button"
      color="success"
      class="mr-4"
      @click="insert"
    >
      Validate
    </v-btn>
     <v-btn
     v-else
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="save"
    >
      save
    </v-btn>
      </v-card> 
      </v-dialog> 
    </v-form>
   <v-simple-table >
     <template v-slot:default>
      <thead>
        <tr>
          <th scope="col">hotel_id</th>
          <th scope="col">hotel_name </th>
          <th scope="col">doorNo</th>
          <th scope="col">city</th>
          <th scope="col">pincode</th>
          <th scope="col">Phonenumber</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
         <tr
          v-for="item in hotels" :key="item.id">
          <td>{{ item.hotel_id}}</td>
          <td>{{ item.hotel_name}}</td>
          <td>{{ item.door_no}}</td>
          <td>{{ item.city}}</td>
          <td>{{ item.pincode}}</td>
          <td>{{ item.phone_number}}</td>
          <td> <v-btn
              small
              class="rm-2"
              color="red"
             @click="deleteItem(item.id)"
            >
              delete
            </v-btn>

            <v-btn
              small
              class="rm-2"
              color="red"
             @click="editItem(item)"
            >
              edit
            </v-btn>
  
          </td>
        </tr>
      </tbody>
        </template>
    </v-simple-table>
     </v-app>
</template>

<script>

import  Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
      data: () => ({
      valid: true,
      htl:{
        hotelId:'',
        hotelName:'',
        doorNo:'',
        city:'',
        pincode:'',
        phoneNumber:''
      },
      users:[],
      array:'',
      dialogDelete:false,
      pop:false,
      button:true,
      hotels:'',
      word:undefined
      }),    
     async mounted(){
      await Vue.axios.get('http://127.0.0.1:3333/readHotels').
            then((res)=>{
            this.hotels=res.data;
          console.log(res);
      })},  
    methods:{
       read(){
         this.mounted()
        },
    },
 }
</script>