import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_WINCH_CABLE = 'SET_WINCH_CABLE'
export const SET_WINCH_WORKLOAD = 'SET_WINCH_WORKLOAD'
export const SET_WINCH_TESTLOAD = 'SET_WINCH_TESTLOAD'
export const SET_WINCH_NUMBER = 'SET_WINCH_NUMBER'
export const SET_WINCH_MANUFACTURER = 'SET_WINCH_MANUFACTURER'
export const SET_WINCH_MODEL = 'SET_WINCH_MODEL'
export const SET_WINCH_DECLARATION = 'SET_WINCH_DECLARATION'
export const SET_WINCH_EXPIRATION = 'SET_WINCH_EXPIRATION'
export const SET_WINCH_ISSUEDBY = 'SET_WINCH_ISSUEDBY'
export const SET_WINCHS = 'SET_WINCHS'
export const ADD_WINCH = 'ADD_WINCH'
export const EDIT_WINCH = 'EDIT_WINCH'
export const REMOVE_WINCH = 'REMOVE_WINCH'
export const SET_WINCH = 'SET_WINCH'

export const RESET_WINCH_FIELDS = 'RESET_WINCH_FIELDS'
export const RESET_WINCH_STATE = 'RESET_WINCH_STATE'

export default {
	[SET_WINCH_CABLE]({ winch }, payload) {
		winch.cableSpecification = payload
	},
	[SET_WINCH_WORKLOAD]({ winch }, payload) {
		winch.workLoad = payload
	},
	[SET_WINCH_TESTLOAD]({ winch }, payload) {
		winch.testLoad = payload
	},
	[SET_WINCH_NUMBER]({ winch }, payload) {
		winch.manufactured.idNumber = payload
	},
	[SET_WINCH_MANUFACTURER]({ winch }, payload) {
		winch.manufactured.manufacturer = payload
	},
	[SET_WINCH_MODEL]({ winch }, payload) {
		winch.manufactured.model = payload
	},
	[SET_WINCH_DECLARATION]({ winch }, payload) {
		winch.conformity.declarationNumber = payload
	},
	[SET_WINCH_EXPIRATION]({ winch }, payload) {
		winch.conformity.expiration = payload
	},
	[SET_WINCH_ISSUEDBY]({ winch }, payload) {
		winch.conformity.issuedBy = payload
	},
	[SET_WINCHS]({ winchs }, payload = []) {
		winchs.splice(0, payload.length)
		winchs.push(...payload)
	},
	[ADD_WINCH]({ winchs, winch }) {
		winch.id = Date.now()
		winchs.push(winch)
	},
	[EDIT_WINCH]({ winchs, winch }, payload) {
		const index = winchs.findIndex(c => c.id === winch.id)
		winch.flag = payload
		winchs.splice(index, 1)
		winchs.push(winch)
	},
	[SET_WINCH](state, payload) {
		const id = payload.id || Date.now()
		state.winch = {
			id: id,
			flag: payload.flag,
			manufactured: payload.manufactured,
			conformity: payload.conformity,
			cableSpecification: payload.workLoad,
			workLoad: payload.workLoad,
			testLoad: payload.testLoad
		}
	},
	[REMOVE_WINCH]({ winchs }, payload) {
		const index = winchs.findIndex(b => b.id === payload)
		winchs.splice(index, 1)
	},
	[RESET_WINCH_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[RESET_WINCH_FIELDS](state) {
		state.winch = getDefaultFieldsValues()
	}
}
