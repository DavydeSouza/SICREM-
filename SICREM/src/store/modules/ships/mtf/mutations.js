import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_MTF_FIELD = 'SET_MTF_FIELD'
export const SET_MTF_DRAFT_FIELD = 'SET_MTF_DRAFT_FIELD'
export const SET_MTF = 'SET_MTF'
export const SET_MTF_DRAFT = 'SET_MTF_DRAFT'
export const RESET_MTF_FIELDS = 'RESET_MTF_FIELDS'
export const RESET_MTF_STATE = 'RESET_MTF_STATE'

export default {
	[SET_MTF_FIELD]({ mtf }, payload) {
		mtf[payload.field] = payload.value
	},
	[SET_MTF_DRAFT_FIELD]({ mtf }, payload) {
		mtf[payload.draft][payload.field] = payload.value
	},
	[SET_MTF](state, payload) {
		state.mtf = payload
	},
	[SET_MTF_DRAFT](state, payload = { draft: '', value: {} }) {
		state.mtf[payload.draft] = payload.value
	},
	[RESET_MTF_FIELDS](state) {
		state.mtf = getDefaultFieldsValues()
	},
	[RESET_MTF_STATE](state) {
		Object.assign(state, getDefaultState())
	}
}
