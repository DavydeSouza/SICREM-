import { shipyards as shipyardsService } from '@/services/shipyards'

export default {
	resetShipYardFields({ commit }) {
		commit('RESET_SHIPYARD_FIELDS')
	},
	resetShipYardState({ commit }) {
		commit('RESET_SHIPYARD_STATE')
	},
	setShipYardField(context, payload = { valule: undefined, field: '' }) {
		context.commit('SET_SHIPYARD_FIELD', payload)
	},
	setShipYard({ commit }, payload) {
		commit('SET_SHIPYARD', payload)
	},
	getShipYardByName({ commit }, payload) {
		if (payload.length > 2) {
			setTimeout(async () => {
				const resp = await shipyardsService.findByName(payload)
				const data = resp.data.length && resp.data
				commit('SET_SHIPYARDS', data)
			}, 400)
		}
	}
}
