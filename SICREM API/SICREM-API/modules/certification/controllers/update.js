module.exports = (Service) => async (req, res, next) => {
	try {
		const certification = await Service.updateTx(req.query.id, req.body)
		return global.callback200(res, { certification, msg: global.TEXTS.updated_success })
	} catch (error) {
		return next(error)
	}
}
