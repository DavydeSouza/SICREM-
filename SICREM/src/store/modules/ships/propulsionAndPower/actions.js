const EDITING_FLAG = 'editing'
const EDITED_FLAG = 'edited'

export default {
	setPowerField(context, payload = { value: undefined, field: '' }) {
		context.commit('SET_POWER_FIELD', payload)
	},
	resetPowerFields({ commit }, payload) {
		commit('RESET_POWER_FIELDS', payload)
	},
	resetPowerState({ commit }) {
		commit('RESET_POWER_STATE')
	},
	addPower({ commit, state, dispatch }) {
		commit('ADD_POWER', state.propAndPower)
		dispatch('resetPowerFields')
	},
	setPowers({ commit, dispatch }, payload) {
		commit('SET_POWERS', payload)
		dispatch('resetPowerFields')
	},
	editPower({ commit, state }, payload) {
		const power = payload.id
			? state.propulsionsAndPowers.find(p => p.id === payload.id)
			: payload
		if (power) {
			power.flag = EDITING_FLAG
			commit('SET_POWER_EDTING', true)
			commit('SET_POWER', power)
		}
	},
	commitEditPower({ commit }) {
		commit('EDIT_POWER', EDITED_FLAG)
		commit('SET_POWER_EDTING', false)
		commit('RESET_POWER_FIELDS')
	},
	removePower({ commit }, payload) {
		commit('REMOVE_POWER', payload)
	}
}
