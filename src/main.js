import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './assets/styles.css'
import * as jquery from 'jquery'
import VueAxios from "vue-axios";
import axios from "axios";


createApp(App).use(store).use(router).mount('#app')
Vue.prototype.jquery = jquery
Vue.use(VueAxios, axios)