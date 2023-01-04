import { required } from 'vuelidate/lib/validators'

export default {
	validations: {
		cableSpecification: { required },
		workLoad: { required },
		testLoad: { required }
	}
}
