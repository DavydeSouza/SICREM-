export const getDefaultFieldsValues = () => {
	return {
		id: undefined,
		type: undefined,
		manufactured: {
			idNumber: undefined,
			manufacturer: undefined,
			model: undefined
		}
	}
}

export const getDefaultState = () => {
	return {
		maskHelmet: getDefaultFieldsValues(),
		masksHelmets: []
	}
}
