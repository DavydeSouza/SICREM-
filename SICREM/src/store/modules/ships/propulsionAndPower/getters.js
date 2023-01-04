export default {
	propulsionsAndPowers(state) {
		return state.propulsionsAndPowers
	},
	editingProp: state => {
		return !!state.propulsionsAndPowers.find(p => p.flag === 'editing')
	}
}
