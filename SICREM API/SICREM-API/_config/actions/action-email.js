const ENV = require('./loadEnv')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(ENV.SENDGRID_API_KEY)

const Email = {}

Email.send = async (_to, _subject, _content) => {
	const message = {
		from: ENV.SENDGRID_SENDER,
		to: _to,
		subject: _subject,
		html: _content
	}

	try {
		await sgMail.send(message)
	}	catch (error) {
		console.error(error)
	}
}

module.exports = Email
