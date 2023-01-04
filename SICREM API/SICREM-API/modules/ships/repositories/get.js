const {PreparedStatement: PS} = require('pg-promise')
const { like, equals } = require('../../../utils/FactorySqllFilters')
const { handleParams, createFilters, createPagination, createOrder } = require('../../../utils/handleQueryString')

const PREFIX = 's'
const fields = [
	{name: 'name', value: (f) => like(f, PREFIX)},
	{name: 'active', value: (f) => equals(f, PREFIX)},
	{name: 'solas', value: (f) => equals(f, PREFIX)}
]

module.exports = (pgpdb) => async (params = [], json = false) => {
	const columns = 's.id, s.cbesid , s."name", s.constructionyear, s.callsign, s.registrationnumber, count(*) OVER() AS total'
	const { filters, pagination, order } = handleParams(params)
	const createdFilters = createFilters(filters, fields, PREFIX)
	const order_ = createOrder(order, PREFIX)
	const pagination_ = createPagination(pagination)
	const filters_ = filters.length ? `WHERE ${createdFilters.filters}` : ''
	const psName = `ships-${createdFilters.fieldsNames}-${order_.name}-${pagination_.name}`
	const query = `SELECT ${columns} FROM Ship ${PREFIX} ${filters_} ${order_.value} ${pagination_.value};`
	const getShips = new PS({name: psName, text: query})
	getShips.values = createdFilters.values
	const ship = await pgpdb.any(getShips)
	return ship
}
