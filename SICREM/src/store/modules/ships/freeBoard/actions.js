export default {
	addFreeBoardField(context, payload) {
		context.commit('ADD_FREE_BOARD_PLUS', payload)
		context.dispatch('resetFreeBoardFields')
	},
	removeFreeBoardField(context, payload) {
		context.commit('REMOVE_FREE_BOARD_PLUS_FIELD', payload)
	},
	setOpenSeaSize(context, payload) {
		context.commit('SET_FREE_BOARD_PLUS_VALUE_OPEN_SEA', payload)
	},
	async getOpenSeaSize(state) {
		return await state.value
	},
	setFreeBoardValue(context, payload) {
		context.commit('SET_FREE_BOARD_PLUS_VALUE', payload)
	},
	resetFreeBoardFields({ commit }) {
		commit('RESET_FREE_BOARD_STATE')
	},
	setFreeBoardArea({ commit }, payload) {
		commit('SET_FREE_BOARD_PLUS', payload)
	},
	getFreeBoardAreas({ state }, payload) {
		const areas = state.areas.find(a => a.areaOrder === payload)
		return areas
	},
	editFreeBoard({ commit, dispatch }, payload) {
		commit('EDIT_FREE_BOARD_PLUS', payload)
		dispatch('resetFreeBoardFields')
	},
	setFreeBoard(context, payload) {
		context.commit('SET_FREE_BOARD', payload)
	},
	setFreeBoardAreaField({ commit }, payload = { field: '', value: null }) {
		commit('SET_AREA_FIELD', payload)
	}
}
