module.exports = (Service) => async (req, res, next) => {
	try {
		const name = req.query.value
		const company = await Service.getByName(name)
		return global.callback200(res, company)
	} catch (error) {
		return next(error)
	}
}
