module.exports = (Service) => async (req, res, next) => {
	try {
		const infos = await Service.create(req.body)
		return global.callback201(res, infos)
	} catch (error) {
		return next(error)
	}
}
