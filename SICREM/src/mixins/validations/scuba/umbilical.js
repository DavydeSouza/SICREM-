import { required } from 'vuelidate/lib/validators'

export default {
	validations: {
		length: { required },
		internalDiameter: { required },
		pressure: { required }
	}
}
