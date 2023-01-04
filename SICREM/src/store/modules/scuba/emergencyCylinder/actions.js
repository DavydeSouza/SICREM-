const EDITING_FLAG = 'editing'
const EDITED_FLAG = 'edited'

export default {
	setEmergencyCylinderField(
		context,
		payload = { valule: undefined, field: '' }
	) {
		const field = payload.field
		context.commit(`SET_EMERGENCY_${field.toUpperCase()}`, payload.value)
	},
	setEmergencyCylinders({ commit, dispatch }, payload) {
		commit('SET_EMERGENCYS', payload)
		dispatch('resetEmergencyCylinderFields')
	},
	addEmergencyCylinder({ commit, dispatch }) {
		commit('ADD_EMERGENCY')
		dispatch('resetEmergencyCylinderFields')
	},
	editEmergencyCylinder({ commit, state }, payload) {
		const emergencyCylinder = payload.id
			? state.emergencyCylinders.find(c => c.id === payload.id)
			: payload
		if (emergencyCylinder) {
			emergencyCylinder.flag = EDITING_FLAG
			commit('SET_EMERGENCY', emergencyCylinder)
		}
	},
	commitEditEmergencyCylinder({ commit }) {
		commit('EDIT_EMERGENCY', EDITED_FLAG)
		commit('RESET_EMERGENCY_FIELDS')
	},
	resetEmergencyCylinderFields({ commit }, payload) {
		commit('RESET_EMERGENCY_FIELDS', payload)
	},
	resetEmergencyCylinderState({ commit }) {
		commit('RESET_EMERGENCY_STATE')
	},
	removeEmergencyCylinderFields({ commit, state }, payload) {
		const emergency = state.emergencyCylinders.find(c => c.id === payload)
		if (emergency) {
			commit('REMOVE_EMERGENCY', emergency.id)
		}
	}
}
