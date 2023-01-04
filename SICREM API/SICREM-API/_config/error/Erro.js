class Erro extends Error {
	constructor (...args) {
		super(...args)
		this.erroDesc = args[0]
		this.obs = args[1]
		Error.captureStackTrace(this, Erro)
	}

	get status () {
		return this.erroDesc.status
	}
	get msg () {
		return this.erroDesc.message + (this.obs ? ` [${this.obs}]` : '')
	}
	get data () {
		return this.erroDesc.data
	}
}

module.exports = Erro
