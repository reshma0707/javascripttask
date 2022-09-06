<template>
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
      v-model="row"
      label="select gender"
    >
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
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v =>/![^a-zA-Z]/.test(v) || 'Enter only alphabets',
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
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
            const details = {
            name : this.name,
            email : this.email,
            gender :this.gender,
            select: this.select,
            checkbox: this.checkbox,
            row: this.row
          }
          console.log(JSON.stringify(details))
      },
    
     
    },
   
  }
  
</script>