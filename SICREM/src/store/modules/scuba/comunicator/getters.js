export default {
	comunicators: state => {
		return state.comunicators
	},
	editingComunicator: state => {
		return state.comunicator.flag === 'editing'
	}
}
