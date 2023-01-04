export default {
	controlPanels: state => {
		return state.controlPanels
	},
	editingControlPanel: state => {
		return state.controlPanel.flag === 'editing'
	}
}
