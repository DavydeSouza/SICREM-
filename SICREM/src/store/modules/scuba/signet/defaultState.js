export const getDefaultFieldsValues = () => {
	return {
		id: undefined,
		workLoad: undefined,
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
		}
	}
}

export const getDefaultState = () => {
	return {
		signet: getDefaultFieldsValues(),
		signets: []
	}
}
