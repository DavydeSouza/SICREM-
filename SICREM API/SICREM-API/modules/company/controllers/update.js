module.exports = (Service) => async (req, res, next) => {
	try {
		const company = await Service.update(req.query.id, req.body)
		return global.callback200(res, company)
	} catch (error) {
		return next(error)
	}
}
