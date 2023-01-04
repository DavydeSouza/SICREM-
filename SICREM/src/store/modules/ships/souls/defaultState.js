export const getDefaultFieldsValues = () => {
	return {
		id: undefined,
		qtdpaxcabin8bunks: 0,
		qtdotherpax: 0,
		crew: 0,
		qtdunmannedprofessionals: 0,
		qtdnotcrewprofissionals: 0
	}
}

export const getDefaultState = () => {
	return {
		souls: getDefaultFieldsValues()
	}
}
