import { ships as service } from '../../../../services/ships'

import setSameObjectFields from '../../../../helpers/setSameObjectFields.js'

export default {
	resetShipFields({ commit }) {
		commit('RESET_SHIP_FIELDS')
	},
	resetShipState({ commit }) {
		commit('RESET_SHIP_STATE')
	},
	setShipField(context, payload = { valule: undefined, field: '' }) {
		context.commit('SET_SHIP_FIELD', payload)
	},
	async loadShips({ commit }) {
		const { data } = await service.getAll()
		commitShips(commit, data)
	},
	async loadShipsByField({ commit, dispatch }, payload) {
		try {
			dispatch('setLoadingTrue')
			const { data } = await service.findByField(payload)
			commitShips(commit, data)
		} catch (error) {
			console.log(error)
		} finally {
			dispatch('setLoadingFalse')
		}
	},
	async getShipById(context, payload) {
		const { data } = await service.findByCbesId(payload)
		return data
	},
	async inactiveShip({ commit }, payload) {
		const resp = await service.inative(payload)
		if (resp.status == 200) commit('INACTVE_SHIP', payload)
		return resp
	},
	setShip(context, payload) {
		const data = setSameObjectFields(payload, context.state.ship)
		context.commit('SET_SHIP', data)
	}
}

function commitShips(commit, data) {
	const msg = 'No result (Ships)'
	if (data) {
		const { content, total } = data
		commit('SET_SHIPS', { content, total: parseInt(total) })
	} else throw new Error(msg)
}
