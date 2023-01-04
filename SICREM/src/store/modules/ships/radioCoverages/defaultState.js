export const getDefaultFieldsValues = () => {
	return [
		{ name: 'Área 1' },
		{ name: 'Área 2' },
		{ name: 'Área 3' },
		{ name: 'Área 4' }
	]
}

export const getDefaultState = () => {
	return {
		radioCoveragesList: getDefaultFieldsValues(),
		checkedRtcs: []
	}
}
