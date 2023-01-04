const EDITING_FLAG = 'editing'
const EDITED_FLAG = 'edited'

export default {
	setBasketField(context, payload = { valule: undefined, field: '' }) {
		const field = payload.field
		context.commit(`SET_BASKET_${field.toUpperCase()}`, payload.value)
	},
	setBaskets({ commit, dispatch }, payload) {
		commit('SET_BASKETS', payload)
		dispatch('resetBasketFields')
	},
	addBasket({ commit, dispatch }) {
		commit('ADD_BASKET')
		dispatch('resetBasketFields')
	},
	editBasket({ commit, state }, payload) {
		const basket = payload.id
			? state.baskets.find(c => c.id === payload.id)
			: payload
		if (basket) {
			basket.flag = EDITING_FLAG
			commit('SET_BASKET', basket)
		}
	},
	commitEditBasket({ commit }) {
		commit('EDIT_BASKET', EDITED_FLAG)
		commit('RESET_BASKET_FIELDS')
	},
	resetBasketFields({ commit }, payload) {
		commit('RESET_BASKET_FIELDS', payload)
	},
	resetBasketState({ commit }) {
		commit('RESET_BASKET_STATE')
	},
	removeBasket({ commit, state }, payload) {
		const basket = state.baskets.find(c => c.id === payload)
		if (basket) {
			commit('REMOVE_BASKET', basket.id)
		}
	}
}
