export const getDefaultFieldsValues = () => {
	return {
		id: undefined,
		pneumaticMeter: false,
		diversSupplied: undefined,
		flag: undefined,
		manufactured: {
			idNumber: undefined,
			manufacturer: undefined,
			model: undefined
		}
	}
}

export const getDefaultState = () => {
	return {
		controlPanel: getDefaultFieldsValues(),
		controlPanels: []
	}
}
