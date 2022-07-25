import Vue from 'vue'
import App from './App.vue'
import MovieList from '@/components/MovieList.vue'
import router from './routes/index.js'

Vue.component('MovieList', MovieList)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
