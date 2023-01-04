const { Erro, ErrorType } = require('../../../_config/error')
const encryptPswd = require('../../../_config/actions/encryptPswd')

module.exports = (Repo) => async (body) => {
	body.senhaAtual = encryptPswd(body.senhaAtual)
	body.novaSenha = encryptPswd(body.novaSenha)
	try {
		const usuarioPorId = await Repo.getById(body.id)
		if (!usuarioPorId.length) {
			throw new Erro(ErrorType.NOT_FOUND_USER)
		}
		const user = await Repo.changePswd(body)
		if (!user.length) {
			throw new Erro(ErrorType.INVALID_PASSWORD)
		}
		return { msg: 'password alterada com sucesso!' }
	} catch (error) {
		throw error
	}
}
