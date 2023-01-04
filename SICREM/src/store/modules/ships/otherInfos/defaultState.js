export const getDefaultFieldsValues = () => {
	return {
		cargoondeck: -1,
		tank: -1,
		toxicchemicalsorgas: -1,
		glowless60: -1,
		dangerouscargo: -1,
		standby: -1,
		convoy: -1,
		crossingsoperator: -1,
		ship: ''
	}
}

export const getDefaultState = () => {
	return {
		otherInfos: getDefaultFieldsValues()
	}
}
