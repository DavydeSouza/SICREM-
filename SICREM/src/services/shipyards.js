import axios from 'axios'
const shipyards = {}
shipyards.findById = id => axios.get(`/port/${id}`)
shipyards.findByName = name => axios.get(`/shipyard/name/${name}`)
export { shipyards }
