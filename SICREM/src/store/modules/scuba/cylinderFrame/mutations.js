import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_FRAME_QTD = 'SET_FRAME_QTD'
export const SET_FRAME_PRESSURE = 'SET_FRAME_PRESSURE'
export const SET_FRAME_CAPACITY = 'SET_FRAME_CAPACITY'
export const SET_FRAME_NUMBER = 'SET_FRAME_NUMBER'
export const SET_FRAME_MANUFACTURER = 'SET_FRAME_MANUFACTURER'
export const SET_FRAME_MODEL = 'SET_FRAME_MODEL'
export const SET_FRAMES = 'SET_FRAMES'
export const ADD_FRAME = 'ADD_FRAME'
export const EDIT_FRAME = 'EDIT_FRAME'
export const SET_FRAME = 'SET_FRAME'
export const REMOVE_FRAME = 'REMOVE_FRAME'

export const RESET_FRAME_FIELDS = 'RESET_FRAME_FIELDS'
export const RESET_FRAME_STATE = 'RESET_FRAME_STATE'

export default {
	[SET_FRAME_QTD]({ cylinderFrame }, payload) {
		cylinderFrame.numberCylinders = payload
	},
	[SET_FRAME_PRESSURE]({ cylinderFrame }, payload) {
		cylinderFrame.pressure = payload
	},
	[SET_FRAME_CAPACITY]({ cylinderFrame }, payload) {
		cylinderFrame.capacityEachCylinder = payload
	},
	[SET_FRAME_NUMBER]({ cylinderFrame }, payload) {
		cylinderFrame.manufactured.idNumber = payload
	},
	[SET_FRAME_MANUFACTURER]({ cylinderFrame }, payload) {
		cylinderFrame.manufactured.manufacturer = payload
	},
	[SET_FRAME_MODEL]({ cylinderFrame }, payload) {
		cylinderFrame.manufactured.model = payload
	},
	[SET_FRAMES]({ cylindersFrames }, payload = []) {
		cylindersFrames.splice(0, payload.length)
		cylindersFrames.push(...payload)
	},
	[ADD_FRAME]({ cylindersFrames, cylinderFrame }) {
		cylinderFrame.id = Date.now()
		cylindersFrames.push(cylinderFrame)
	},
	[EDIT_FRAME]({ cylindersFrames, cylinderFrame }, payload) {
		const index = cylindersFrames.findIndex(c => c.id === cylinderFrame.id)
		cylinderFrame.flag = payload
		cylindersFrames.splice(index, 1)
		cylindersFrames.push(cylinderFrame)
	},
	[SET_FRAME](state, payload) {
		const id = payload.id || Date.now()
		state.cylinderFrame = {
			id: id,
			numberCylinders: payload.numberCylinders,
			pressure: payload.pressure,
			capacityEachCylinder: payload.capacityEachCylinder,
			manufactured: payload.manufactured,
			flag: payload.flag
		}
	},
	[REMOVE_FRAME]({ cylindersFrames }, payload) {
		const index = cylindersFrames.findIndex(b => b.id === payload)
		cylindersFrames.splice(index, 1)
	},
	[RESET_FRAME_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[RESET_FRAME_FIELDS](state) {
		state.cylinderFrame = getDefaultFieldsValues()
	}
}
