import { getDefaultState, getDefaultFieldsValues } from './defaultState'

export const SET_CHECKEDS_RTC = 'SET_CHECKEDS_RTC'
export const LOAD_CHECKEDS_RTC = 'LOAD_CHECKEDS_RTC'
export const RESET_CHECKEDS_RTC = 'RESET_CHECKEDS_RTC'
export const RESET_RTC_FIELDS = 'RESET_RTC_FIELDS'
export const RESET_RTC_STATE = 'RESET_RTC_STATE'

export default {
	[SET_CHECKEDS_RTC]({ checkedRtcs }, payload) {
		const index = checkedRtcs.findIndex(rtc => rtc.name === payload.name)
		index < 0 ? checkedRtcs.push(payload) : checkedRtcs.splice(index, 1)
	},
	[LOAD_CHECKEDS_RTC]({ checkedRtcs = [] }, payload = []) {
		checkedRtcs.push(...payload)
	},
	[RESET_CHECKEDS_RTC]({ checkedRtcs }) {
		checkedRtcs.length = 0
	},
	[RESET_RTC_FIELDS](state) {
		state.radioCoveragesList = getDefaultFieldsValues()
	},
	[RESET_RTC_STATE](state) {
		Object.assign(state, getDefaultState())
	}
}
