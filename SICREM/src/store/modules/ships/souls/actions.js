import setSameObjectFields from '../../../../helpers/setSameObjectFields.js'

export default {
	setSoulsField(context, payload = { value: undefined, field: '' }) {
		context.commit('SET_SOULS_FIELD', payload)
	},
	resetSoulsPorts({ commit }) {
		commit('RESET_SOULS_PORTS', [])
	},
	resetSoulsFields({ commit }) {
		commit('RESET_SOULS_FIELDS')
	},
	resetSoulsState({ commit }) {
		commit('RESET_SOULS_STATE')
	},
	async setSouls(context, payload) {
		const data = await setSameObjectFields(payload, context.state.souls)
		context.commit('SET_SOULS', data)
	}
}
