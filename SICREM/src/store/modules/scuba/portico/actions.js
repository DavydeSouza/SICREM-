const EDITING_FLAG = 'editing'
const EDITED_FLAG = 'edited'

export default {
	setPorticoField(context, payload = { valule: undefined, field: '' }) {
		const field = payload.field
		context.commit(`SET_PORTICO_${field.toUpperCase()}`, payload.value)
	},
	setPorticos({ commit, dispatch }, payload) {
		commit('SET_PORTICOS', payload)
		dispatch('resetPorticoFields')
	},
	addPortico({ commit, dispatch }) {
		commit('ADD_PORTICO')
		dispatch('resetPorticoFields')
	},
	editPortico({ commit, state }, payload) {
		const portico = payload.id
			? state.porticos.find(c => c.id === payload.id)
			: payload
		if (portico) {
			portico.flag = EDITING_FLAG
			commit('SET_PORTICO', portico)
		}
	},
	commitEditPortico({ commit }) {
		commit('EDIT_PORTICO', EDITED_FLAG)
		commit('RESET_PORTICO_FIELDS')
	},
	resetPorticoFields({ commit }, payload) {
		commit('RESET_PORTICO_FIELDS', payload)
	},
	resetPorticoState({ commit }) {
		commit('RESET_PORTICO_STATE')
	},
	removePortico({ commit, state }, payload) {
		const portico = state.porticos.find(c => c.id === payload)
		if (portico) {
			commit('REMOVE_PORTICO', portico.id)
		}
	}
}
