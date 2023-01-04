/* eslint-disable */
import store from '../../store/store'

const resetUserFields = async (to, from) => {
	const routes = ['userCreate', 'usersEdit']
	if (routes.includes(to.name)) {
		await store.dispatch('resetClientState')
		await store.dispatch('resetCompanyState')
		await store.dispatch('resetContactState')
	}
}

export default resetUserFields
