import axios from 'axios'
const company = {}
company.findById = id => axios.get(`/company/${id}`)
company.findByName = name => axios.get(`/company/name?value=${name}`)
company.getClient = (type, value) => axios.get(`/company?${type}=${value}`)
company.create = data => axios.post('/company', data)
company.update = (id, data) => axios.put(`/company/${id}`, data)
company.delete = id => axios.delete(`/company/${id}`)
export { company }
