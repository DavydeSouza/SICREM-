export default {
	setValidations({ commit }, payload) {
		commit('SET_ADDRESS_VALIDATIONS', payload)
	},
	setField(context, payload = { valule: undefined, field: '' }) {
		const field = payload.field
		context.commit(`SET_ADDRESS_${field.toUpperCase()}`, payload.value)
	},
	resetAdressFields({ commit }, payload) {
		commit('RESET_ADDRESS_FIELDS', payload)
	},
	resetAddressState({ commit }) {
		commit('RESET_ADDRESS_STATE')
	}
}
