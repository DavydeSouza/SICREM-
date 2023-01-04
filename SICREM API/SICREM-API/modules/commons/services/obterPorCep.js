
const axios = require('axios')
module.exports = () => async (cep) => {
	const resultado = await axios.get(global.environment.via_cep + cep + '/json/')
	return resultado.data
}
