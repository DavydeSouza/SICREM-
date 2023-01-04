export const getDefaultFieldsValues = () => {
	return {
		id: undefined,
		capacity: undefined,
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
		emergencyCylinder: getDefaultFieldsValues(),
		emergencyCylinders: []
	}
}
