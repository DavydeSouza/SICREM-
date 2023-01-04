const EDITING_FLAG = 'editing'
const EDITED_FLAG = 'edited'

export default {
	setHyperbaricChamberField(
		context,
		payload = { valule: undefined, field: '' }
	) {
		const field = payload.field
		context.commit(`SET_HYPERBARIC_${field.toUpperCase()}`, payload.value)
	},
	setHyperbaricChambers({ commit, dispatch }, payload) {
		commit('SET_HYPERBARICS', payload)
		dispatch('resetHyperbaricChamberFields')
	},
	addHyperbaricChamber({ commit, dispatch }) {
		commit('ADD_HYPERBARIC')
		dispatch('resetHyperbaricChamberFields')
	},
	editHyperbaricChamber({ commit, state }, payload) {
		const hyperbaricChamber = payload.id
			? state.hyperbaricsChambers.find(c => c.id === payload.id)
			: payload
		if (hyperbaricChamber) {
			hyperbaricChamber.flag = EDITING_FLAG
			commit('SET_HYPERBARIC', hyperbaricChamber)
		}
	},
	commitEditHyperbaricChamber({ commit }) {
		commit('EDIT_HYPERBARIC', EDITED_FLAG)
		commit('RESET_HYPERBARIC_FIELDS')
	},
	resetHyperbaricChamberFields({ commit }, payload) {
		commit('RESET_HYPERBARIC_FIELDS', payload)
	},
	resetHyperbaricChamberState({ commit }) {
		commit('RESET_HYPERBARIC_STATE')
	},
	removeHyperbaricChamber({ commit, state }, payload) {
		const hyperbaricChamber = state.hyperbaricsChambers.find(
			c => c.id === payload
		)
		if (hyperbaricChamber) {
			commit('REMOVE_HYPERBARIC', hyperbaricChamber.id)
		}
	}
}
