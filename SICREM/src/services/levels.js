import axios from 'axios'
const levels = {}
levels.findAll = () => axios.get('/level/')
levels.findById = id => axios.get(`/level/${id}`)
export { levels }
