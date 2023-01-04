module.exports = (Service) => async (req, res, next) => {
	try {
		const filters = req.query
		const certifications = await Service.getAll(filters)
		return global.callback200(res, certifications)
	} catch (error) {
		return next(error)
	}
}
