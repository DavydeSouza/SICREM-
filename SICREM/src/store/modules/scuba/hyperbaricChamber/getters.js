export default {
	hyperbaricsChambers: state => {
		return state.hyperbaricsChambers
	},
	editingHyperbaricChamber: state => {
		return state.hyperbaricChamber.flag === 'editing'
	}
}
