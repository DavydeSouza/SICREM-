import { required } from 'vuelidate/lib/validators'

export default {
	validations: {
		diameter: { required },
		escale: { required },
		type: { required }
	}
}
