export default {
	cylindersFrames: state => {
		return state.cylindersFrames
	},
	editingCylinderFrame: state => {
		return state.cylinderFrame.flag === 'editing'
	}
}
