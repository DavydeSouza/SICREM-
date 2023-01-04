import axios from 'axios'

export const cepService = cep => {
	const BASE_URL = 'commons'
	return axios.get(`${BASE_URL}/obterPorCep/${cep}`)
}
