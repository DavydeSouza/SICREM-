export default {
	systems: state => {
		return state.types.filter(c => !c.type !== 'cssm')
	},
	maxDepth: state => {
		if (state.certification) {
			const name = state.certification.maxdepth ? 'maxdepth' : 'maxDepth'
			return state.certification[name]
		}
		return 0
	}
}
