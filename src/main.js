import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import BootstrapVue from 'bootstrap-vue'
import VueFire from 'vuefire'
import swal from 'sweetalert';

//css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueFire)
const router = new VueRouter({
	mode:'history',
	routes
})

		new Vue({
		  el: '#app',
		  router,
		  render: h => h(App),
		})
