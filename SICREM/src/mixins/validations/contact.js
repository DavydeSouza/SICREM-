import { required, email, minLength, helpers } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

const alpha = helpers.regex(
	'alpha',
	/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9 ]*$/
)

export default {
	created() {
		this.setContactValidations(this.$v)
		this.setContactCelsValidations(this.$v.contact.cels)
		this.setContactPhonesValidations(this.$v.contact.phones)
	},
	validations: {
		contact: {
			name: {
				required,
				alpha,
				minLength: minLength(5)
			},
			sector: { minLength: minLength(0) },
			email: { required, email },
			cels: {
				$each: {
					required,
					minLength: minLength(5)
				}
			},
			phones: {
				$each: {
					required,
					minLength: minLength(5)
				}
			}
		}
	},
	methods: {
		...mapActions([
			'setContactValidations',
			'setContactCelsValidations',
			'setContactPhonesValidations'
		])
	}
}
