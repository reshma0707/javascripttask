import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import searchTable from './components/searchTable.vue'
Vue.config.productionTip = false
Vue.filter('trimming',function(a){
  if (a.length>10){
     return `${a.slice(0,10)}..................`
  }
  else
    return a
})
Vue.component('searchTable',searchTable)
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
