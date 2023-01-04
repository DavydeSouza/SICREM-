export const SET_ITEMS_FIELD = 'SET_ITEMS_FIELD'
export const LOAD_ITEMS_FIELD = 'LOAD_ITEMS_FIELD'
export const SET_OTHER_ITEMS = 'SET_OTHER_ITEMS'
export const RESET_OTHER_ITEMS = 'RESET_OTHER_ITEMS'

export default {
	[SET_ITEMS_FIELD]({ generalSystemItems }, payload) {
		const value = parseInt(payload.value)
		generalSystemItems[payload.field] = value > 0
	},
	[LOAD_ITEMS_FIELD]({ generalSystemItems }, payload) {
		generalSystemItems[payload.field] = payload.value
	},
	[SET_OTHER_ITEMS](state, payload) {
		state.generalSystemItems = payload
	},
	[RESET_OTHER_ITEMS](state) {
		state.generalSystemItems = {
			appropriateClothing: -1,
			regulatingValves: -1,
			beltsWithBallast: -1,
			floors: -1,
			knives: -1,
			suspensories: -1,
			inflatableVests: -1,
			lanterns: -1,
			depths: -1
		}
	}
}
