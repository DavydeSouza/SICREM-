import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_UMBILICAL_LENGTH = 'SET_UMBILICAL_LENGTH'
export const SET_UMBILICAL_PRESSURE = 'SET_UMBILICAL_PRESSURE'
export const SET_UMBILICAL_INTERNALDIAMETER = 'SET_UMBILICAL_INTERNALDIAMETER'
export const SET_UMBILICAL_NUMBER = 'SET_UMBILICAL_NUMBER'
export const SET_UMBILICAL_MANUFACTURER = 'SET_UMBILICAL_MANUFACTURER'
export const SET_UMBILICAL_MODEL = 'SET_UMBILICAL_MODEL'
export const SET_UMBILICALS = 'SET_UMBILICALS'
export const ADD_UMBILICAL = 'ADD_UMBILICAL'
export const EDIT_UMBILICAL = 'EDIT_UMBILICAL'
export const SET_UMBILICAL = 'SET_UMBILICAL'
export const REMOVE_UMBILICAL = 'REMOVE_UMBILICAL'

export const RESET_UMBILICAL_FIELDS = 'RESET_UMBILICAL_FIELDS'
export const RESET_UMBILICAL_STATE = 'RESET_UMBILICAL_STATE'

export default {
	[SET_UMBILICAL_LENGTH]({ umbilical }, payload) {
		umbilical.length = payload
	},
	[SET_UMBILICAL_PRESSURE]({ umbilical }, payload) {
		umbilical.pressure = payload
	},
	[SET_UMBILICAL_INTERNALDIAMETER]({ umbilical }, payload) {
		umbilical.internalDiameter = payload
	},
	[SET_UMBILICAL_NUMBER]({ umbilical }, payload) {
		umbilical.manufactured.idNumber = payload
	},
	[SET_UMBILICAL_MANUFACTURER]({ umbilical }, payload) {
		umbilical.manufactured.manufacturer = payload
	},
	[SET_UMBILICAL_MODEL]({ umbilical }, payload) {
		umbilical.manufactured.model = payload
	},
	[SET_UMBILICALS]({ umbilicals }, payload = []) {
		umbilicals.splice(0, payload.length)
		umbilicals.push(...payload)
	},
	[ADD_UMBILICAL]({ umbilicals, umbilical }) {
		umbilical.id = Date.now()
		umbilicals.push(umbilical)
	},
	[EDIT_UMBILICAL]({ umbilicals, umbilical }, payload) {
		const index = umbilicals.findIndex(c => c.id === umbilical.id)
		umbilical.flag = payload
		umbilicals.splice(index, 1)
		umbilicals.push(umbilical)
	},
	[SET_UMBILICAL](state, payload) {
		const id = payload.id || Date.now()
		state.umbilical = {
			id: id,
			length: payload.length,
			pressure: payload.pressure,
			internalDiameter: payload.internalDiameter,
			manufactured: payload.manufactured,
			flag: payload.flag
		}
	},
	[REMOVE_UMBILICAL]({ umbilicals }, payload) {
		const index = umbilicals.findIndex(b => b.id === payload)
		umbilicals.splice(index, 1)
	},
	[RESET_UMBILICAL_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[RESET_UMBILICAL_FIELDS](state) {
		state.umbilical = getDefaultFieldsValues()
	}
}
