import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_CONTROL_PANEL_DIVES = 'SET_CONTROL_PANEL_DIVES'
export const SET_CONTROL_PANEL_PNEUMATICMETER =
	'SET_CONTROL_PANEL_PNEUMATICMETER'
export const SET_CONTROL_PANEL_NUMBER = 'SET_CONTROL_PANEL_NUMBER'
export const SET_CONTROL_PANEL_MANUFACTURER = 'SET_CONTROL_PANEL_MANUFACTURER'
export const SET_CONTROL_PANEL_MODEL = 'SET_CONTROL_PANEL_MODEL'
export const SET_CONTROL_PANELS = 'SET_CONTROL_PANELS'
export const ADD_CONTROL_PANEL = 'ADD_CONTROL_PANEL'
export const EDIT_CONTROL_PANEL = 'EDIT_CONTROL_PANEL'
export const SET_CONTROL_PANEL = 'SET_CONTROL_PANEL'
export const REMOVE_CONTROL_PANEL = 'REMOVE_CONTROL_PANEL'

export const RESET_CONTROL_PANEL_FIELDS = 'RESET_CONTROL_PANEL_FIELDS'
export const RESET_CONTROL_PANEL_STATE = 'RESET_CONTROL_PANEL_STATE'

export default {
	[SET_CONTROL_PANEL_DIVES]({ controlPanel }, payload) {
		controlPanel.diversSupplied = payload
	},
	[SET_CONTROL_PANEL_PNEUMATICMETER]({ controlPanel }, payload) {
		controlPanel.pneumaticMeter = payload
	},
	[SET_CONTROL_PANEL_NUMBER]({ controlPanel }, payload) {
		controlPanel.manufactured.idNumber = payload
	},
	[SET_CONTROL_PANEL_MANUFACTURER]({ controlPanel }, payload) {
		controlPanel.manufactured.manufacturer = payload
	},
	[SET_CONTROL_PANEL_MODEL]({ controlPanel }, payload) {
		controlPanel.manufactured.model = payload
	},
	[SET_CONTROL_PANELS]({ controlPanels }, payload = []) {
		controlPanels.splice(0, payload.length)
		controlPanels.push(...payload)
	},
	[ADD_CONTROL_PANEL]({ controlPanels, controlPanel }) {
		controlPanel.id = Date.now()
		controlPanels.push(controlPanel)
	},
	[EDIT_CONTROL_PANEL]({ controlPanels, controlPanel }, payload) {
		const index = controlPanels.findIndex(c => c.id === controlPanel.id)
		controlPanel.flag = payload
		controlPanels.splice(index, 1)
		controlPanels.push(controlPanel)
	},
	[SET_CONTROL_PANEL](state, payload) {
		const id = payload.id || Date.now()
		state.controlPanel = {
			id: id,
			diversSupplied: payload.diversSupplied,
			pneumaticMeter: payload.pneumaticMeter,
			manufactured: payload.manufactured,
			flag: payload.flag
		}
	},
	[RESET_CONTROL_PANEL_FIELDS](state) {
		state.controlPanel = {
			id: undefined,
			diversSupplied: undefined,
			pneumaticMeter: undefined
		}
		state.controlPanel.manufactured = {
			idNumber: undefined,
			manufacturer: undefined,
			model: undefined
		}
	},
	[REMOVE_CONTROL_PANEL]({ controlPanels }, payload) {
		const index = controlPanels.findIndex(b => b.id === payload)
		controlPanels.splice(index, 1)
	},
	[RESET_CONTROL_PANEL_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[RESET_CONTROL_PANEL_FIELDS](state) {
		state.controlPanel = getDefaultFieldsValues()
	}
}
