import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_HELMET_TYPE = 'SET_HELMET_TYPE'
export const SET_HELMET_NUMBER = 'SET_HELMET_NUMBER'
export const SET_HELMET_MANUFACTURER = 'SET_HELMET_MANUFACTURER'
export const SET_HELMET_MODEL = 'SET_HELMET_MODEL'
export const SET_HELMETS = 'SET_HELMETS'
export const ADD_HELMET = 'ADD_HELMET'
export const EDIT_HELMET = 'EDIT_HELMET'
export const SET_HELMET = 'SET_HELMET'
export const REMOVE_HELMET = 'REMOVE_HELMET'

export const RESET_HELMET_FIELDS = 'RESET_HELMET_FIELDS'
export const RESET_HELMET_STATE = 'RESET_HELMET_STATE'

export default {
	[SET_HELMET_TYPE]({ maskHelmet }, payload) {
		maskHelmet.type = payload
	},
	[SET_HELMET_NUMBER]({ maskHelmet }, payload) {
		maskHelmet.manufactured.idNumber = payload
	},
	[SET_HELMET_MANUFACTURER]({ maskHelmet }, payload) {
		maskHelmet.manufactured.manufacturer = payload
	},
	[SET_HELMET_MODEL]({ maskHelmet }, payload) {
		maskHelmet.manufactured.model = payload
	},
	[SET_HELMETS]({ masksHelmets }, payload = []) {
		masksHelmets.splice(0, payload.length)
		masksHelmets.push(...payload)
	},
	[ADD_HELMET]({ masksHelmets, maskHelmet }) {
		maskHelmet.id = Date.now()
		masksHelmets.push(maskHelmet)
	},
	[EDIT_HELMET]({ masksHelmets, maskHelmet }, payload) {
		const index = masksHelmets.findIndex(c => c.id === maskHelmet.id)
		maskHelmet.flag = payload
		masksHelmets.splice(index, 1)
		masksHelmets.push(maskHelmet)
	},
	[SET_HELMET](state, payload) {
		const id = payload.id || Date.now()
		state.maskHelmet = {
			id: id,
			type: payload.type,
			pressure: payload.pressure,
			flowrate: payload.flowrate,
			manufactured: payload.manufactured,
			flag: payload.flag
		}
	},
	[REMOVE_HELMET]({ masksHelmets }, payload) {
		const index = masksHelmets.findIndex(b => b.id === payload)
		masksHelmets.splice(index, 1)
	},
	[RESET_HELMET_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[RESET_HELMET_FIELDS](state) {
		state.maskHelmet = getDefaultFieldsValues()
	}
}
