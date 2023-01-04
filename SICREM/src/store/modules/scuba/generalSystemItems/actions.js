import { Object } from 'core-js'
import setSameObjectFields from '../../../../helpers/setSameObjectFields.js'

export default {
	setInfoField(context, payload = { value: undefined, field: '' }) {
		context.commit('SET_ITEMS_FIELD', payload)
	},
	setOtherItems(context, payload) {
		const data = setSameObjectFields(payload, context.state.generalSystemItems)
		context.commit('SET_OTHER_ITEMS', data)
	},
	setOtherItemsByField(context, payload) {
		Object.entries(payload).forEach(entrie => {
			const data = { field: entrie[0], value: entrie[1] }
			context.commit('LOAD_ITEMS_FIELD', data)
		})
	},
	resetOtherItemsState({ commit }) {
		commit('RESET_OTHER_ITEMS')
	}
}
