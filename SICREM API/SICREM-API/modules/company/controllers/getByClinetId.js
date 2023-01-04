module.exports = (Service) => async (req, res, next) => {
	try {
		const company = await Service.getByClinetId(req.query.clientid)
		return global.callback200(res, company)
	} catch (error) {
		return next(error)
	}
}
