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
      v-model="departmentId"
      label="Enter your dept id"
      required
    ></v-text-field>

    <v-text-field
      v-model="departmentName"
      label="departmentName"
      required
    ></v-text-field>
    
     <v-text-field
      v-model="hod"
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
          <th scope="col">departmentId</th>
          <th scope="col">departmentName </th>
          <th scope="col">hod</th>
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
Vue.use(VueAxios, axios)
var test
 export default {
      data: () => ({
      connect:'http://127.0.0.1:3333/searchDept',
      valid: true,
      departmentId:'',
      departmentName:'',
      hod:'',
      users:[],
      array:'',
      dialogDelete:false,
      pop:false,
      button:true,
      departments:'',
      word:undefined
      }),    
     async mounted(){
      await Vue.axios.get('http://127.0.0.1:3333/readDept').
            then((res)=>{
            this.departments=res.data;
          console.warn(res);
      })},  
    methods:{
       read(){
         this.mounted()
        },
      insert(){
            Vue.axios.post(`http://127.0.0.1:3333/insertDept`,{
            departmentId : this.departmentId,
            departmentName : this.departmentName,
            hod :this.hod
            })
            
            this.pop=false
        },
       deleteItem(department_id){
           Vue.axios.delete(`http://127.0.0.1:3333/deleteDept/${department_id}`)
             .then(response => {
             console.log(response);
          });
        },
     Search(word){
      console.log(word.data)
        this.departments=word.data
      },
   
      
      editItem(item) {
      this.button=false
      this.pop = true
      test = item
      this.departmentId = item.department_id
      this.departmentName = item.department_name
      this.hod = item.hod
    },
    async save() {
      this.button=true
      test.departmentId = this.department_id
      test.departmentName = this.department_name
      test.hod = this.hod
     
      await axios.patch(`http://127.0.0.1:3333/updateDept/${test.department_id}`, {
           department_name : this.departmentName,
           hod : this.hod
      })
      .then(response => {
          console.log(response);
        });
      this.pop=false
       this.$refs.departments.reset()
    },
    },
 }
 
</script>
