<template>
	<div id="form-propulsion-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent>
				<div class="form-row">
					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.propAndPower.mcp.$error }"
					>
						<label for="mcp">Denominação MCP</label>
						<input
							id="mcp"
							v-model="mcp"
							type="text"
							class="form-control"
							placeholder="Denominação MCP"
							@blur="$v.propAndPower.mcp.$touch()"
						/>
						<div v-if="$v.propAndPower.mcp.$error" class="error-messages">
							<span v-if="!$v.propAndPower.mcp.required"
								>O campo é obrigatório</span
							>
							<span v-if="!$v.propAndPower.mcp.minLength">
								Deve ter no minimo
								{{ $v.propAndPower.mcp.$params.minLength.min }} caracteres
							</span>
						</div>
					</div>

					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.propAndPower.power.$error }"
					>
						<label for="power">Potência</label>
						<input
							id="power"
							v-model="power"
							type="number"
							class="form-control"
							placeholder="Em kW"
							step="0.01"
							min="0"
							@blur="$v.propAndPower.power.$touch()"
						/>
						<div v-if="$v.propAndPower.power.$error" class="error-messages">
							<span v-if="!$v.propAndPower.power.required"
								>O campo é obrigatório</span
							>
						</div>
					</div>

					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.propAndPower.serialNumber.$error }"
					>
						<label for="serialNumber">Nº de série</label>
						<input
							id="serialNumber"
							v-model="serialNumber"
							type="text"
							class="form-control"
							placeholder="somente números"
							@blur="$v.propAndPower.serialNumber.$touch()"
						/>
						<div
							v-if="$v.propAndPower.serialNumber.$error"
							class="error-messages"
						>
							<span v-if="!$v.propAndPower.serialNumber.required"
								>O campo é obrigatório</span
							>
							<span v-if="!$v.propAndPower.serialNumber.minLength">
								Deve ter no minimo
								{{ $v.propAndPower.serialNumber.$params.minLength.min }}
								caracteres
							</span>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.propAndPower.manufacturer.$error }"
					>
						<label for="manufacturer">Fabricante</label>
						<input
							id="manufacturer"
							v-model="manufacturer"
							type="text"
							class="form-control"
							placeholder="Nomde do fabricante"
							@blur="$v.propAndPower.manufacturer.$touch()"
						/>
						<div
							v-if="$v.propAndPower.manufacturer.$error"
							class="error-messages"
						>
							<span v-if="!$v.propAndPower.manufacturer.required"
								>O campo é obrigatório</span
							>
							<span v-if="!$v.propAndPower.manufacturer.minLength">
								Deve ter no minimo
								{{ $v.propAndPower.manufacturer.$params.minLength.min }}
								caracteres
							</span>
						</div>
					</div>

					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.propAndPower.model.$error }"
					>
						<label for="model">Modelo</label>
						<input
							id="model"
							v-model="model"
							type="text"
							class="form-control"
							placeholder="Modelo do propulsor"
							@blur="$v.propAndPower.model.$touch()"
						/>
						<div v-if="$v.propAndPower.model.$error" class="error-messages">
							<span v-if="!$v.propAndPower.model.required"
								>O campo é obrigatório</span
							>
							<span v-if="!$v.propAndPower.model.minLength">
								Deve ter no minimo
								{{ $v.propAndPower.model.$params.minLength.min }} caracteres
							</span>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div class="form-group col-md-6 btn-container">
						<button
							type="buttom"
							class="btn-custom secondary"
							@click="buttonAction"
						>
							{{ editing ? 'Editar' : 'Adicionar' }}
							<i class="fas fa-plus-circle" />
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import EventBus from '@/components/event-bus'
import propAndPowerValidation from '@/mixins/validations/ships/propulsionAndPower.js'

export default {
	name: 'ItemFormPropulsion',
	mixins: [propAndPowerValidation],
	data() {
		return {
			index: -1,
			selectedItem: false,
			editMode: false
		}
	},
	computed: {
		...mapState({
			propAndPower: state => state.propulsionAndPower.propAndPower,
			editing: state => state.propulsionAndPower.editing,
			propulsionsAndPowers: state =>
				state.propulsionAndPower.propulsionsAndPowers
		}),
		powerListNotEmpty: {
			get() {
				return this.propulsionsAndPowers.length > 0
			}
		},
		mcp: {
			get() {
				return this.propAndPower.mcp
			},
			set(value) {
				this.setPowerField({ value, field: 'mcp' })
				this.validate('mcp')
			}
		},
		manufacturer: {
			get() {
				return this.propAndPower.manufacturer
			},
			set(value) {
				this.setPowerField({ value, field: 'manufacturer' })
				this.validate('manufacturer')
			}
		},
		model: {
			get() {
				return this.propAndPower.model
			},
			set(value) {
				this.setPowerField({ value, field: 'model' })
				this.validate('model')
			}
		},
		serialNumber: {
			get() {
				return this.propAndPower.serialNumber
			},
			set(value) {
				this.setPowerField({ value, field: 'serialNumber' })
				this.validate('serialNumber')
			}
		},
		power: {
			get() {
				return this.propAndPower.power
			},
			set(value) {
				this.setPowerField({ value, field: 'power' })
				this.validate('power')
			}
		}
	},
	mounted() {
		EventBus.$emit('prop-power-form-validation', this.$v.$invalid)
	},
	methods: {
		...mapActions(['setPowerField', 'addPower', 'commitEditPower']),
		validate(field) {
			this.$v[field]?.$touch()
			EventBus.$emit('prop-power-form-validation', this.$v.$invalid)
		},
		buttonAction() {
			this.$v.$touch()
			setTimeout(() => {
				if (!this.$v.$invalid && !this.$v.$error) {
					this.editing ? this.commitEditPower() : this.addPower()
					this.$v.$reset()
				}
			}, 0)
		}
	}
}
</script>

<style lang="scss" scoped>
#form-propulsion-component-content {
	.form-container {
		form {
			label {
				font-weight: $font-weight-default-bolder;
			}
			.internal-container {
				margin-bottom: 10px;
				width: 50%;
				.form-row {
					margin: 0;
					.contact-group {
						width: 100%;
						display: inline-flex;
						.buttons-container {
							margin-left: 10px;
							button {
								color: $font-color;
								&:focus {
									box-shadow: none;
								}
								&.remove-item {
									&:hover {
										background-color: $danger-color;
										color: white;
									}
								}
								&.add-item {
									&:hover {
										background-color: $btn-secondary-color;
										color: white;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
