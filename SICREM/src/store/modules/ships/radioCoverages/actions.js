export default {
	getAllRadioCoverages(context) {
		return context.state.radioCoveragesList
	},
	setRtcs({ commit }, payload) {
		commit('SET_CHECKEDS_RTC', payload)
	},
	resetRtcs({ commit }) {
		commit('RESET_CHECKEDS_RTC')
	},
	setRadioCovarages(context, payload = []) {
		context.commit('LOAD_CHECKEDS_RTC', payload)
	},
	resetRtcsFields({ commit }) {
		commit('RESET_RTC_FIELDS')
	},
	resetRtcsState({ commit }) {
		commit('RESET_RTC_STATE')
	}
}
