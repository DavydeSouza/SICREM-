export const getDefaultFieldsValues = () => {
	return {
		id: null,
		diameter: null,
		escale: null,
		type: null,
		local: null,
		flag: null,
		manufactured: {
			idNumber: null,
			manufacturer: null,
			model: null
		}
	}
}

export const getDefaultState = () => {
	return {
		depthGauge: getDefaultFieldsValues(),
		depthGauges: []
	}
}
