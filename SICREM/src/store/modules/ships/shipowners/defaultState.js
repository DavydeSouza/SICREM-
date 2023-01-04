export const getDefaultFieldsValues = () => {
	return {
		id: undefined,
		register: undefined,
		name: undefined,
		address: undefined,
		clientid: undefined
	}
}

export const getDefaultState = () => {
	return {
		shipowner: getDefaultFieldsValues(),
		shipowners: []
	}
}
