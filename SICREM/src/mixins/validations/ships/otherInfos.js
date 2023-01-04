import { minValue } from 'vuelidate/lib/validators'

export default {
	validations: {
		otherInfos: {
			cargoondeck: { minValue: minValue(0) },
			tank: { minValue: minValue(0) },
			toxicchemicalsorgas: { minValue: minValue(0) },
			glowless60: { minValue: minValue(0) },
			dangerouscargo: { minValue: minValue(0) },
			standby: { minValue: minValue(0) },
			convoy: { minValue: minValue(0) },
			crossingsoperator: { minValue: minValue(0) }
		}
	}
}
