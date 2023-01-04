import axios from 'axios'
const port = {}
port.findById = id => axios.get(`/port/${id}`)
port.findByName = name => axios.get(`/port/name/${name}`)
port.create = data => axios.post('/port', data)
port.update = (id, data) => axios.put(`/port/${id}`, data)
port.delete = id => axios.delete(`/port/${id}`)
export { port }
