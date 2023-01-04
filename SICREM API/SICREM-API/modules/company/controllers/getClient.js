module.exports = (Service) => async (req, res, next) => {
	try {
		const name = req.query.name
		const code = req.query.code
		const isScuba = req.query.isScuba
		const company = await await Service.getClient(name, code, isScuba)
		return global.callback200(res, company)
	} catch (error) {
		return next(error)
	}
}
