module.exports = (Service) => async (req, res, next) => {
	try {
		const certification = await Service.createTx(req.body)
		return global.callback201(res, { certification, msg: global.TEXTS.create_success })
	} catch (error) {
		return next(error)
	}
}
