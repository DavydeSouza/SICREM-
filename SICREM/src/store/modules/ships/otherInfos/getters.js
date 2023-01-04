export default {
	infosAreInvalid(state) {
		const index = Object.values(state.otherInfos).findIndex(
			values => values === undefined
		)
		return index > -1
	}
}
