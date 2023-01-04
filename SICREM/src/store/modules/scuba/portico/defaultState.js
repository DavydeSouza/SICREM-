export const getDefaultFieldsValues = () => {
	return {
		id: undefined,
		flag: undefined,
		manufactured: {
			idNumber: undefined,
			manufacturer: undefined,
			model: undefined
		},
		conformity: {
			declarationNumber: undefined,
			expiration: undefined,
			issuedBy: undefined
		},
		workLoad: undefined,
		material: undefined
	}
}

export const getDefaultState = () => {
	return {
		portico: getDefaultFieldsValues(),
		porticos: []
	}
}
