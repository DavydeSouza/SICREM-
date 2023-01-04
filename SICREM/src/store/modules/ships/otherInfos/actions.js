import setSameObjectFields from '../../../../helpers/setSameObjectFields.js'

export default {
	setInfoField(context, payload = { value: undefined, field: '' }) {
		context.commit('SET_INFOS_FIELD', payload)
	},
	setOtherInfos(context, payload) {
		const data = setSameObjectFields(payload, context.state.otherInfos)
		context.commit('SET_OTHER_INFOS', data)
	},
	resetOtherInfosFields({ commit }) {
		commit('RESET_OTHER_INFOS_FIELDS')
	},
	resetOtherInfosState({ commit }) {
		commit('RESET_OTHER_INFOS_STATE')
	}
}
