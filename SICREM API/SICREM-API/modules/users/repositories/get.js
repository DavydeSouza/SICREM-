const {PreparedStatement: PS} = require('pg-promise')
const { like, equals } = require('../../../utils/FactorySqllFilters')
const { handleParams, createFilters, createPagination, createOrder } = require('../../../utils/handleQueryString')

const PREFIX = 'u'
const fields = [
	{name: 'name', value: (f) => like(f, PREFIX), type: 'string'},
	{name: 'email', value: (f) => like(f, PREFIX)},
	{name: 'active', value: (f) => equals(f, PREFIX)},
	{name: 'level', value: (f) => equals(f, PREFIX)}
]

module.exports = (pgpdb) => async (params = []) => {
	const columns = 'id, name, level, email, clientid, active, count(*) OVER() AS total'
	const { filters, pagination, order } = handleParams(params)
	const createdFilters = createFilters(filters, fields, PREFIX)
	const order_ = createOrder(order, PREFIX)
	const pagination_ = createPagination(pagination)
	const filters_ = createdFilters.filters.length ? `WHERE ${createdFilters.filters}` : ''
	const psName = `users-${createdFilters.fieldsNames}-${order_.name}-${pagination_.name}`
	const query = `SELECT ${columns} FROM Users ${PREFIX} ${filters_} ${order_.value} ${pagination_.value};`
	const getUsers = new PS({name: psName, text: query})
	getUsers.values = createdFilters.values

	const users = await pgpdb.any(getUsers)
	return users
}
