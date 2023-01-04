module.exports = (Repo) => async (body) => {
	try {
		const data = await Repo.getById(body)
		const resp = JSON.parse(JSON.stringify(data))
		const certification = resp.certification[0]
		const company = resp.company[0]
		const system = body.system ? resp.system[0] : undefined
		return { system, certification, company }
	} catch (error) {
		throw error
	}
}
