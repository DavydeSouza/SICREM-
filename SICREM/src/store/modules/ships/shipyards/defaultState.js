export const getDefaultFieldsValues = () => {
	return {
		id: undefined,
		name: undefined,
		address: undefined
	}
}

export const getDefaultState = () => {
	return {
		shipyard: getDefaultFieldsValues(),
		shipyards: []
	}
}
