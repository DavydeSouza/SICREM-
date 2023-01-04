import axios from 'axios'
const shipowners = {}
shipowners.findById = id => axios.get(`/shipowner/${id}`)
shipowners.findByName = name => axios.get(`/shipowner/name?value=${name}`)
shipowners.findByClient = query => axios.get(`/shipowner/client?${query}`)
shipowners.create = data => axios.post('/shipowner', data)
shipowners.update = (id, data) => axios.put(`/shipowner/${id}`, data)
shipowners.delete = id => axios.delete(`/shipowner/${id}`)
export { shipowners }
