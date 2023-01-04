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
		diving: false,
		access: false
	}
}

export const getDefaultState = () => {
	return {
		basket: getDefaultFieldsValues(),
		baskets: []
	}
}
