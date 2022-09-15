<template>
    <div>
        <v-text-field label="search"  v-model="word" ></v-text-field>
        <v-btn @click="Search">
            Search
        </v-btn>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios)
export default {
    data() {
        return{
           word:'', 
            
        }
    },

    methods:{
        async Search() {
          
          let answer= {word:this.word}
          
          await Vue.axios.post(this.test,answer).then((res)=> {
             console.log(res.data)
            this.$emit('searchEmits', res);
          })
          
            this.word = ''
        
        },
    },
    props:{
    test:String,
    },
}
</script>