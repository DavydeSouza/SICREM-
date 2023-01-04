import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_GTF_FIELD = 'SET_GTF_FIELD'
export const SET_GTF_PORTS = 'SET_GTF_PORTS'
export const RESET_GTF_PORTS = 'RESET_GTF_PORTS'
export const SET_GTF = 'SET_GTF'
export const RESET_GTF_FIELDS = 'RESET_GTF_FIELDS'
export const RESET_GTF_STATE = 'RESET_GTF_STATE'

export default {
	[SET_GTF_FIELD]({ gtf }, payload) {
		gtf[payload.field] = payload.value
	},
	[SET_GTF_PORTS]({ ports }, payload) {
		ports.splice(0, payload.length)
		ports.push(...payload)
	},
	[RESET_GTF_PORTS]({ ports }, payload = []) {
		ports.splice(0, payload.length + 1)
	},
	[SET_GTF](state, payload) {
		state.gtf = payload
	},
	[RESET_GTF_FIELDS](state) {
		state.gtf = getDefaultFieldsValues()
	},
	[RESET_GTF_STATE](state) {
		Object.assign(state, getDefaultState())
	}
}
