module.exports = (Repo) => async () => {
	try {
		const sequence = format(await Repo.generateClientID())
		return `${sequence}`
	} catch (error) {
		throw error
	}
}

function format (value = '') {
	const minLength = 4
	while (value.length < minLength) {
		value = `0${value}`
	}
	return value
}
