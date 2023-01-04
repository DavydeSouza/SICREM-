import { requiredIf } from 'vuelidate/lib/validators'

export default {
	validations: {
		openseasize: {
			required: requiredIf(instance => instance.showOpeanSize)
		},
		areaOne: {
			required: requiredIf(instance => instance.showAreaOne)
		},
		areaTwo: {
			required: requiredIf(instance => instance.showAreaTwo)
		}
	}
}
