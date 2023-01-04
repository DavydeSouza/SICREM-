import Vue from 'vue'
import VueRouter from 'vue-router'

import loadTypes from './inc/loadTypes'
import resetShipFields from './inc/resetShipFields'
import resetUserFields from './inc/resetUserFields'

const MainLayout = () => import('@/components/layouts/Main')
const Login = () => import('@/components/views/auth/login')

const User = () => import('@/components/views/user/Index')

const ClientList = () => import('@/components/views/user/clients/List')
const CreateClient = () => import('@/components/views/user/clients/Create')

const UsersList = () => import('@/components/views/user/internals/List')
const UserCreate = () => import('@/components/views/user/internals/Create')

const Dashboard = () => import('@/components/views/dashboard/Index')
const DashboardExternal = () => import('@/components/views/dashboard/Externals')
const DashboardInternal = () => import('@/components/views/dashboard/Internals')

const Ship = () => import('@/components/views/ship/Index')
const ShipCreate = () => import('@/components/views/ship/Create')
const ShipHome = () => import('@/components/views/ship/Home')

const Scuba = () => import('@/components/views/scuba/Index')
const ScubaCreate = () => import('@/components/views/scuba/Create')
const ScubaHome = () => import('@/components/views/scuba/Home')

const HyperbaricCreate = () =>
	import('@/components/views/hyperbaricChamber/Home')

const PageNotFound = () =>
	import('@/components/views/pageNotFound/PageNotFound')

const SubRoutes = [
	{
		path: '/usuarios',
		meta: { redirect: { name: 'login' }, requiresAuth: true, auth: ['0'] },
		component: User,
		children: [
			{ path: '/', name: 'usersList', component: UsersList },
			{ path: 'cadastrar', name: 'userCreate', component: UserCreate },
			{ path: 'editar/:id', name: 'usersEdit', component: UserCreate }
		]
	},

	{
		path: '/clientes',
		meta: { redirect: { name: 'login' }, requiresAuth: true, auth: ['0', '1'] },
		component: User,
		children: [
			{ path: '/', name: 'clientList', component: ClientList },
			{ path: 'cadastrar', name: 'clientCreate', component: CreateClient },
			{ path: 'editar/:id', name: 'clientEdit', component: CreateClient }
		]
	},

	{
		path: '/dashboard',
		component: Dashboard,
		meta: {
			redirect: { name: 'login' },
			requiresAuth: true,
			auth: ['0', '1', '2']
		},
		children: [
			{ path: 'internos', name: 'internals', component: DashboardInternal },
			{ path: 'externos', name: 'externals', component: DashboardExternal }
		]
	},

	{
		path: '/embarcacoes',
		meta: { redirect: { name: 'login' }, requiresAuth: true },
		component: Ship,
		children: [
			{ path: '', name: 'shipHome', component: ShipHome },
			{ path: 'cadastrar', name: 'shipCreate', component: ShipCreate },
			{ path: ':id', name: 'shipEdit', component: ShipCreate }
		]
	},
	{
		path: '/sistemas',
		meta: { redirect: { name: 'login' }, requiresAuth: true },
		component: Scuba,
		children: [
			{ path: '', name: 'scubaHome', component: ScubaHome },
			{ path: 'cadastrar', name: 'scubaCreate', component: ScubaCreate },
			{ path: 'camara', name: 'hyperbaricCreate', component: HyperbaricCreate },
			{ path: ':id', name: 'scubaEdit', component: ScubaCreate }
		]
	}
]

const routes = [
	{
		path: '/home',
		component: MainLayout,
		children: SubRoutes
	},
	{
		path: '/',
		name: 'login',
		component: Login
	},
	{ path: '*', component: PageNotFound }
]

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) return savedPosition
		else return { x: 0, y: 0 }
	},
	linkActiveClass: 'active',
	linkExactActiveClass: 'exact-active',
	mode: 'history'
})

router.beforeEach(async (to, from, next) => {
	if (to.matched.some(route => route.meta.requiresAuth)) {
		if (!router.app.$auth.user) {
			next({ path: '/' }) // FIXME Logging user off when refreshing page
		} else {
			await loadTypes(to, from)
			await resetShipFields(to, from)
			await resetUserFields(to, from)
			next()
		}
	} else {
		next()
	}
})

export default router
