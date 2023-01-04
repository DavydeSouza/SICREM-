const EDITING_FLAG = 'editing'
const EDITED_FLAG = 'edited'

export default {
	setMaskHelmetField(context, payload = { valule: undefined, field: '' }) {
		const field = payload.field
		context.commit(`SET_HELMET_${field.toUpperCase()}`, payload.value)
	},
	setMaskHelmets({ commit, dispatch }, payload) {
		commit('SET_HELMETS', payload)
		dispatch('resetMaskHelmetFields')
	},
	addMaskHelmet({ commit, dispatch }) {
		commit('ADD_HELMET')
		dispatch('resetMaskHelmetFields')
	},
	editMaskHelmet({ commit, state }, payload) {
		const maskHelmet = payload.id
			? state.masksHelmets.find(c => c.id === payload.id)
			: payload
		if (maskHelmet) {
			maskHelmet.flag = EDITING_FLAG
			commit('SET_HELMET', maskHelmet)
		}
	},
	commitEditMaskHelmet({ commit }) {
		commit('EDIT_HELMET', EDITED_FLAG)
		commit('RESET_HELMET_FIELDS')
	},
	resetMaskHelmetFields({ commit }, payload) {
		commit('RESET_HELMET_FIELDS', payload)
	},
	resetMaskHelmetState({ commit }) {
		commit('RESET_HELMET_STATE')
	},
	removeMaskHelmet({ commit, state }, payload) {
		const maskHelmet = state.masksHelmets.find(c => c.id === payload)
		if (maskHelmet) {
			commit('REMOVE_HELMET', maskHelmet.id)
		}
	}
}
