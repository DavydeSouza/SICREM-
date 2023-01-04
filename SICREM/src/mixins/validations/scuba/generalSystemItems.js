import { required, minValue } from 'vuelidate/lib/validators'

export default {
	validations: {
		generalSystemItems: {
			appropriateClothing: { required, minValue: minValue(0) },
			regulatingValves: { required, minValue: minValue(0) },
			beltsWithBallast: { required, minValue: minValue(0) },
			floors: { required, minValue: minValue(0) },
			knives: { required, minValue: minValue(0) },
			suspensories: { required, minValue: minValue(0) },
			inflatableVests: { required, minValue: minValue(0) },
			lanterns: { required, minValue: minValue(0) },
			depths: { required, minValue: minValue(0) }
		}
	}
}
