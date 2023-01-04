exports.like =
	(filter, prefix) => `${prefix}.${filter.field} LIKE $${filter.index}`
exports.equals =
	(filter, prefix) => `${prefix}.${filter.field} = $${filter.index}`
exports.greaterThan =
	(filter, prefix) => `${prefix}.${filter.field} < $${filter.index}`
exports.lessThan =
	(filter, prefix) => `${prefix}.${filter.field} > $${filter.index}`
exports.between =
	(filter, prefix, less, greater) =>
		`${prefix}.${filter.field} > ${less} AND ${prefix}.${filter.field} < ${greater}`
