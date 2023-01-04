import { required, requiredIf, numeric } from 'vuelidate/lib/validators'

export default {
	validations: {
		totallength: {
			required
		},
		hulllength: {
			required
		},
		rulelength: {
			required
		},
		lpp: {
			required
		},
		ligthdisplacement: {
			required
		},
		heavydisplacement: {
			required
		},
		grosstonnage: {
			required,
			numeric
		},
		nettonnage: {
			required,
			numeric
		},
		moldedend: {
			required
		},
		moldedmouth: {
			required
		},
		countour: {
			required: requiredIf(instance => instance.rulelength > 24)
		},
		tonnagelength: {
			required: requiredIf(instance => instance.rulelength > 24)
		},
		deadweight: {
			required
		}
	}
}
