import axios from 'axios'
const certification = {}
certification.findById = (id, system = 0) =>
	axios.get(`/certification/${id}?system=${system}`)
certification.findByName = name =>
	axios.get(`/certification/name?value=${name}`)
certification.getAll = () => axios.get(`/certification/`)
certification.create = data => axios.post('/certification', data)
certification.inactive = id => axios.put(`/certification/inactive?id=${id}`)
certification.update = (id, data) => axios.put(`/certification?id=${id}`, data)
certification.delete = id => axios.delete(`/certification/${id}`)
export { certification }
