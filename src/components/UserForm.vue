<template>
<div class="reshh">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  
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
      v-model="select"
      :items="items"
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
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

  
  </v-form>


  <v-table >
      <thead>
        <tr>
          <th scope="col">index </th>
          <th scope="col">name </th>
          <th scope="col">email </th>
          <th scope="col">gender</th>
          <th scope="col">select</th>
          <th scope="col">checkbox</th>
          <th> </th>

          
        </tr>
      </thead>
      <tbody>
         <tr
          v-for="(item,index) in resh" :key = "index">
          <td>{{ index+1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.select}}</td>
          <td>{{ item.checkbox}}</td>
          <td> <v-icon
              small
              color="error"
          @click="deleteItem(resh.item)"
            >
              delete
            </v-icon></td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

 <script>
  export default {
    data: () => ({
      valid: true,
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
      select: null,
      items: [
        'Chennai',
        'Coimbatore',
        'Madurai',
        'Trichy',
      ],
      checkbox: false,
       row: null,
       resh: [],
    }),

    methods: {
      validate () {
        const details = this.resh
        this.$refs.form.validate()
            this.resh.push({
            index : this.index,
            name : this.name,
            email : this.email,
            gender :this.gender,
            select: this.select,
            checkbox: this.checkbox,
            row: this.row
          })
       
          console.log(JSON.stringify(details))
      },
     
      deleteItem (item) {
      const index = this.resh.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.resh.splice(index, 1)
    },

    },
   
  }
  </script> 

  