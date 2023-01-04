<template>
	<div class="form-row">
		<div
			class="form-group col-md-4"
			:class="{ 'invalid-field': $v.hullcode.$error }"
		>
			<label for="hullcode">Nº do casco</label>
			<input
				id="hullcode"
				v-model="hullcode"
				type="text"
				class="form-control"
				placeholder="Digite o número do casco."
				@blur="$v.hullcode.$touch()"
			/>
			<div v-if="$v.hullcode.$error" class="error-messages">
				<span v-if="!$v.hullcode.required">O campo é obrigatório</span>
				<span v-if="!$v.hullcode.minLength">
					Deve ter no minimo
					{{ $v.hullcode.$params.minLength.min }} caracteres
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import toValidate from '@/mixins/validations/toValidate.js'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
	name: 'HullCodeField',
	mixins: [toValidate],
	data() {
		return {
			updating: true
		}
	},
	validations: {
		hullcode: {
			required,
			minLength: minLength(3)
		}
	},
	computed: {
		...mapState({
			ship: state => state.ships.ship
		}),
		hullcode: {
			get() {
				return this.ship.hullcode
			},
			set(value) {
				this.setShipField({ value, field: 'hullcode' })
				this.validate('hullcode')
			}
		}
	},
	updated() {
		if (this.$route.params.id && this.updating) {
			this.updating = false
			this.validate()
		}
	},
	methods: {
		...mapActions(['setShipField']),
		validate(field) {
			field ? this.$v[field]?.$touch() : this.$v.$touch()
			this.$emit('hull-code-validattion', this.$v.$invalid)
		}
	}
}
</script>
