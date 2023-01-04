export const getDefaultFieldsValues = () => {
	return {
		id: undefined,
		totallength: undefined,
		hulllength: undefined,
		rulelength: undefined,
		lpp: undefined,
		ligthdisplacement: undefined,
		heavydisplacement: undefined,
		grosstonnage: undefined,
		nettonnage: undefined,
		moldedend: undefined,
		moldedmouth: undefined,
		countour: undefined,
		tonnagelength: undefined,
		deadweight: undefined,
		lightdraft: {
			isligth: true,
			av: undefined,
			ar: undefined,
			average: undefined
		},
		heavydraft: {
			isligth: false,
			av: undefined,
			ar: undefined,
			average: undefined
		},
		ship: undefined
	}
}

export const getDefaultState = () => {
	return {
		mtf: getDefaultFieldsValues()
	}
}
