export default {
	porticos: state => {
		return state.porticos
	},
	editingPortico: state => {
		return state.portico.flag === 'editing'
	}
}
