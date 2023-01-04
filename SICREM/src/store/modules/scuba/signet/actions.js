const EDITING_FLAG = 'editing'
const EDITED_FLAG = 'edited'

export default {
	setSignetField(context, payload = { valule: undefined, field: '' }) {
		const field = payload.field
		context.commit(`SET_SIGNET_${field.toUpperCase()}`, payload.value)
	},
	setSignets({ commit, dispatch }, payload) {
		commit('SET_SIGNETS', payload)
		dispatch('resetSignetFields')
	},
	addSignet({ commit, dispatch }) {
		commit('ADD_SIGNET')
		dispatch('resetSignetFields')
	},
	editSignet({ commit, state }, payload) {
		const signet = payload.id
			? state.signets.find(c => c.id === payload.id)
			: payload
		if (signet) {
			signet.flag = EDITING_FLAG
			commit('SET_SIGNET', signet)
		}
	},
	commitEditSignet({ commit }) {
		commit('EDIT_SIGNET', EDITED_FLAG)
		commit('RESET_SIGNET_FIELDS')
	},
	resetSignetFields({ commit }, payload) {
		commit('RESET_SIGNET_FIELDS', payload)
	},
	resetSignetState({ commit }) {
		commit('RESET_SIGNET_STATE')
	},
	removeSignet({ commit, state }, payload) {
		const signet = state.signets.find(c => c.id === payload)
		if (signet) {
			commit('REMOVE_SIGNET', signet.id)
		}
	}
}
