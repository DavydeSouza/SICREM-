const { ErrorType } = require('../')

const dbConstraintErrors = [
	{
		constraint: 'unique_email_user',
		error: ErrorType.EMAIL_ALREADY_EXISTS
	},
	{
		constraint: 'unique_register_company',
		error: ErrorType.CNPJ_ALREADY_EXISTS
	}
]

module.exports = (error) => {
	const err = dbConstraintErrors.find(e => e.constraint === error.constraint)
	if (err) {
		const { status, message } = err.error
		return { status, message }
	}
	return null
}
