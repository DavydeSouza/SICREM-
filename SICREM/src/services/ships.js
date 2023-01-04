import axios from 'axios'
const ships = {}
ships.findById = id => axios.get(`/ships/json?id=${id}`)
ships.findByCbesId = id => axios.get(`/ships/cbes/${id}`)
ships.findByField = query => axios.get(`/ships/json/field?${query}`)
ships.create = data => axios.post('/ships', data)
ships.update = (id, data) => axios.put(`/ships/${id}`, data)
ships.delete = id => axios.delete(`/ships/${id}`)
ships.inative = id => axios.delete(`/ships/inative/${id}`)
ships.getAll = () => axios.get(`/ships/json/field`)
export { ships }
