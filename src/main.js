import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './assets/styles.css'

import * as jquery from 'jquery'
import VueAxios from "vue-axios";
import axios from "axios";



createApp(App).use(store).use(router).mount('#app')
Vue.prototype.jquery = jquery
Vue.use(VueAxios, axios)
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)