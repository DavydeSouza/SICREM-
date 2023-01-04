export const getDefaultFieldsValues = () => {
	return {
		flag: undefined,
		id: undefined,
		mcp: undefined,
		manufacturer: undefined,
		model: undefined,
		serialNumber: undefined,
		power: undefined
	}
}

export const getDefaultState = () => {
	return {
		propAndPower: getDefaultFieldsValues(),
		editing: false,
		propulsionsAndPowers: []
	}
}
