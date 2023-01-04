export const getDefaultFieldsValues = () => {
	return {
		id: undefined,
		soundImageRecorder: false,
		intercom: false,
		diversSuppliedByIntercoms: undefined,
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
		comunicator: getDefaultFieldsValues(),
		comunicators: []
	}
}
