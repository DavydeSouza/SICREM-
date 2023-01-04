export const getDefaultFieldsValues = () => {
	return {
		id: undefined,
		hullmaterial: undefined,
		operationport: undefined,
		registrationport: undefined,
		activitys: undefined,
		navigationareas: undefined,
		shipyard: undefined,
		shiptype: undefined,
		ship: undefined
	}
}

export const getDefaultState = () => {
	return {
		gtf: getDefaultFieldsValues(),
		ports: []
	}
}
