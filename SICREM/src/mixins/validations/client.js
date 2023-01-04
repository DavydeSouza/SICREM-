import { required, email, minLength, helpers } from 'vuelidate/lib/validators'

const alpha = helpers.regex(
	'alpha',
	/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9 ]*$/
)

export default {
	validations: {
		name: {
			required,
			alpha,
			minLength: minLength(5)
		},
		level: { required },
		email: { email }
	}
}
