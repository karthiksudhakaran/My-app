import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import foodList from './components/foodList.vue'
import header from './components/header.vue' 
Vue.component('Header', header); 
Vue.component('foodList', foodList);
window.axios = require('axios');
new Vue({
  el: '#app',
  render: h => h(App)
})
