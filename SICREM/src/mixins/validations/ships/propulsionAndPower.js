import { required, minLength } from 'vuelidate/lib/validators'

export default {
	validations: {
		propAndPower: {
			mcp: {
				required,
				minLength: minLength(5)
			},
			manufacturer: {
				required,
				minLength: minLength(5)
			},
			model: {
				required,
				minLength: minLength(5)
			},
			serialNumber: {
				required,
				minLength: minLength(5)
			},
			power: { required }
		}
	}
}
