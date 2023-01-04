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
		workPressure: undefined,
		testPressure: undefined,
		dimensions: undefined,
		description: undefined
	}
}

export const getDefaultState = () => {
	return {
		hyperbaricChamber: getDefaultFieldsValues(),
		hyperbaricsChambers: []
	}
}
