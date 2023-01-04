import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_POWER_FIELD = 'SET_POWER_FIELD'
export const RESET_POWER_FIELDS = 'RESET_POWER_FIELDS'
export const ADD_POWER = 'ADD_POWER'
export const SET_POWERS = 'SET_POWERS'
export const SET_POWER = 'SET_POWER'
export const EDIT_POWER = 'EDIT_POWER'
export const REMOVE_POWER = 'REMOVE_POWER'
export const RESET_POWER_STATE = 'RESET_POWER_STATE'
export const SET_POWER_EDTING = 'SET_POWER_EDTING'

export default {
	[SET_POWER_FIELD]({ propAndPower }, payload) {
		propAndPower[payload.field] = payload.value
	},
	[RESET_POWER_FIELDS](state) {
		state.propAndPower = getDefaultFieldsValues()
	},
	[RESET_POWER_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[ADD_POWER]({ propulsionsAndPowers }, payload) {
		payload.id = Date.now()
		propulsionsAndPowers.push(payload)
	},
	[SET_POWERS]({ propulsionsAndPowers }, payload = []) {
		propulsionsAndPowers.splice(0, payload.length)
		propulsionsAndPowers.push(...payload)
	},
	[SET_POWER]({ propAndPower }, payload) {
		const { id, mcp, manufacturer, model, serialNumber, power, flag } = payload
		propAndPower.id = id
		propAndPower.mcp = mcp
		propAndPower.manufacturer = manufacturer
		propAndPower.model = model
		propAndPower.serialNumber = serialNumber
		propAndPower.power = power
		propAndPower.flag = flag
	},
	[EDIT_POWER]({ propulsionsAndPowers, propAndPower }, payload) {
		const index = propulsionsAndPowers.findIndex(c => c.id === propAndPower.id)
		propAndPower.flag = payload
		propulsionsAndPowers.splice(index, 1)
		propulsionsAndPowers.push(propAndPower)
	},
	[SET_POWER_EDTING](state, payload) {
		state.editing = payload
	},
	[REMOVE_POWER]({ propulsionsAndPowers }, payload) {
		propulsionsAndPowers.splice(payload, 1)
	}
}
