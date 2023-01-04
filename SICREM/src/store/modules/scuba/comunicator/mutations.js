import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_COMUNICATOR_DIVES = 'SET_COMUNICATOR_DIVES'
export const SET_COMUNICATOR_RECORDER = 'SET_COMUNICATOR_RECORDER'
export const SET_COMUNICATOR_INTERCOM = 'SET_COMUNICATOR_INTERCOM'
export const SET_COMUNICATOR_NUMBER = 'SET_COMUNICATOR_NUMBER'
export const SET_COMUNICATOR_MANUFACTURER = 'SET_COMUNICATOR_MANUFACTURER'
export const SET_COMUNICATOR_MODEL = 'SET_COMUNICATOR_MODEL'
export const SET_COMUNICATORS = 'SET_COMUNICATORS'
export const ADD_COMUNICATOR = 'ADD_COMUNICATOR'
export const EDIT_COMUNICATOR = 'EDIT_COMUNICATOR'
export const REMOVE_COMUNICATOR = 'REMOVE_COMUNICATOR'
export const SET_COMUNICATOR = 'SET_COMUNICATOR'

export const RESET_COMUNICATOR_FIELDS = 'RESET_COMUNICATOR_FIELDS'
export const RESET_COMUNICATOR_STATE = 'RESET_COMUNICATOR_STATE'

export default {
	[SET_COMUNICATOR_DIVES]({ comunicator }, payload) {
		comunicator.diversSuppliedByIntercoms = payload
	},
	[SET_COMUNICATOR_RECORDER]({ comunicator }, payload) {
		comunicator.soundImageRecorder = payload
	},
	[SET_COMUNICATOR_INTERCOM]({ comunicator }, payload) {
		comunicator.intercom = payload
	},
	[SET_COMUNICATOR_NUMBER]({ comunicator }, payload) {
		comunicator.manufactured.idNumber = payload
	},
	[SET_COMUNICATOR_MANUFACTURER]({ comunicator }, payload) {
		comunicator.manufactured.manufacturer = payload
	},
	[SET_COMUNICATOR_MODEL]({ comunicator }, payload) {
		comunicator.manufactured.model = payload
	},
	[SET_COMUNICATORS]({ comunicators }, payload = []) {
		comunicators.splice(0, payload.length)
		comunicators.push(...payload)
	},
	[ADD_COMUNICATOR]({ comunicators, comunicator }) {
		comunicator.id = Date.now()
		comunicators.push(comunicator)
	},
	[EDIT_COMUNICATOR]({ comunicators, comunicator }, payload) {
		const index = comunicators.findIndex(c => c.id === comunicator.id)
		comunicator.flag = payload
		comunicators.splice(index, 1)
		comunicators.push(comunicator)
	},
	[SET_COMUNICATOR](state, payload) {
		const id = payload.id || Date.now()
		state.comunicator = {
			id: id,
			diversSuppliedByIntercoms: payload.diversSuppliedByIntercoms,
			soundImageRecorder: payload.soundImageRecorder,
			intercom: payload.intercom,
			manufactured: payload.manufactured,
			flag: payload.flag
		}
	},
	[RESET_COMUNICATOR_FIELDS](state) {
		state.comunicator = {
			id: undefined,
			diversSuppliedByIntercoms: undefined,
			soundImageRecorder: undefined,
			intercom: undefined
		}
		state.comunicator.manufactured = {
			idNumber: undefined,
			manufacturer: undefined,
			model: undefined
		}
	},
	[REMOVE_COMUNICATOR]({ comunicators }, payload) {
		const index = comunicators.findIndex(b => b.id === payload)
		comunicators.splice(index, 1)
	},
	[RESET_COMUNICATOR_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[RESET_COMUNICATOR_FIELDS](state) {
		state.comunicator = getDefaultFieldsValues()
	}
}
