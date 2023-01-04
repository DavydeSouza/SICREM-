const EDITING_FLAG = 'editing'
const EDITED_FLAG = 'edited'

export default {
	setCompressedAirTankField(
		context,
		payload = { valule: undefined, field: '' }
	) {
		const field = payload.field
		context.commit(`SET_AIR_TANK_${field.toUpperCase()}`, payload.value)
	},
	setCompressedAirTanks({ commit, dispatch }, payload) {
		commit('SET_AIR_TANKS', payload)
		dispatch('resetCompressedAirTankFields')
	},
	addCompressedAirTank({ commit, dispatch }) {
		commit('ADD_AIR_TANK')
		dispatch('resetCompressedAirTankFields')
	},
	editCompressedAirTank({ commit, state }, payload) {
		const compressedAirTank = payload.id
			? state.compressedsAirTanks.find(c => c.id === payload.id)
			: payload
		if (compressedAirTank) {
			compressedAirTank.flag = EDITING_FLAG
			commit('SET_AIR_TANK', compressedAirTank)
		}
	},
	commitEditCompressedAirTank({ commit }) {
		commit('EDIT_AIR_TANK', EDITED_FLAG)
		commit('RESET_AIR_TANK_FIELDS')
	},
	resetCompressedAirTankFields({ commit }, payload) {
		commit('RESET_AIR_TANK_FIELDS', payload)
	},
	resetCompressedAirTankState({ commit }) {
		commit('RESET_AIR_TANK_STATE')
	},
	removeCompressedAirTank({ commit, state }, payload) {
		const airTank = state.compressedsAirTanks.find(c => c.id === payload)
		if (airTank) {
			commit('REMOVE_AIR_TANK', airTank.id)
		}
	}
}
