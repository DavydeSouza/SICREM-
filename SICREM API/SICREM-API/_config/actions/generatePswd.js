const Chance = require('chance')
const chance = new Chance()

function generate () {
	return _generate()
}

function _generate () {
	const pool = 'abcdefghijklmnopqrstuvwxyz1234567890$#@!&+-=_*'
	const length = 8
	return chance.string({ pool, length, symbols: true })
}

module.exports = generate
