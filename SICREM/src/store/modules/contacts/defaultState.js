export const getDefaultFieldsValues = () => {
	return {
		flag: undefined,
		id: undefined,
		name: undefined,
		email: undefined,
		cels: [''],
		phones: [undefined],
		sector: undefined
	}
}

export const getDefaultState = () => {
	return {
		contact: getDefaultFieldsValues(),
		contacts: [],
		editing: false,
		validations: undefined,
		validationCel: undefined,
		validationPhone: undefined
	}
}
