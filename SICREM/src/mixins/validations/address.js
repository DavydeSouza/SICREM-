import { required, requiredIf, minLength } from 'vuelidate/lib/validators'

export default {
	validations: {
		address: {
			country: {
				required: requiredIf(instance => !instance.foreign),
				minLength: minLength(5)
			},
			street: {
				required,
				minLength: minLength(2)
			},
			state: {
				required: requiredIf(instance => !instance.foreign)
			},
			city: {
				required: requiredIf(instance => !instance.foreign),
				minLength: minLength(2)
			},
			district: {
				required: requiredIf(instance => !instance.foreign),
				minLength: minLength(2)
			},
			complement: {}
		}
	}
}
