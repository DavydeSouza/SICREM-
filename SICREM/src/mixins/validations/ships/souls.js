import { required } from 'vuelidate/lib/validators'

export default {
	validations: {
		qtdpaxcabin8bunks: {
			required
		},
		qtdotherpax: {
			required
		},
		qtdnotcrewprofissionals: {
			required
		},
		crew: {
			required
		}
	}
}
