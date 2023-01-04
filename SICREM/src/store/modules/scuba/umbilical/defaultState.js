export const getDefaultFieldsValues = () => {
	return {
		id: undefined,
		length: undefined,
		internalDiameter: undefined,
		pressure: undefined,
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
		umbilical: getDefaultFieldsValues(),
		umbilicals: []
	}
}
