const EDITING_FLAG = 'editing'
const EDITED_FLAG = 'edited'

export default {
	setCompressorField(context, payload = { valule: undefined, field: '' }) {
		const field = payload.field
		context.commit(`SET_COMPRESSOR_${field.toUpperCase()}`, payload.value)
	},
	setCompressors({ commit, dispatch }, payload) {
		commit('SET_COMPRESSORS', payload)
		dispatch('resetCompressorFields')
	},
	addCompressor({ commit, dispatch }) {
		commit('ADD_COMPRESSOR')
		dispatch('resetCompressorFields')
	},
	editCompressor({ commit, state }, payload) {
		const compressor = payload.id
			? state.compressors.find(c => c.id === payload.id)
			: payload
		if (compressor) {
			compressor.flag = EDITING_FLAG
			commit('SET_COMPRESSOR', compressor)
		}
	},
	commitEditCompressor({ commit }) {
		commit('EDIT_COMPRESSOR', EDITED_FLAG)
		commit('RESET_COMPRESSOR_FIELDS')
	},
	resetCompressorFields({ commit }, payload) {
		commit('RESET_COMPRESSOR_FIELDS', payload)
	},
	resetCompressorState({ commit }) {
		commit('RESET_COMPRESSOR_STATE')
	},
	removeCompressor({ commit, state }, payload) {
		const compressor = state.compressors.find(c => c.id === payload)
		if (compressor) {
			commit('REMOVE_COMPRESSOR', compressor.id)
		}
	}
}
