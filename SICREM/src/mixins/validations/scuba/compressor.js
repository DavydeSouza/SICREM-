import { required, minLength } from 'vuelidate/lib/validators'

export default {
	validations: {
		type: {
			required,
			minLength: minLength(3)
		},
		pressure: {
			required
		},
		flowrate: {
			required
		}
	}
}
