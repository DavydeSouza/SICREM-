import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_DEPTH_GAUGE_FIELD = 'SET_DEPTH_GAUGE_FIELD'
export const SET_DEPTH_GAUGE_MANU_FIELD = 'SET_DEPTH_GAUGE_MANU_FIELD'
export const SET_ADD_DEPTH_GAUGES = 'SET_ADD_DEPTH_GAUGES'
export const ADD_DEPTH_GAUGE = 'ADD_DEPTH_GAUGE'
export const SET_DEPTH_GAUGE = 'SET_DEPTH_GAUGE'
export const EDIT_DEPTH_GAUGE = 'EDIT_DEPTH_GAUGE'
export const REMOVE_DEPTH_GAUGE = 'REMOVE_DEPTH_GAUGE'

export const RESET_DEPTH_GAUGE_FIELDS = 'RESET_DEPTH_GAUGE_FIELDS'
export const RESET_DEPTH_GAUGE_STATE = 'RESET_DEPTH_GAUGE_STATE'

export default {
	[SET_DEPTH_GAUGE_FIELD]({ depthGauge }, payload) {
		depthGauge[payload.field] = payload.value
	},
	[SET_DEPTH_GAUGE_MANU_FIELD]({ depthGauge }, payload) {
		depthGauge.manufactured[payload.field] = payload.value
	},
	[SET_ADD_DEPTH_GAUGES]({ depthGauges }, payload = []) {
		depthGauges.splice(0, payload.length)
		depthGauges.push(...payload)
	},
	[ADD_DEPTH_GAUGE]({ depthGauges, depthGauge }) {
		depthGauge.id = Date.now()
		depthGauges.push(depthGauge)
	},
	[SET_DEPTH_GAUGE](state, payload) {
		const id = payload.id || Date.now()
		state.depthGauge = {
			id: id,
			diameter: payload.diameter,
			escale: payload.escale,
			local: payload.local,
			type: payload.type,
			manufactured: payload.manufactured,
			flag: payload.flag
		}
	},
	[EDIT_DEPTH_GAUGE]({ depthGauges, depthGauge }, payload) {
		const index = depthGauges.findIndex(c => c.id === depthGauge.id)
		depthGauge.flag = payload
		depthGauges.splice(index, 1)
		depthGauges.push(depthGauge)
	},
	[REMOVE_DEPTH_GAUGE]({ depthGauges }, payload) {
		const index = depthGauges.findIndex(b => b.id === payload)
		depthGauges.splice(index, 1)
	},
	[RESET_DEPTH_GAUGE_STATE](state) {
		Object.assign(state, getDefaultState())
	},
	[RESET_DEPTH_GAUGE_FIELDS](state) {
		state.depthGauge = getDefaultFieldsValues()
	}
}
