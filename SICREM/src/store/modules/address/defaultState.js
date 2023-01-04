export const getDefaultFieldsValues = () => {
	return {
		postcode: '',
		street: undefined,
		number: undefined,
		state: undefined,
		city: undefined,
		district: undefined,
		complement: undefined,
		country: undefined
	}
}

export const getDefaultState = () => {
	return {
		address: getDefaultFieldsValues(),
		validations: undefined,
		UFS: [
			'AL',
			'AP',
			'AM',
			'BA',
			'CE',
			'DF',
			'ES',
			'GO',
			'MA',
			'MT',
			'MS',
			'MG',
			'PA',
			'PB',
			'PR',
			'PE',
			'PI',
			'RJ',
			'RN',
			'RS',
			'RO',
			'RR',
			'SC',
			'SP',
			'SE',
			'TO'
		]
	}
}
