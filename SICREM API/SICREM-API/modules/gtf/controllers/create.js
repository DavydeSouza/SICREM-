module.exports = (Service) => async (req, res, next) => {
	try {
		const gtf = await Service.create(req.body)
		return global.callback201(res, gtf)
	} catch (error) {
		return next(error)
	}
}
