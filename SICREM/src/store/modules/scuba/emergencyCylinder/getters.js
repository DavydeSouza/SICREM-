export default {
	emergencyCylinders: state => {
		return state.emergencyCylinders
	},
	editingEmergencyCylinder: state => {
		return state.emergencyCylinder.flag === 'editing'
	}
}
