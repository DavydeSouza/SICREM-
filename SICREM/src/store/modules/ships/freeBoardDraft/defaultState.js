export const getDefaultFieldsValues = () => {
	return {
		areaOne: undefined,
		areaTwo: undefined,
		area: {
			id: undefined,
			areaOrder: undefined,
			value: undefined
		},
		areas: [],
		isdraft: false,
		openseasize: undefined
	}
}

export const getDefaultState = () => {
	return {
		...getDefaultFieldsValues(),
		areas: []
	}
}
