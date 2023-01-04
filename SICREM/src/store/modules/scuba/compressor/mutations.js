import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_COMPRESSOR_TYPE = 'SET_COMPRESSOR_TYPE'
export const SET_COMPRESSOR_PRESSURE = 'SET_COMPRESSOR_PRESSURE'
export const SET_COMPRESSOR_FLOWRATE = 'SET_COMPRESSOR_FLOWRATE'
export const SET_COMPRESSOR_NUMBER = 'SET_COMPRESSOR_NUMBER'
export const SET_COMPRESSOR_MANUFACTURER = 'SET_COMPRESSOR_MANUFACTURER'
export const SET_COMPRESSOR_MODEL = 'SET_COMPRESSOR_MODEL'
export const SET_COMPRESSORS = 'SET_COMPRESSORS'
export const ADD_COMPRESSOR = 'ADD_COMPRESSOR'
export const EDIT_COMPRESSOR = 'EDIT_COMPRESSOR'
export const SET_COMPRESSOR = 'SET_COMPRESSOR'
export const REMOVE_COMPRESSOR = 'REMOVE_COMPRESSOR'

export const RESET_COMPRESSOR_FIELDS = 'RESET_COMPRESSOR_FIELDS'
export const RESET_COMPRESSOR_STATE = 'RESET_COMPRESSOR_STATE'

export default {
	[SET_COMPRESSOR_TYPE]({ compressor }, payload) {
		compressor.type = payload
	},
	[SET_COMPRESSOR_PRESSURE]({ compressor }, payload) {
		compressor.pressure = payload
	},
	[SET_COMPRESSOR_FLOWRATE]({ compressor }, payload) {
		compressor.flowrate = payload
	},
	[SET_COMPRESSOR_NUMBER]({ compressor }, payload) {
		compressor.manufactured.idNumber = payload
	},
	[SET_COMPRESSOR_MANUFACTURER]({ compressor }, payload) {
		compressor.manufactured.manufacturer = payload
	},
	[SET_COMPRESSOR_MODEL]({ compressor }, payload) {
		compressor.manufactured.model = payload
	},
	[SET_COMPRESSORS]({ compressors }, payload = []) {
		compressors.splice(0, payload.length)
		compressors.push(...payload)
	},
	[ADD_COMPRESSOR]({ compressors, compressor }) {
		compressor.id = Date.now()
		compressors.push(compressor)
	},
	[EDIT_COMPRESSOR]({ compressors, compressor }, payload) {
		const index = compressors.findIndex(c => c.id === compressor.id)
		compressor.flag = payload
		compressors.splice(index, 1)
		compressors.push(compressor)
	},
	[SET_COMPRESSOR](state, payload) {
		const id = payload.id || Date.now()
		state.compressor = {
			id: id,
			type: payload.type,
			pressure: payload.pressure,
			flowrate: payload.flowrate,
			manufactured: payload.manufactured,
			flag: payload.flag
		}
	},
	[REMOVE_COMPRESSOR]({ compressors }, payload) {
		const index = compressors.findIndex(b => b.id === payload)
		compressors.splice(index, 1)
	},
	[RESET_COMPRESSOR_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[RESET_COMPRESSOR_FIELDS](state) {
		state.compressor = getDefaultFieldsValues()
	}
}
