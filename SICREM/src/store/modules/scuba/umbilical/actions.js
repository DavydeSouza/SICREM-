const EDITING_FLAG = 'editing'
const EDITED_FLAG = 'edited'

export default {
	setUmbilicalField(context, payload = { valule: undefined, field: '' }) {
		const field = payload.field
		context.commit(`SET_UMBILICAL_${field.toUpperCase()}`, payload.value)
	},
	setUmbilicals({ commit, dispatch }, payload) {
		commit('SET_UMBILICALS', payload)
		dispatch('resetUmbilicalFields')
	},
	addUmbilical({ commit, dispatch }) {
		commit('ADD_UMBILICAL')
		dispatch('resetUmbilicalFields')
	},
	editUmbilical({ commit, state }, payload) {
		const umbilical = payload.id
			? state.umbilicals.find(c => c.id === payload.id)
			: payload
		if (umbilical) {
			umbilical.flag = EDITING_FLAG
			commit('SET_UMBILICAL', umbilical)
		}
	},
	commitEditUmbilical({ commit }) {
		commit('EDIT_UMBILICAL', EDITED_FLAG)
		commit('RESET_UMBILICAL_FIELDS')
	},
	resetUmbilicalFields({ commit }, payload) {
		commit('RESET_UMBILICAL_FIELDS', payload)
	},
	resetUmbilicalState({ commit }) {
		commit('RESET_UMBILICAL_STATE')
	},
	removeUmbilical({ commit, state }, payload) {
		const umbilical = state.umbilicals.find(c => c.id === payload)
		if (umbilical) {
			commit('REMOVE_UMBILICAL', umbilical.id)
		}
	}
}
