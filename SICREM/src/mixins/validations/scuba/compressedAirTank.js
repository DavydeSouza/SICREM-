import { required, minValue } from 'vuelidate/lib/validators'

export default {
	validations: {
		isDouble: { required, minValue: minValue(-1) },
		pressure: {
			required
		},
		capacity: {
			required
		}
	}
}
