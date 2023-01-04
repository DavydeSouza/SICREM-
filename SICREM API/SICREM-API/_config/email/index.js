const fs = require('fs')
const { SYSTEM_URL, SYSTEM_NAME } = require('../actions/loadEnv')
const layout = fs.readFileSync(global.appRoot + '/_config/email/html/layout.html', 'utf8')

const action = {}

action.welcome = (user, password) => {
	const subject = 'Cadastro ' + SYSTEM_NAME + '!'
	const _path = global.appRoot + '/_config/email/html/alerta_cadastro.html'

	let theme = fs.readFileSync(_path, 'utf8')
	theme = theme.replace('##NOME##', user.name)
	theme = theme.replace('##EMAIL##', user.email)
	theme = theme.replace('##SENHA##', password)
	theme = theme.replace('##NOME_SISTEMA##', SYSTEM_NAME)
	theme = theme.replace('##LINK##', SYSTEM_URL)
	theme = theme.replace('##ANO##', new Date().getFullYear())

	const content = layout.replace('##CONTEUDO##', theme)

	return { subject, content }
}

module.exports = action
