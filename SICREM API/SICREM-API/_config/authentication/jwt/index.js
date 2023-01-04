const jwt = require('jsonwebtoken')
const getToken = require('./../getToken')
const { Erro, ErrorType } = require('./../../../_config/error')
const saltKey = global.environment.jwt.salt_key
const expiresIn = global.environment.jwt.time_expires_token

const JWT = {}

const verifyToken = (token) => new Promise((resolve, reject) => {
	jwt.verify(token, saltKey, (err, tokenDecoded) => {
		if (err) {
			reject(new Erro(ErrorType.INVALID_TOKEN))
		} else {
			resolve(tokenDecoded)
		}
	})
})

const isAuthorizedLevel = (authorizedLevels = [], userLevel) => {
	if (authorizedLevels.length === 0) {
		return true
	} else {
		return authorizedLevels.includes(userLevel)
	}
}

JWT.auth = (user) => {
	const loginData = {
		id: user.id,
		name: user.name,
		email: user.email,
		level: user.level
	}
	const options = { expiresIn }
	return jwt.sign(loginData, saltKey, options)
}

JWT.authorize = async (levels = [], req, res, next) => {
	try {
		let token = getToken(req)
		if (token) {
			const tokenDecoded = await verifyToken(token)
			if (isAuthorizedLevel(levels, tokenDecoded.level)) {
				req.tokenDecoded = tokenDecoded
				return next()
			} else {
				throw new Erro(ErrorType.UNAUTHORIZED)
			}
		} else {
			throw new Erro(ErrorType.NO_TOKEN)
		}
	} catch (err) {
		next(err)
	}
}

JWT.isAdmin = (req, res, next) => {
	let token = getToken(req)

	if (!token) throw new Erro(ErrorType.UNAUTHORIZED)
	else {
		jwt.verify(token, saltKey, (err, tokenDecoded) => {
			if (err) throw new Erro(ErrorType.INVALID_TOKEN)
			else {
				if (tokenDecoded.admin) next()
				else throw new Erro(ErrorType.UNAUTHORIZED)
			}
		})
	}
}

JWT.getUser = (req, res, next) => {
	let token = getToken(req)

	if (!token) throw new Erro(ErrorType.UNAUTHORIZED)
	else {
		jwt.verify(token, saltKey, (err, tokenDecoded) => {
			if (err) throw new Erro(ErrorType.INVALID_TOKEN)
			else {
				req.tokenDecoded = tokenDecoded
				next()
			}
		})
	}
}

module.exports = JWT
