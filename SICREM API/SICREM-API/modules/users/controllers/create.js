module.exports = (Service) => async (req, res, next) => {
	try {
		const user = await Service.createTx(req.body, req.tokenDecoded)
		return global.callback201(res, { user, msg: global.TEXTS.create_success })
	} catch (error) {
		return next(error)
	}
}
