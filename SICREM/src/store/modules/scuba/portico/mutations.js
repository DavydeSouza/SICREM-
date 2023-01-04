import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_PORTICO_WORKLOAD = 'SET_PORTICO_WORKLOAD'
export const SET_PORTICO_MATERIAL = 'SET_PORTICO_MATERIAL'
export const SET_PORTICO_NUMBER = 'SET_PORTICO_NUMBER'
export const SET_PORTICO_MANUFACTURER = 'SET_PORTICO_MANUFACTURER'
export const SET_PORTICO_MODEL = 'SET_PORTICO_MODEL'
export const SET_PORTICO_DECLARATION = 'SET_PORTICO_DECLARATION'
export const SET_PORTICO_EXPIRATION = 'SET_PORTICO_EXPIRATION'
export const SET_PORTICO_ISSUEDBY = 'SET_PORTICO_ISSUEDBY'
export const SET_PORTICOS = 'SET_PORTICOS'
export const ADD_PORTICO = 'ADD_PORTICO'
export const EDIT_PORTICO = 'EDIT_PORTICO'
export const SET_PORTICO = 'SET_PORTICO'
export const REMOVE_PORTICO = 'REMOVE_PORTICO'

export const RESET_PORTICO_FIELDS = 'RESET_PORTICO_FIELDS'
export const RESET_PORTICO_STATE = 'RESET_PORTICO_STATE'

export default {
	[SET_PORTICO_WORKLOAD]({ portico }, payload) {
		portico.workLoad = payload
	},
	[SET_PORTICO_MATERIAL]({ portico }, payload) {
		portico.material = payload
	},
	[SET_PORTICO_NUMBER]({ portico }, payload) {
		portico.manufactured.idNumber = payload
	},
	[SET_PORTICO_MANUFACTURER]({ portico }, payload) {
		portico.manufactured.manufacturer = payload
	},
	[SET_PORTICO_MODEL]({ portico }, payload) {
		portico.manufactured.model = payload
	},
	[SET_PORTICO_DECLARATION]({ portico }, payload) {
		portico.conformity.declarationNumber = payload
	},
	[SET_PORTICO_EXPIRATION]({ portico }, payload) {
		portico.conformity.expiration = payload
	},
	[SET_PORTICO_ISSUEDBY]({ portico }, payload) {
		portico.conformity.issuedBy = payload
	},
	[SET_PORTICOS]({ porticos }, payload = []) {
		porticos.splice(0, payload.length)
		porticos.push(...payload)
	},
	[ADD_PORTICO]({ porticos, portico }) {
		portico.id = Date.now()
		porticos.push(portico)
	},
	[EDIT_PORTICO]({ porticos, portico }, payload) {
		const index = porticos.findIndex(c => c.id === portico.id)
		portico.flag = payload
		porticos.splice(index, 1)
		porticos.push(portico)
	},
	[SET_PORTICO](state, payload) {
		const id = payload.id || Date.now()
		state.portico = {
			id: id,
			flag: payload.flag,
			manufactured: payload.manufactured,
			conformity: payload.conformity,
			workLoad: payload.workLoad,
			material: payload.material
		}
	},
	[REMOVE_PORTICO]({ porticos }, payload) {
		const index = porticos.findIndex(b => b.id === payload)
		porticos.splice(index, 1)
	},
	[RESET_PORTICO_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[RESET_PORTICO_FIELDS](state) {
		state.portico = getDefaultFieldsValues()
	}
}
