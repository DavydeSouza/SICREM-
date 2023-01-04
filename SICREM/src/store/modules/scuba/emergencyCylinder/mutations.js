import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_EMERGENCY_PRESSURE = 'SET_EMERGENCY_PRESSURE'
export const SET_EMERGENCY_CAPACITY = 'SET_EMERGENCY_CAPACITY'
export const SET_EMERGENCY_NUMBER = 'SET_EMERGENCY_NUMBER'
export const SET_EMERGENCY_MANUFACTURER = 'SET_EMERGENCY_MANUFACTURER'
export const SET_EMERGENCY_MODEL = 'SET_EMERGENCY_MODEL'
export const SET_EMERGENCYS = 'SET_EMERGENCYS'
export const ADD_EMERGENCY = 'ADD_EMERGENCY'
export const EDIT_EMERGENCY = 'EDIT_EMERGENCY'
export const SET_EMERGENCY = 'SET_EMERGENCY'
export const REMOVE_EMERGENCY = 'REMOVE_EMERGENCY'

export const RESET_EMERGENCY_FIELDS = 'RESET_EMERGENCY_FIELDS'
export const RESET_EMERGENCY_STATE = 'RESET_EMERGENCY_STATE'

export default {
	[SET_EMERGENCY_PRESSURE]({ emergencyCylinder }, payload) {
		emergencyCylinder.pressure = payload
	},
	[SET_EMERGENCY_CAPACITY]({ emergencyCylinder }, payload) {
		emergencyCylinder.capacity = payload
	},
	[SET_EMERGENCY_NUMBER]({ emergencyCylinder }, payload) {
		emergencyCylinder.manufactured.idNumber = payload
	},
	[SET_EMERGENCY_MANUFACTURER]({ emergencyCylinder }, payload) {
		emergencyCylinder.manufactured.manufacturer = payload
	},
	[SET_EMERGENCY_MODEL]({ emergencyCylinder }, payload) {
		emergencyCylinder.manufactured.model = payload
	},
	[SET_EMERGENCYS]({ emergencyCylinders }, payload = []) {
		emergencyCylinders.splice(0, payload.length)
		emergencyCylinders.push(...payload)
	},
	[ADD_EMERGENCY]({ emergencyCylinders, emergencyCylinder }) {
		emergencyCylinder.id = Date.now()
		emergencyCylinders.push(emergencyCylinder)
	},
	[EDIT_EMERGENCY]({ emergencyCylinders, emergencyCylinder }, payload) {
		const index = emergencyCylinders.findIndex(
			c => c.id === emergencyCylinder.id
		)
		emergencyCylinder.flag = payload
		emergencyCylinders.splice(index, 1)
		emergencyCylinders.push(emergencyCylinder)
	},
	[SET_EMERGENCY](state, payload) {
		const id = payload.id || Date.now()
		state.emergencyCylinder = {
			id: id,
			isDouble: payload.isDouble,
			pressure: payload.pressure,
			capacity: payload.capacity,
			manufactured: payload.manufactured,
			flag: payload.flag
		}
	},
	[RESET_EMERGENCY_FIELDS](state) {
		state.emergencyCylinder = {
			id: undefined,
			isDouble: undefined,
			pressure: undefined,
			capacity: undefined
		}
		state.emergencyCylinder.manufactured = {
			idNumber: undefined,
			manufacturer: undefined,
			model: undefined
		}
	},
	[REMOVE_EMERGENCY]({ emergencyCylinders }, payload) {
		const index = emergencyCylinders.findIndex(b => b.id === payload)
		emergencyCylinders.splice(index, 1)
	},
	[RESET_EMERGENCY_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[RESET_EMERGENCY_FIELDS](state) {
		state.emergencyCylinder = getDefaultFieldsValues()
	}
}
