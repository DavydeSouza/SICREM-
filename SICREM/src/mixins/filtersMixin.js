export default {
	methods: {
		sanatize(filter) {
			const verify = (key, value) => {
				if (Array.isArray(value)) {
					return value.length ? `${key}=${value.join(',')}` : undefined
				} else {
					const condition =
						value !== '' && value !== null && value !== undefined
					return condition ? `${key}=${value}` : undefined
				}
			}
			return Object.entries(filter)
				.map(entry => verify(entry[0], entry[1]))
				.filter(item => item !== undefined)
				.join('&')
		}
	}
}
