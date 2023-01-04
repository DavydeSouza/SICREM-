module.exports = (Service) => async (req, res, next) => {
	try {
		await Service.inativeTx(req.params.id, req.body)
		return global.callback200(res, { msg: global.TEXTS.exclusion_success })
	} catch (error) {
		return next(error)
	}
}
