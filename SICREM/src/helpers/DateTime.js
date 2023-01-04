import moment from 'moment-timezone'

const formatDateAndTime = date => {
	if (!date || date === '') return '-'

	const _date = moment.tz(date, 'America/Sao_Paulo')
	return _date.format('DD/MM/YYYY - hh:mm')
}

const formatDate = date => {
	if (!date || date === '') return '-'

	const _date = moment.tz(date, 'America/Sao_Paulo')
	return _date.format('DD/MM/YYYY')
}

export { formatDateAndTime, formatDate }
