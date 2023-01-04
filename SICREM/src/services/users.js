import axios from 'axios'
const users = {}
users.findById = id => axios.get(`/users/${id}`)
users.findToEdit = id => axios.get(`/users/edit/${id}`)
users.findToEditByCbesId = id => axios.get(`/users/edit/cbes/${id}`)
users.findByField = query => axios.get(`/users?${query}`)
users.findByName = name => axios.get(`/users/name/${name}`)
users.getAll = () => axios.get(`/users/`)
users.getClients = query => axios.get(`/users/clients?${query}`)
users.create = data => axios.post('/users', data)
users.update = (id, data) => axios.put(`/users/${id}`, data)
users.inactive = (id, data) => axios.put(`/users/inactive/${id}`, data)
users.delete = id => axios.delete(`/users/${id}`)
export { users }
