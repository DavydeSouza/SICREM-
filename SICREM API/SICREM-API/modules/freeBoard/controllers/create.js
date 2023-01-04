module.exports = (Service) => async (req, res, next) => {
	try {
		const freeBoard = await Service.create(req.body)
		return global.callback201(res, freeBoard)
	} catch (error) {
		return next(error)
	}
}
