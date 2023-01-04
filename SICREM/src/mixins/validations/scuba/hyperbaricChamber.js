import { required } from 'vuelidate/lib/validators'

export default {
	validations: {
		workPressure: { required },
		testPressure: { required },
		dimensions: { required },
		description: { required }
	}
}
