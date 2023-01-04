<template>
	<div id="shipyardform-component-content">
		<div class="component-container">
			<div class="form-container">
				<form novalidate="true" @submit.prevent="save">
					<div class="form-row">
						<div
							class="form-group col-md-6"
							:class="{ 'invalid-field': $v.name.$error }"
						>
							<label for="name">Nome</label>
							<input
								id="name"
								v-model="name"
								type="text"
								class="form-control"
								placeholder="Nome do estaleiro"
								@keyup="$v.$touch()"
							/>
							<div v-if="$v.name.$error" class="error-messages">
								<span v-if="!$v.name.required">O campo é obrigatório</span>
								<span v-if="!$v.name.minLength">
									Deve ter no minimo
									{{ $v.name.$params.minLength.min }} caracteres
								</span>
							</div>
						</div>
					</div>
					<custom-address
						@custom-address-update="setAddress"
						@custom-adress-validation="data => (adressInvalid = data)"
					/>
				</form>
				<div class="actions">
					<div class="buttons-container">
						<button type="button" class="btn btn-secondary" @click.stop="close">
							Cancelar
						</button>
						<button
							type="button"
							class="btn btn-primary"
							:disabled="$v.$invalid || adressInvalid"
							@click.stop="save"
						>
							Cadastrar
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { required, minLength, helpers } from 'vuelidate/lib/validators'
import { mapState, mapActions } from 'vuex'
import CustomAddress from '@/components/shared/CustomAddress'

const alpha = helpers.regex(
	'alpha',
	/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9 ]*$/
)

export default {
	name: 'ShipYardForm',
	components: { CustomAddress },
	mixins: [],
	props: {
		validate: {
			type: Boolean,
			required: true
		}
	},
	data() {
		return {
			name: undefined,
			adressInvalid: true
		}
	},
	computed: {
		...mapState({
			shipyard: state => state.shipyards.shipyard
		}),
		address: {
			get() {
				return this.company.address
			},
			set(value) {
				this.setShipYardField({ value, field: 'address' })
			}
		}
	},
	watch: {
		validate() {
			this.$v.$touch()
			this.$emit('ship-yard-form-validattion', this.$v.$invalid)
		}
	},
	mounted() {
		this.name = this.shipyard ? this.shipyard.name : undefined
	},
	methods: {
		...mapActions([
			'setShipYard',
			'setShipYardField',
			'resetShipYardFields',
			'resetAdressFields'
		]),
		save() {
			this.$emit('close')
			this.setShipYard({ id: undefined, name: this.name })
		},
		close() {
			this.$emit('close')
		},
		setAddress(address) {
			this.address = address
		}
	},
	validations() {
		return {
			name: {
				required,
				alpha,
				minLength: minLength(3)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
#shipyard-component-content {
	background-color: lightblue;
	.form-container {
		form {
			.form-row {
				background-color: transparent;
			}
		}
	}
}
</style>
