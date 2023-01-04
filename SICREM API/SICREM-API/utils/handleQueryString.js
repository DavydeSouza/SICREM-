const DEFAULT_ROWS_LIMIT = 12
const ASCENDIG_ORDER = 'ASC'
const DESCENDIG_ORDER = 'DESC'

module.exports = {

	handleParams (params) {
		const sanatizeFields = (field) => {
			const noPageField = field => field !== 'page'
			const noSorterField = field => field !== 'sorter'
			const noDirectionField = field => field !== 'direction'
			return noPageField(field) && noSorterField(field) && noDirectionField(field)
		}
		const pagination = params.filter(f => f.field === 'page')[0]
		const sorter = params.filter(f => f.field === 'sorter')[0]
		const direction = params.filter(f => f.field === 'direction')[0]
		const filters = params.filter(f => sanatizeFields(f.field))
		return {
			pagination,
			filters,
			order: {
				sorter: sorter ? sorter.value : '',
				direction: direction ? direction.value : ''
			}
		}
	},

	createFilters (filters = [], fields, prefix) {
		if (filters.length) {
			let found = null
			let filter = null
			let type = ''
			let hasListSum = 0
			const values = []
			const fieldsNames = []
			const filters_ = []

			const isString = v => (type.toLowerCase() === 'string') ? `%${v}%` : v
			const handleArray = list => {
				const filters = []
				list.forEach((item, index) => {
					filter.index = filter.index + index
					values.push((isString(item)))
					fieldsNames.push(filter.field)
					filters.push(found.value(filter))
				})
				filters_.push(`(${filters.join(' OR ')})`)
				hasListSum = filter.index + 1
			}
			const handleItem = i => {
				if (hasListSum) filter.index = hasListSum
				values.push((isString(i)))
				fieldsNames.push(filter.field)
				filters_.push(found.value(filter))
			}

			filters.forEach(filter_ => {
				filter = filter_
				found = fields.find(field => field.name === filter_.field)
				if (found) {
					type = found.type || ''
					const array = filter_.value.split(',')
					array.length > 1 ? handleArray(array) : handleItem(filter_.value)
				}
			})

			return {
				filters: filters_.filter(f => f).join(' AND '),
				fieldsNames: fieldsNames.join('-'),
				values
			}
		}
		return { filters: [], fieldsNames: 'userNoFilters', values: [] }
	},

	createPagination (page) {
		const _default = {
			name: '',
			value: `LIMIT ${DEFAULT_ROWS_LIMIT} OFFSET(1 - 1) * ${DEFAULT_ROWS_LIMIT}` }
		if (page && page.value) {
			return {
				name: page.value,
				value: `LIMIT ${DEFAULT_ROWS_LIMIT} OFFSET(${page.value} - 1) * ${DEFAULT_ROWS_LIMIT}`
			}
		}
		return _default
	},

	createOrder (order, prefix = '') {
		if (order && order.sorter) {
			const sanatizeDirection = direction => {
				const upperDirection = direction = direction ? direction.toUpperCase() : ''
				return (upperDirection !== ASCENDIG_ORDER && upperDirection !== DESCENDIG_ORDER)
					? ASCENDIG_ORDER
					: upperDirection
			}
			const direction = sanatizeDirection(order.direction)
			prefix = prefix ? `${prefix}.` : ''
			return {
				name: `${order.sorter}_${direction}`,
				value: `ORDER BY ${prefix}"${order.sorter}" ${direction}`
			}
		}
		return {
			name: '',
			value: ''
		}
	}
}
