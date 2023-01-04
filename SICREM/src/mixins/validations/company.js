import {
	required,
	requiredIf,
	minLength,
	helpers
} from 'vuelidate/lib/validators'

const alpha = helpers.regex(
	'alpha',
	/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9 ]*$/
)

export default {
	validations: {
		fcem: {
			required: requiredIf(instance => instance.isCompany),
			minLength: minLength(5)
		},
		fcemExpiration: {
			required: requiredIf(instance => instance.isCompany)
		},
		name: {
			required,
			alpha,
			minLength: minLength(5)
		},
		register: {
			required: required,
			minLength: minLength(5)
		}
	}
}
