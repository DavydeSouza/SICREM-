import { required } from 'vuelidate/lib/validators'

export default {
	validations: {
		numberCylinders: { required },
		pressure: {
			required
		},
		capacityEachCylinder: {
			required
		}
	}
}
