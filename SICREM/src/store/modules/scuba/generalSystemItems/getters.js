export default {
	ItemsAreInvalid(state) {
		const index = Object.values(state.generalSystemItems).findIndex(
			values => values === undefined
		)
		return index > -1
	}
}
