module.exports = (Service) => async (req, res, next) => {
	try {
		console.log(req.body)
		const company = await Service.create(req.body)
		return global.callback201(res, company)
	} catch (error) {
		return next(error)
	}
}
