import { required } from 'vuelidate/lib/validators'

export default {
	validations: {
		shiptype: {
			required
		},
		activitys: {
			required
		},
		navigationareas: {
			required
		},
		registrationport: {
			required
		},
		operationport: {
			required
		}
	}
}
