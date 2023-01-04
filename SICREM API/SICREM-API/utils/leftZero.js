const leftZero = (number, maxSize = 3) => {
	let strNumber = number.toString()
	const qtdleftZeros = maxSize - strNumber.length
	if (qtdleftZeros > 0) {
		for (let i = 0; i < qtdleftZeros; i++) {
			strNumber = '0' + strNumber
		}
	}
	return strNumber
}
module.exports = leftZero
