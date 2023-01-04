export default {
	baskets: state => {
		return state.baskets
	},
	editingBasket: state => {
		return state.basket.flag === 'editing'
	}
}
