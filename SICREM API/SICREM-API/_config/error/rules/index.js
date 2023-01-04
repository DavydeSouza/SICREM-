const { Erro, ErrorType } = require('../')

module.exports = {
	onlyAdminAction: level => {
		if (level !== '0') throw new Erro(ErrorType.UNAUTHORIZED)
	}
}
