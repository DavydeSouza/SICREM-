const EDITING_FLAG = 'editing'
const EDITED_FLAG = 'edited'

export default {
	setComunicatorField(context, payload = { valule: undefined, field: '' }) {
		const field = payload.field
		context.commit(`SET_COMUNICATOR_${field.toUpperCase()}`, payload.value)
	},
	setComunicators({ commit, dispatch }, payload) {
		commit('SET_COMUNICATORS', payload)
		dispatch('resetComunicatorFields')
	},
	addComunicator({ commit, dispatch }) {
		commit('ADD_COMUNICATOR')
		dispatch('resetComunicatorFields')
	},
	editComunicator({ commit, state }, payload) {
		const comunicator = payload.id
			? state.comunicators.find(c => c.id === payload.id)
			: payload
		if (comunicator) {
			comunicator.flag = EDITING_FLAG
			commit('SET_COMUNICATOR', comunicator)
		}
	},
	commitEditComunicator({ commit }) {
		commit('EDIT_COMUNICATOR', EDITED_FLAG)
		commit('RESET_COMUNICATOR_FIELDS')
	},
	resetComunicatorFields({ commit }, payload) {
		commit('RESET_COMUNICATOR_FIELDS', payload)
	},
	resetComunicatorState({ commit }) {
		commit('RESET_COMUNICATOR_STATE')
	},
	removeComunicator({ commit, state }, payload) {
		const comunicator = state.comunicators.find(c => c.id === payload)
		if (comunicator) {
			commit('REMOVE_COMUNICATOR', comunicator.id)
		}
	}
}
