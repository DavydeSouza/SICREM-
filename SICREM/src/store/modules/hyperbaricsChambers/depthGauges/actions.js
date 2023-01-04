const EDITING_FLAG = 'editing'
const EDITED_FLAG = 'edited'

export default {
	setDepthGaugeField(context, payload = { valule: undefined, field: '' }) {
		context.commit(`SET_DEPTH_GAUGE_FIELD`, payload)
	},
	setDepthGaugeManuField(context, payload = { valule: undefined, field: '' }) {
		context.commit(`SET_DEPTH_GAUGE_MANU_FIELD`, payload)
	},
	setDepthGauges({ commit, dispatch }, payload) {
		commit('SET_ADD_DEPTH_GAUGES', payload)
		dispatch('resetDepthGaugeFields')
	},
	addDepthGauge({ commit, dispatch }) {
		commit('ADD_DEPTH_GAUGE')
		dispatch('resetDepthGaugeFields')
	},
	editDepthGauge({ commit, state }, payload) {
		const depthGauge = payload.id
			? state.depthGauges.find(c => c.id === payload.id)
			: payload
		if (depthGauge) {
			depthGauge.flag = EDITING_FLAG
			commit('SET_DEPTH_GAUGE', depthGauge)
		}
	},
	commitEditDepthGauge({ commit }) {
		commit('EDIT_DEPTH_GAUGE', EDITED_FLAG)
		commit('RESET_DEPTH_GAUGE_FIELDS')
	},
	resetDepthGaugeFields({ commit }, payload) {
		commit('RESET_DEPTH_GAUGE_FIELDS', payload)
	},
	resetDepthGaugeState({ commit }) {
		commit('RESET_DEPTH_GAUGE_STATE')
	},
	removeDepthGauge({ commit, state }, payload) {
		const depthGauge = state.depthGauges.find(d => d.id === payload)
		if (depthGauge) {
			commit('REMOVE_DEPTH_GAUGE', depthGauge.id)
		}
	}
}
