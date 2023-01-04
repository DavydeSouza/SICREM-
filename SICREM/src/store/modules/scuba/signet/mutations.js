import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_SIGNET_WORKLOAD = 'SET_SIGNET_WORKLOAD'
export const SET_SIGNET_NUMBER = 'SET_SIGNET_NUMBER'
export const SET_SIGNET_MANUFACTURER = 'SET_SIGNET_MANUFACTURER'
export const SET_SIGNET_MODEL = 'SET_SIGNET_MODEL'
export const SET_SIGNET_DECLARATION = 'SET_SIGNET_DECLARATION'
export const SET_SIGNET_EXPIRATION = 'SET_SIGNET_EXPIRATION'
export const SET_SIGNET_ISSUEDBY = 'SET_SIGNET_ISSUEDBY'
export const SET_SIGNETS = 'SET_SIGNETS'
export const ADD_SIGNET = 'ADD_SIGNET'
export const EDIT_SIGNET = 'EDIT_SIGNET'
export const SET_SIGNET = 'SET_SIGNET'
export const REMOVE_SIGNET = 'REMOVE_SIGNET'

export const RESET_SIGNET_FIELDS = 'RESET_SIGNET_FIELDS'
export const RESET_SIGNET_STATE = 'RESET_SIGNET_STATE'

export default {
	[SET_SIGNET_WORKLOAD]({ signet }, payload) {
		signet.workLoad = payload
	},
	[SET_SIGNET_NUMBER]({ signet }, payload) {
		signet.manufactured.idNumber = payload
	},
	[SET_SIGNET_MANUFACTURER]({ signet }, payload) {
		signet.manufactured.manufacturer = payload
	},
	[SET_SIGNET_MODEL]({ signet }, payload) {
		signet.manufactured.model = payload
	},
	[SET_SIGNET_DECLARATION]({ signet }, payload) {
		signet.conformity.declarationNumber = payload
	},
	[SET_SIGNET_EXPIRATION]({ signet }, payload) {
		signet.conformity.expiration = payload
	},
	[SET_SIGNET_ISSUEDBY]({ signet }, payload) {
		signet.conformity.issuedBy = payload
	},
	[SET_SIGNETS]({ signets }, payload = []) {
		signets.splice(0, payload.length)
		signets.push(...payload)
	},
	[ADD_SIGNET]({ signets, signet }) {
		signet.id = Date.now()
		signets.push(signet)
	},
	[EDIT_SIGNET]({ signets, signet }, payload) {
		const index = signets.findIndex(c => c.id === signet.id)
		signet.flag = payload
		signets.splice(index, 1)
		signets.push(signet)
	},
	[SET_SIGNET](state, payload) {
		const id = payload.id || Date.now()
		state.signet = {
			id: id,
			numberCylinders: payload.numberCylinders,
			pressure: payload.pressure,
			workLoad: payload.workLoad,
			manufactured: payload.manufactured,
			conformity: payload.conformity,
			flag: payload.flag
		}
	},
	[REMOVE_SIGNET]({ signets }, payload) {
		const index = signets.findIndex(b => b.id === payload)
		signets.splice(index, 1)
	},
	[RESET_SIGNET_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[RESET_SIGNET_FIELDS](state) {
		state.signet = getDefaultFieldsValues()
	}
}
