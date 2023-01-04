import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_INFOS_FIELD = 'SET_INFOS_FIELD'
export const SET_OTHER_INFOS = 'SET_OTHER_INFOS'
export const RESET_OTHER_INFOS_FIELDS = 'RESET_OTHER_INFOS_FIELDS'
export const RESET_OTHER_INFOS_STATE = 'RESET_OTHER_INFOS_STATE'

export default {
	[SET_INFOS_FIELD]({ otherInfos }, payload) {
		const value = parseInt(payload.value)
		otherInfos[payload.field] = value > 0
	},
	[SET_OTHER_INFOS](state, payload) {
		state.otherInfos = payload
	},
	[RESET_OTHER_INFOS_FIELDS](state) {
		state.otherInfos = getDefaultFieldsValues()
	},
	[RESET_OTHER_INFOS_STATE](state) {
		Object.assign(state, getDefaultState())
	}
}
