import { port } from '@/services/ports'
import sanatizeObject from '@/helpers/sanatizeObject'
import onlyIDs from '@/helpers/onlyIDs'

import setSameObjectFields from '../../../../helpers/setSameObjectFields.js'

export default {
	setGtfField(context, payload = { value: undefined, field: '' }) {
		context.commit('SET_GTF_FIELD', payload)
	},
	getPortByName({ commit }, payload) {
		if (payload.length > 2) {
			setTimeout(async () => {
				const resp = await port.findByName(payload)
				const data = resp.data.length ? resp.data : [{ id: '', name: payload }]
				commit('SET_GTF_PORTS', data)
			}, 400)
		}
	},
	resetGtfPorts({ commit }) {
		commit('RESET_GTF_PORTS', [])
	},
	resetGtfFields({ commit }) {
		commit('RESET_GTF_FIELDS')
	},
	resetGtfState({ commit }) {
		commit('RESET_GTF_STATE')
	},
	setGtf(context, payload) {
		const data = setSameObjectFields(payload, context.state.gtf)
		context.commit('SET_GTF', data)
	},
	async getGtfEditedFormat({ state, getters }) {
		const {
			hullmaterial,
			operationport,
			registrationport,
			shiptype
		} = state.gtf
		const { id, activitys, navigationareas, ship } = state.gtf
		const shipyard = getters.shipyard.id
		const gtf = await sanatizeObject(
			onlyIDs({
				id,
				hullmaterial,
				operationport,
				registrationport,
				shipyard,
				shiptype
			})
		)
		gtf.ship = ship
		gtf.shipyard = getters.shipyard.id
			? { id: getters.shipyard.id }
			: getters.shipyard
		gtf.activitys = JSON.stringify(activitys)
		gtf.navigationareas = JSON.stringify(navigationareas)
		gtf.propulsionandpower = JSON.stringify(getters.propulsionsAndPowers)
		gtf.rtc = JSON.stringify(getters.getCheckedRtcs)
		return gtf
	}
}
