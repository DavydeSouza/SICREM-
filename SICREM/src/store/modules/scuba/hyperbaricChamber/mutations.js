import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_HYPERBARIC_WORKPRESSURE = 'SET_HYPERBARIC_WORKPRESSURE'
export const SET_HYPERBARIC_TESTPRESSURE = 'SET_HYPERBARIC_TESTPRESSURE'
export const SET_HYPERBARIC_DIMENSIONS = 'SET_HYPERBARIC_DIMENSIONS'
export const SET_HYPERBARIC_DESCRIPTION = 'SET_HYPERBARIC_DESCRIPTION'
export const SET_HYPERBARIC_NUMBER = 'SET_HYPERBARIC_NUMBER'
export const SET_HYPERBARIC_MANUFACTURER = 'SET_HYPERBARIC_MANUFACTURER'
export const SET_HYPERBARIC_MODEL = 'SET_HYPERBARIC_MODEL'
export const SET_HYPERBARIC_DECLARATION = 'SET_HYPERBARIC_DECLARATION'
export const SET_HYPERBARIC_EXPIRATION = 'SET_HYPERBARIC_EXPIRATION'
export const SET_HYPERBARIC_ISSUEDBY = 'SET_HYPERBARIC_ISSUEDBY'
export const SET_HYPERBARICS = 'SET_HYPERBARICS'
export const ADD_HYPERBARIC = 'ADD_HYPERBARIC'
export const EDIT_HYPERBARIC = 'EDIT_HYPERBARIC'
export const SET_HYPERBARIC = 'SET_HYPERBARIC'
export const REMOVE_HYPERBARIC = 'REMOVE_HYPERBARIC'

export const RESET_HYPERBARIC_FIELDS = 'RESET_HYPERBARIC_FIELDS'
export const RESET_HYPERBARIC_STATE = 'RESET_HYPERBARIC_STATE'

export default {
	[SET_HYPERBARIC_WORKPRESSURE]({ hyperbaricChamber }, payload) {
		hyperbaricChamber.workPressure = payload
	},
	[SET_HYPERBARIC_TESTPRESSURE]({ hyperbaricChamber }, payload) {
		hyperbaricChamber.testPressure = payload
	},
	[SET_HYPERBARIC_DIMENSIONS]({ hyperbaricChamber }, payload) {
		hyperbaricChamber.dimensions = payload
	},
	[SET_HYPERBARIC_DESCRIPTION]({ hyperbaricChamber }, payload) {
		hyperbaricChamber.description = payload
	},
	[SET_HYPERBARIC_NUMBER]({ hyperbaricChamber }, payload) {
		hyperbaricChamber.manufactured.idNumber = payload
	},
	[SET_HYPERBARIC_MANUFACTURER]({ hyperbaricChamber }, payload) {
		hyperbaricChamber.manufactured.manufacturer = payload
	},
	[SET_HYPERBARIC_MODEL]({ hyperbaricChamber }, payload) {
		hyperbaricChamber.manufactured.model = payload
	},
	[SET_HYPERBARIC_DECLARATION]({ hyperbaricChamber }, payload) {
		hyperbaricChamber.conformity.declarationNumber = payload
	},
	[SET_HYPERBARIC_EXPIRATION]({ hyperbaricChamber }, payload) {
		hyperbaricChamber.conformity.expiration = payload
	},
	[SET_HYPERBARIC_ISSUEDBY]({ hyperbaricChamber }, payload) {
		hyperbaricChamber.conformity.issuedBy = payload
	},
	[SET_HYPERBARICS]({ hyperbaricsChambers }, payload = []) {
		hyperbaricsChambers.splice(0, payload.length)
		hyperbaricsChambers.push(...payload)
	},
	[ADD_HYPERBARIC]({ hyperbaricsChambers, hyperbaricChamber }) {
		hyperbaricChamber.id = Date.now()
		hyperbaricsChambers.push(hyperbaricChamber)
	},
	[EDIT_HYPERBARIC]({ hyperbaricsChambers, hyperbaricChamber }, payload) {
		const index = hyperbaricsChambers.findIndex(
			c => c.id === hyperbaricChamber.id
		)
		hyperbaricChamber.flag = payload
		hyperbaricsChambers.splice(index, 1)
		hyperbaricsChambers.push(hyperbaricChamber)
	},
	[SET_HYPERBARIC](state, payload) {
		const id = payload.id || Date.now()
		state.hyperbaricChamber = {
			id: id,
			manufactured: payload.manufactured,
			conformity: payload.conformity,
			flag: payload.flag,
			workPressure: payload.workPressure,
			testPressure: payload.testPressure,
			dimensions: payload.dimensions,
			description: payload.description
		}
	},
	[REMOVE_HYPERBARIC]({ hyperbaricsChambers }, payload) {
		const index = hyperbaricsChambers.findIndex(b => b.id === payload)
		hyperbaricsChambers.splice(index, 1)
	},
	[RESET_HYPERBARIC_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[RESET_HYPERBARIC_FIELDS](state) {
		state.hyperbaricChamber = getDefaultFieldsValues()
	}
}
