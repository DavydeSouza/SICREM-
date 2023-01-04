export default {
	compressors: state => {
		return state.compressors
	},
	editingCompressor: state => {
		return state.compressor.flag === 'editing'
	}
}
