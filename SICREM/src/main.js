import Vue from 'vue'
import Vuex from 'vuex'
import App from 'App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Auth from '@websanova/vue-auth'
import VueAuthHttp from '@websanova/vue-auth/drivers/http/axios.1.x'
import VueAuthRouter from '@websanova/vue-auth/drivers/router/vue-router.2.x'
import Vuelidate from 'vuelidate'

import Multiselect from 'vue-multiselect'
import vSelect from 'vue-select'
import { VTooltip } from 'v-tooltip'
import Notifications from 'vue-notification'
import vPagination from 'vue-plain-pagination'

import router from '@/router'
import store from '@/store/store'

import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/css/reset.css'
import '@/assets/css/animate.css'
import '@/assets/scss/global.scss'
import 'vue-select/dist/vue-select.css'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Componentes globais da aplicação
Vue.use(VueAxios, axios)
Vue.use(Vuelidate)
Vue.use(Vuex)

Vue.component('Multiselect', Multiselect)
Vue.component('VSelect', vSelect)
Vue.component('Vpagination', vPagination)
Vue.use(Notifications)

Vue.directive('tooltip', VTooltip)

Vue.config.productionTip = false

Vue.axios.defaults.baseURL = process.env.VUE_APP_ROOT_API
Vue.axios.defaults.headers.common['Content-Type'] =
	'application/x-www-form-urlencoded'

Vue.router = router

Vue.use(Auth, {
	auth: {
		request: function(req, token) {
			this.options.http._setHeaders.call(this, req, { 'sicrem-token': token })
		},
		response: function(res) {
			const headers = res.data
			return headers.token
		}
	},
	fetchData: { url: '/users/home', method: 'GET' },
	http: VueAuthHttp,
	router: VueAuthRouter,
	tokenDefaultName: 'sicrem-token',
	rolesVar: 'level',
	authRedirect: { path: '/' },
	forbiddenRedirect: { path: '/' },
	parseUserData: function(data) {
		return data
	},
	refreshData: {
		enabled: false
	},
	tokenExpired: function() {
		return false
	}
})

axios.interceptors.response.use(
	function(response) {
		return response
	},
	function(error) {
		return error.response
	}
)

new Vue({
	el: '#app',
	router,
	render: h => h(App),
	store
}).$mount('#app')
