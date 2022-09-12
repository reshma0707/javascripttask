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
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Enter your name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="city"
      :items="it"
      :rules="[v => !!v || 'select one city']"
      label="Select your city"
      required
    ></v-select>

    <v-radio-group
      v-model="gender"
      label="select gender"
    row>
      <v-radio
        label="Male"
        value="male"
      ></v-radio>
      <v-radio
        label="Female"
        value="female"
      ></v-radio>
    </v-radio-group>


    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      id:checkbox
      label="Are you interested to join?"
      required
    ></v-checkbox>

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
     v-if="!button"
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
          <th scope="col">name </th>
          <th scope="col">email </th>
          <th scope="col">gender</th>
          <th scope="col">city</th>
          <th scope="col">checkbox</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
         <tr
          v-for="item in forms" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.city}}</td>
          <td>{{ item.checkbox}}</td>
          <td> <v-btn
              small
              class="rm-2"
              color="red"
             @click="deleteItem(item.id)"
            >
              delete
            </v-btn>
          <v-icon
              small
              color="error"
          @click="changeItem(item.id)"
            >
              edit
            </v-icon>
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
      editedIndex: -1,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v =>/^[a-zA-Z]+$/.test(v) || 'Enter only alphabets',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      city: '',
      it: [
        'Chennai',
        'Coimbatore',
        'Madurai',
        'Trichy',
      ],
      checkbox: false,
       row: null,
      users:[],
      array:'',
      dialogDelete:false,
      pop:false,
      button:true,
      forms:undefined
      }),    
      mounted(){
     Vue.axios.get("http://127.0.0.1:3333/read").
            then((res)=>{
            this.forms=res.data;
            console.warn(res.data);
      })},  
      methods: {
        read(){
            Vue.axios.get("http://127.0.0.1:3333/readForm").
            then((res)=>{
            this.forms=res.data;
            console.warn(res.data);
            })
        },
        insert(){
            
            Vue.axios.post("http://127.0.0.1:3333/insert",{
            name : this.name,
            email : this.email,
            gender :this.gender,
            city: this.city,
            checkbox: this.checkbox, 
            })
            
            this.pop=false

        },
      
        delete(id){
             Vue.axios.post(`http://127.0.0.1:3333/delete/${id}`)
             .then(response => {
             console.log(response);
          });
        },
        validate () {
        this.$refs.form.validate()
            this.users.push({
            index : this.index,
            name : this.name,
            email : this.email,
            gender :this.gender,
            city: this.city,
            checkbox: this.checkbox,
          })
          this.$refs.form.reset()
         
          //console.log(JSON.stringify(users))
        },
     deleteItem(id) {
       Vue.axios.delete(`http://127.0.0.1:3333/delete/${id}`)
             .then(response => {
             console.log(response);
          });
    },
  async changeItem (item) {
            const test = item
            this.pop = true,
            this.button=false,
            this.array = item
            this.index = item.index,
            this.name = item.name,
            this. email = item.email,
            this. gender =item.gender,
            this. city= item.city,
            this.checkbox= item.checkbox,
            await axios.put(`http://127.0.0.1:40193/updatedept/${test.id}`, {
            name: test.name,
            email:test.email,
            gender: test.gender,
            city: test.city,
            checkbox:test.checkbox


      })
    },
    save(){
        let get = this.users.findIndex(temp => temp.id == this.array.id)
          this.users[get].name = this.name
          this.users[get].email = this.email
          this.users[get].gender =this.gender
          this.users[get].city= this.city
          this.users[get].checkbox= this.checkbox
         this.button=true
    }
    }
 }
</script>