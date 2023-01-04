export default {
	validAreas(state) {
		return state.areas.filter(a => a)
	},

	freeBoardUnselecteds(state) {
		const selected = state.area.areaOrder
		return state.areas
			.filter(a => a.areaOrder !== selected)
			.sort((a, b) => a.areaOrder - b.areaOrder)
	}
}
