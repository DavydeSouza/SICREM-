export const getDefaultFieldsValues = () => {
	return {
		id: undefined,
		capacity: undefined,
		pressure: undefined,
		isDouble: -1,
		flag: undefined,
		manufactured: {
			idNumber: undefined,
			manufacturer: undefined,
			model: undefined
		}
	}
}

export const getDefaultState = () => {
	return {
		compressedAirTank: getDefaultFieldsValues(),
		compressedsAirTanks: []
	}
}
