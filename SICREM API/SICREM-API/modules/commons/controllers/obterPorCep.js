module.exports = (Service) => (req, res, next) =>
	Service.obterPorCep(req.params.cep)
		.then(data => global.callback200(res, data))
		.catch(err => { return next(err) })
