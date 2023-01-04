import setSameObjectFields from '../../../../helpers/setSameObjectFields.js'

export default {
	setMtfField(context, payload = { value: undefined, field: '' }) {
		context.commit('SET_MTF_FIELD', payload)
	},
	setMtfDraftField(
		context,
		payload = { value: undefined, field: '', draft: '' }
	) {
		context.commit('SET_MTF_DRAFT_FIELD', payload)
	},
	setMtf(context, payload) {
		const data = setSameObjectFields(payload, context.state.mtf)
		context.commit('SET_MTF', data)
	},
	setMtfDraft(context, payload = { draft: '', value: {} }) {
		context.commit('SET_MTF_DRAFT', payload)
	},
	resetMtfFields({ commit }) {
		commit('RESET_MTF_FIELDS')
	},
	resetMtfState({ commit }) {
		commit('RESET_MTF_STATE')
	}
}
