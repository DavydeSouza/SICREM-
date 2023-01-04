export default {
	masksHelmets: state => {
		return state.masksHelmets
	},
	editingMaskHelmet: state => {
		return state.maskHelmet.flag === 'editing'
	}
}
