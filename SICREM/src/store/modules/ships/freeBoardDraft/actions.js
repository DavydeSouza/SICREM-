export default {
	addFreeBoardDraftField(context, payload) {
		context.commit('ADD_DRAFT', payload)
		context.dispatch('resetFreeBoardDraftFields')
	},
	removeFreeBoardDraftField(context, payload) {
		context.commit('REMOVE_FREE_BOARD_DRAFT_FIELD', payload)
	},
	setOpenSeaSizeDraft(context, payload) {
		context.commit('SET_FREE_BOARD_DRAFT_VALUE_OPEN_SEA', payload)
	},
	async getOpenSeaSize(state) {
		return await state.value
	},
	setFreeBoardDraftValue(context, payload) {
		context.commit('SET_FREE_BOARD_DRAFT_VALUE', payload)
	},
	resetFreeBoardDraftFields({ commit }) {
		commit('RESET_FREE_BOARD_DRAFT_STATE')
	},
	setFreeBoardDraftArea({ commit }, payload) {
		commit('SET_DRAFT', payload)
	},
	getFreeBoardDraftAreas({ state }, payload) {
		const areas = state.areas.find(a => a.areaOrder === payload)
		return areas
	},
	editFreeBoardDraft({ commit, dispatch }, payload) {
		commit('EDIT_DRAFT', payload)
		dispatch('resetFreeBoardDraftFields')
	},
	setFreeBoardDraft(context, payload) {
		context.commit('SET_FREE_BOARD_DRAFT', payload)
	},
	setDraftFreeBoardAreaField({ commit }, payload = { field: '', value: null }) {
		commit('SET_DRAFT_AREA_FIELD', payload)
	}
}
