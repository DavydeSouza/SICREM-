module.exports = (Service) => async (req, res, next) => {
	try {
		const qtd = await Service.qtd()
		return global.callback200(res, qtd)
	} catch (error) {
		return next(error)
	}
}

