import axios from 'axios';
//import VueAxios from 'vue-axios';
// Vue.use(VueAxios,axios)
async function getData(){
  const result = await axios.get('http://127.0.0.1:3333/readDept')
  console.log(result)
  return result.data
}
 export {getData}