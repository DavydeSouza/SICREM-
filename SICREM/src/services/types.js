import axios from 'axios'
const types = {}
types.findAll = type => axios.get(`/types/${type}`)
types.findById = (type, id) => axios.get(`/types/${type}/${id}`)
types.create = (type, data) => axios.post(`/types/${type}`, data)
types.update = (type, id, data) => axios.put(`/types/${type}/${id}`, data)
types.delete = (type, id) => axios.delete(`/types/${type}/${id}`)
export { types }
