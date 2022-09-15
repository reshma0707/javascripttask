<template>
  <v-app>
 <div>
 <searchTable :test='connect' @searchEmits="Search($event)"/>

 </div>
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
      v-model="dpt.departmentId"
      label="Enter your dept id"
      required
    ></v-text-field>

    <v-text-field
      v-model="dpt.departmentName"
      label="departmentName"
      required
    ></v-text-field>
    
     <v-text-field
      v-model="dpt.hod"
      label="hod"
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
          <th scope="col">departmentId<v-btn  class="pa-2" @click="SortAsc"  darksmall color="primary">  <v-icon dark>  mdi-minus</v-icon></v-btn><v-btn  class="mx-1"  @click="SortDesc" darksmall color="primary">  <v-icon dark>  mdi-plus</v-icon></v-btn></th>
          <th scope="col">departmentName<v-btn  class="mr-1" @click="SortAscName"  darksmall color="primary">  <v-icon dark>  mdi-minus</v-icon></v-btn><v-btn  class="mx-1"  @click="SortDescName" darksmall color="primary">  <v-icon dark>  mdi-plus</v-icon></v-btn> </th>
          <th scope="col">hod<v-btn  class="mr-1" @click="SortAscHod"  darksmall color="primary">  <v-icon dark>  mdi-minus</v-icon></v-btn><v-btn  class="mx-1"  @click="SortDescHod" darksmall color="primary">  <v-icon dark>  mdi-plus</v-icon></v-btn></th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
         <tr
          v-for="item in departments" :key="item.departmentId">
          
          <td>{{ item.department_id}}</td>
          <td>{{ item.department_name }}</td>
          <td>{{ item.hod}}</td>
          <td> <v-btn
              small
              class="rm-2"
              color="red"
             @click="deleteItem(item.department_id)"
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
import {getData}  from '../components/service/opp.js'
Vue.use(VueAxios, axios)
var test
 export default {
      data: () => ({
      connect:`${process.env.VUE_APP_EE_URL}/searchDept`,
      valid: true,
      dpt:{departmentId:'',
      departmentName:'',
      hod:''},
      users:[],
      array:'',
      dialogDelete:false,
      pop:false,
      button:true,
      departments:'',
      word:undefined
      }),    
     mounted(){   
        getData()
            .then((res)=>{
            this.departments=res;
          console.warn(res);
      })},  
    methods:{
       read(){
         this.mounted()
        },
      insert(){
            Vue.axios.post(`${process.env.VUE_APP_EE_URL}/insertDept`,this.dpt)
            
            this.pop=false
        },
       deleteItem(department_id){
           Vue.axios.delete(`${process.env.VUE_APP_EE_URL}/${department_id}`)
             .then(response => {
             console.log(response);
          });
        },
     Search(word){
      console.log(word.data)
        this.departments=word.data
      },
      
    async SortAsc(){
       await  Vue.axios.get(`${process.env.VUE_APP_EE_URL}/SortAce`).
            then((res)=>{
            this.departments=res.data;
          console.log(res)});
        },
    async  SortDesc(){
       await Vue.axios.get(`${process.env.VUE_APP_EE_URL}/SortDesc`).
            then((res)=>{
            this.departments=res.data;
          console.log(res)})
        },
      async SortAscName(){
       await  Vue.axios.get(`${process.env.VUE_APP_EE_URL}/SortAceName`).
            then((res)=>{
            this.departments=res.data;
          console.log(res)});
        },
    async  SortDescName(){
       await Vue.axios.get(`${process.env.VUE_APP_EE_URL}/SortDescName`).
            then((res)=>{
            this.departments=res.data;
          console.log(res)})
        }, 
   async SortAscHod(){
       await  Vue.axios.get(`${process.env.VUE_APP_EE_URL}/SortAceHod`).
            then((res)=>{
            this.departments=res.data;
          console.log(res)});
        },
    async  SortDescHod(){
       await Vue.axios.get(`${process.env.VUE_APP_EE_URL}/SortDescHod`).
            then((res)=>{
            this.departments=res.data;
          console.log(res)})
        },
      editItem(item) {
      this.button=false
      this.pop = true
      test = item
      this.dpt.departmentId = item.department_id
      this.dpt.departmentName = item.department_name
      this.dpt.hod = item.hod
    },
    async save() {
      this.button=true
      test.departmentId = this.dpt.department_id
      test.departmentName = this.dpt.department_name
      test.hod = this.dpt.hod
     
      await axios.patch(`${process.env.VUE_APP_EE_URL}/${test.department_id}`,this.dpt)
      .then(response => {
          console.log(response);
        });
      this.pop=false
       this.$refs.departments.reset()
    },
    },
 }
 
</script>
