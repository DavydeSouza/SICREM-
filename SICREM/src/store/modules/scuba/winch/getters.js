export default {
	winchs: state => {
		return state.winchs
	},
	editingWinch: state => {
		return state.winch.flag === 'editing'
	}
}
