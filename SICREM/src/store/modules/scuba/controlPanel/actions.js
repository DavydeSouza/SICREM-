const EDITING_FLAG = 'editing'
const EDITED_FLAG = 'edited'

export default {
	setControlPanelField(context, payload = { valule: undefined, field: '' }) {
		const field = payload.field
		context.commit(`SET_CONTROL_PANEL_${field.toUpperCase()}`, payload.value)
	},
	setControlPanels({ commit, dispatch }, payload) {
		commit('SET_CONTROL_PANELS', payload)
		dispatch('resetControlPanelFields')
	},
	addControlPanel({ commit, dispatch }) {
		commit('ADD_CONTROL_PANEL')
		dispatch('resetControlPanelFields')
	},
	editControlPanel({ commit, state }, payload) {
		const controlPanel = payload.id
			? state.controlPanels.find(c => c.id === payload.id)
			: payload
		if (controlPanel) {
			controlPanel.flag = EDITING_FLAG
			commit('SET_CONTROL_PANEL', controlPanel)
		}
	},
	commitEditControlPanel({ commit }) {
		commit('EDIT_CONTROL_PANEL', EDITED_FLAG)
		commit('RESET_CONTROL_PANEL_FIELDS')
	},
	resetControlPanelFields({ commit }, payload) {
		commit('RESET_CONTROL_PANEL_FIELDS', payload)
	},
	resetControlPanelState({ commit }) {
		commit('RESET_CONTROL_PANEL_STATE')
	},
	removeControlPanel({ commit, state }, payload) {
		const controlPanel = state.controlPanels.find(c => c.id === payload)
		if (controlPanel) {
			commit('REMOVE_CONTROL_PANEL', controlPanel.id)
		}
	}
}
