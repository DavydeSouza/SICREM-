import { required, requiredIf } from 'vuelidate/lib/validators'

export default {
	validations: {
		manufacturer: {
			required
		},
		idNumber: {
			required
		},
		model: {
			required: requiredIf(instance => instance.requireModel)
		},
		requireModel: { required }
	}
}
