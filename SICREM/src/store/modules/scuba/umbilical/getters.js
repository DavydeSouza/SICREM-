export default {
	umbilicals: state => {
		return state.umbilicals
	},
	editingUmbilical: state => {
		return state.umbilical.flag === 'editing'
	}
}
