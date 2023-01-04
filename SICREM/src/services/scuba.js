import axios from 'axios'
const scuba = {}
scuba.findById = id => axios.get(`/scuba/${id}`)
scuba.findByField = query => axios.get(`/scuba/json/field?${query}`)
scuba.create = data => axios.post('/scuba', data)
scuba.update = (id, data) => axios.put(`/scuba/${id}`, data)
scuba.delete = id => axios.delete(`/scuba/${id}`)
export { scuba }
