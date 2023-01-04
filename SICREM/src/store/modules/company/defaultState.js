export const getDefaultFieldsValues = () => {
	return {
		id: undefined,
		register: undefined,
		name: undefined,
		fcem: undefined,
		fcemExpiration: undefined,
		mainDivesQtd: undefined,
		reservesDivesQtd: undefined,
		address: undefined,
		clientId: undefined
	}
}

export const getDefaultState = () => {
	return {
		company: getDefaultFieldsValues(),
		companys: []
	}
}
