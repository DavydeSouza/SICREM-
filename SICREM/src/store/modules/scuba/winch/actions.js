const EDITING_FLAG = 'editing'
const EDITED_FLAG = 'edited'

export default {
	setWinchField(context, payload = { valule: undefined, field: '' }) {
		const field = payload.field
		context.commit(`SET_WINCH_${field.toUpperCase()}`, payload.value)
	},
	setWinchs({ commit, dispatch }, payload) {
		commit('SET_WINCHS', payload)
		dispatch('resetWinchFields')
	},
	addWinch({ commit, dispatch }) {
		commit('ADD_WINCH')
		dispatch('resetWinchFields')
	},
	editWinch({ commit, state }, payload) {
		const winch = payload.id
			? state.winchs.find(c => c.id === payload.id)
			: payload
		if (winch) {
			winch.flag = EDITING_FLAG
			commit('SET_WINCH', winch)
		}
	},
	commitEditWinch({ commit }) {
		commit('EDIT_WINCH', EDITED_FLAG)
		commit('RESET_WINCH_FIELDS')
	},
	resetWinchFields({ commit }, payload) {
		commit('RESET_WINCH_FIELDS', payload)
	},
	resetWinchState({ commit }) {
		commit('RESET_WINCH_STATE')
	},
	removeWinch({ commit, state }, payload) {
		const winch = state.winchs.find(c => c.id === payload)
		if (winch) {
			commit('REMOVE_WINCH', winch.id)
		}
	}
}
