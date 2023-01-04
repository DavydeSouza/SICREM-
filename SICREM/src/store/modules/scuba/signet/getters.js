export default {
	signets: state => {
		return state.signets
	},
	editingSignet: state => {
		return state.signet.flag === 'editing'
	}
}
