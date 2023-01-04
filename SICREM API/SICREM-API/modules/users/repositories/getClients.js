const {PreparedStatement: PS} = require('pg-promise')
const { like, equals } = require('../../../utils/FactorySqllFilters')
const { handleParams, createFilters, createPagination, createOrder } = require('../../../utils/handleQueryString')

const PREFIX = 'u'
const ONLY_CLIENTS = `${PREFIX}.level = '2'`
const fields = [
	{name: 'name', value: (f) => like(f, PREFIX), type: 'string'},
	{name: 'email', value: (f) => like(f, PREFIX)},
	{name: 'active', value: (f) => equals(f, PREFIX)}
]

module.exports = (pgpdb) => async (params = []) => {
	const columns = 'id, name, level, email, clientid, active, count(*) OVER() AS total'
	const { filters, pagination, order } = handleParams(params)
	const createdFilters = createFilters(filters, fields, PREFIX)
	const order_ = createOrder(order, PREFIX)
	const pagination_ = createPagination(pagination)
	const filters_ = createdFilters.filters.length
		? `WHERE ${ONLY_CLIENTS} AND ${createdFilters.filters}`
		: `WHERE ${ONLY_CLIENTS}`
	const psName = `clients-${createdFilters.fieldsNames}-${order_.name}-${pagination_.name}`
	const query = `SELECT ${columns} FROM Users ${PREFIX} ${filters_} ${order_.value} ${pagination_.value};`
	const getClientes = new PS({name: psName, text: query})
	getClientes.values = createdFilters.values
	const clients = await pgpdb.any(getClientes)
	return clients
}
