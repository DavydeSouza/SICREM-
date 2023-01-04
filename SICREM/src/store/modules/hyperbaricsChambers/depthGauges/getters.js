export default {
	depthGauges: state => {
		return state.depthGauges
	},
	editingDepthGauge: state => {
		return state.depthGauge.flag === 'editing'
	}
}
