/* eslint-disable */
import store from '../../store/store'

const loadTypes = async (to, from) => {
	const routes = ['shipCreate', 'shipEdit']
	if (routes.includes(to.name)) {
		await store.dispatch('setAllTypes')
	}
}

export default loadTypes
