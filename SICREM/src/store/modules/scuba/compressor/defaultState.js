export const getDefaultFieldsValues = () => {
	return {
		id: undefined,
		type: undefined,
		pressure: undefined,
		flowrate: undefined,
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
		compressor: getDefaultFieldsValues(),
		compressors: []
	}
}
