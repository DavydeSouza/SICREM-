/* eslint-disable */
import store from '../../store/store'

const resetShipFields = async (to, from) => {
	const routes = ['shipCreate', 'shipEdit']
	if (routes.includes(to.name)) {
		await store.dispatch('resetFreeBoardFields')
		await store.dispatch('resetFreeBoardDraftFields')
		await store.dispatch('resetGtfFields')
		await store.dispatch('resetMtfFields')
		await store.dispatch('resetOtherInfosState')
		await store.dispatch('resetRtcsState')
		await store.dispatch('resetShipownerState')
		await store.dispatch('resetShipState')
		await store.dispatch('resetShipYardFields')
		await store.dispatch('resetSoulsFields')
		await store.dispatch('resetPowerState')
	}
}

export default resetShipFields
