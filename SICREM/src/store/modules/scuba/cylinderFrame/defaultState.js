export const getDefaultFieldsValues = () => {
	return {
		id: undefined,
		capacityEachCylinder: undefined,
		numberCylinders: undefined,
		pressure: undefined,
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
		cylinderFrame: getDefaultFieldsValues(),
		cylindersFrames: []
	}
}
