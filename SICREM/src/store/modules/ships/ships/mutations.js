import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_SHIP_FIELD = 'SET_SHIP_FIELD'
export const SET_SHIPS = 'SET_SHIPS'
export const SET_SHIP = 'SET_SHIP'
export const RESET_SHIP_FIELDS = 'RESET_SHIP_FIELDS'
export const RESET_SHIP_STATE = 'RESET_SHIP_STATE'
export const INACTVE_SHIP = 'INACTVE_SHIP'

export default {
	[SET_SHIP_FIELD]({ ship }, payload) {
		ship[payload.field] = payload.value
	},
	[RESET_SHIP_FIELDS](state) {
		state.ship = getDefaultFieldsValues()
	},
	[RESET_SHIP_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[SET_SHIPS](state, { content, total }) {
		state.ships = []
		state.ships = content
		state.total = total
	},
	[SET_SHIP](state, payload) {
		state.ship = payload
	},
	[INACTVE_SHIP]({ ships }, payload) {
		const index = ships.findIndex(c => c.id === payload)
		ships.splice(index, 1)
	}
}
