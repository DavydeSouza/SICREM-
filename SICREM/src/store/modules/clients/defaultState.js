export const getDefaultFieldsValues = () => {
	return {
		id: undefined,
		clientId: undefined,
		name: undefined,
		email: undefined,
		active: false,
		level: undefined,
		contacts: []
	}
}

export const getDefaultState = () => {
	return {
		total: 0,
		client: getDefaultFieldsValues(),
		clients: []
	}
}
