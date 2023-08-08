import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'


const store = createStore({
    state () {
      return {
        name:'',
        number : '',
        email : '',
        address : ''
      }
    },
    mutations: {
        savedata(){
            console.log(store.state)
        }
    }
  })


createApp(App).use(store).mount('#app')
