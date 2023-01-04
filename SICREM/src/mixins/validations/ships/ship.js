import { required, minLength, maxValue } from 'vuelidate/lib/validators'

export default {
	validations: {
		callsign: {
			required,
			minLength: minLength(3)
		},
		registrationnumber: {
			required,
			minLength: minLength(3)
		},
		hullmaterial: {
			required
		},
		imonumber: {
			required,
			minLength: minLength(3)
		},
		name: {
			required,
			minLength: minLength(3)
		},
		updateyear: {
			maxValue: maxValue(2021)
		},
		constructionyear: {
			required,
			maxValue: maxValue(2021)
		}
	}
}
