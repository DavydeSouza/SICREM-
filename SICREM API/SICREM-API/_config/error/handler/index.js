const pgErrorHandler = require('./pgErrorHandler')

const NO_CONSOLE_ENV = 'prod-docker'
module.exports = (err, req, res, next) => {
	if (err.status) {
		res.status(err.status).json({ msg: err.msg, data: err.data })
	} else {
		if (!process.env.NODE_ENV.includes(NO_CONSOLE_ENV)) console.log(err.stack)
		err = errorType(err)
		res.status(err.status).json({erro: 'Houve um erro interno', msg: err.message})
	}
}

function errorType (err) {
	err.status = 500
	const dbError = pgErrorHandler(err)
	err = dbError || err
	return err
}
