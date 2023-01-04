import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_SHIPYARD_FIELD = 'SET_SHIPYARD_FIELD'
export const SET_SHIPYARD = 'SET_SHIPYARD'
export const SET_SHIPYARDS = 'SET_SHIPYARDS'
export const RESET_SHIPYARD_FIELDS = 'RESET_SHIPYARD_FIELDS'
export const RESET_SHIPYARD_STATE = 'RESET_SHIPYARD_STATE'

export default {
	[SET_SHIPYARD_FIELD]({ shipyard }, payload) {
		shipyard[payload.field] = payload.value
	},
	[SET_SHIPYARD]({ shipyard }, payload) {
		shipyard.id = payload.id
		shipyard.name = payload.name
	},
	[RESET_SHIPYARD_FIELDS](state) {
		state.shipyard = getDefaultFieldsValues()
	},
	[RESET_SHIPYARD_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[SET_SHIPYARDS]({ shipyards }, payload) {
		shipyards.splice(0, payload.length)
		shipyards.push(...payload)
	}
}
