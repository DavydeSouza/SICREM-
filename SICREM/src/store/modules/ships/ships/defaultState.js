export const getDefaultFieldsValues = () => {
	return {
		id: undefined,
		cbesid: undefined,
		name: undefined,
		constructionyear: undefined,
		updateyear: null,

		callsign: undefined,
		registrationnumber: undefined,
		imonumber: undefined,
		hullcode: undefined,

		haspropulsion: false,
		solas: false,
		charteredforeign: false,
		shipowner: null
	}
}

export const getDefaultState = () => {
	return {
		total: 0,
		ship: getDefaultFieldsValues(),
		ships: []
	}
}
