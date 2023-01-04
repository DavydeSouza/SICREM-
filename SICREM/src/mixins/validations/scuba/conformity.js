import { required, requiredIf } from 'vuelidate/lib/validators'

export default {
	validations: {
		declarationNumber: {},
		issuedBy: {
			required: requiredIf(instance => instance.requireIssuedBy)
		},
		expiration: { required },
		requireIssuedBy: { required }
	}
}
