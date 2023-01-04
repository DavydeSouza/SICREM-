module.exports = (Service) => async (req, res, next) => {
	try {
		const certification = await Service.getByCompanyId(req.query.id)
		return global.callback200(res, certification)
	} catch (error) {
		return next(error)
	}
}
