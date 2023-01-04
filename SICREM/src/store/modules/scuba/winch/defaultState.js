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
		cableSpecification: undefined,
		workLoad: undefined,
		testLoad: undefined
	}
}

export const getDefaultState = () => {
	return {
		winch: getDefaultFieldsValues(),
		winchs: []
	}
}
