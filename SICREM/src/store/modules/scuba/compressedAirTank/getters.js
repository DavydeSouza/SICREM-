export default {
	compressedsAirTanks: state => {
		return state.compressedsAirTanks
	},
	editingCompressedAirTank: state => {
		return state.compressedAirTank.flag === 'editing'
	}
}
