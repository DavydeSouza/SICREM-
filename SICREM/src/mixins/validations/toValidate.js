export default {
	props: {
		validating: {
			type: Boolean,
			required: true
		}
	},
	watch: {
		validating() {
			this.$v.$touch()
		}
	}
}
