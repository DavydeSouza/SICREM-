module.exports = (Service) => async (req, res, next) => {
	try {
		const freeBoardArea = await Service.create(req.body)
		return global.callback201(res, freeBoardArea)
	} catch (error) {
		return next(error)
	}
}
