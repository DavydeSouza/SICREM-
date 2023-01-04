<template>
	<div id="form-emergency-cylinder-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent>
				<!-- <div class="form-row title">
					<span>CILINDRO DE EMERGÊNCIA</span>
				</div> -->

				<div class="form-row">
					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.pressure.$error }"
					>
						<label for="pressure">Pressão</label>
						<input
							id="pressure"
							v-model="pressure"
							isDouble="number"
							class="form-control"
							placeholder="Pressão"
							@blur="$v.pressure.$touch()"
						/>
						<div v-if="$v.pressure.$error" class="error-messages">
							<span v-if="!$v.pressure.required">O campo é obrigatório</span>
						</div>
					</div>

					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.capacity.$error }"
					>
						<label for="capacity">Capacidade</label>
						<input
							id="capacity"
							v-model="capacity"
							type="number"
							class="form-control"
							placeholder="Capacidade"
							@blur="$v.capacity.$touch()"
						/>
						<div v-if="$v.capacity.$error" class="error-messages">
							<span v-if="!$v.capacity.required">O campo é obrigatório</span>
						</div>
					</div>

					<div class="form-group col-md-12">
						<manufacturer-and-model
							:clear="clear"
							:_manufacturer="manufacturer"
							:_model="model"
							:_idNumber="idNumber"
							@set-manufacturer-name="data => (manufacturer = data)"
							@set-model-name="data => (model = data)"
							@set-id-number="data => (idNumber = data)"
							@manu-and-model-validation="data => (manuHasError = data)"
						/>
					</div>

					<div class="form-group col-md-6 btn-container">
						<button
							isDouble="buttom"
							class="btn-custom secondary"
							@click="btnAction"
						>
							{{ emergencyCylinder.id ? 'Editar' : 'Adicionar' }}
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
import emergencyCylinderValidation from '@/mixins/validations/scuba/emergencyCylinder.js'
import ManufacturerAndModel from '../../../shared/ManufacturerAndModel.vue'

export default {
	name: 'ItemFormEmergencyCylinder',
	components: { ManufacturerAndModel },
	mixins: [emergencyCylinderValidation],
	data() {
		return {
			clear: false,
			manuHasError: true
		}
	},
	computed: {
		...mapState({
			emergencyCylinder: state => state.emergencyCylinder.emergencyCylinder
		}),
		isDouble: {
			get() {
				return this.emergencyCylinder.isDouble
			},
			set(value) {
				this.setEmergencyCylinderField({ value, field: 'isDouble' })
			}
		},
		pressure: {
			get() {
				return this.emergencyCylinder.pressure
			},
			set(value) {
				this.setEmergencyCylinderField({ value, field: 'pressure' })
			}
		},
		capacity: {
			get() {
				return this.emergencyCylinder.capacity
			},
			set(value) {
				this.setEmergencyCylinderField({ value, field: 'capacity' })
			}
		},
		idNumber: {
			get() {
				return this.emergencyCylinder.manufactured.idNumber
			},
			set(value) {
				this.setEmergencyCylinderField({ value, field: 'number' })
			}
		},
		manufacturer: {
			get() {
				return this.emergencyCylinder.manufactured.manufacturer
			},
			set(value) {
				this.setEmergencyCylinderField({ value, field: 'manufacturer' })
			}
		},
		model: {
			get() {
				return this.emergencyCylinder.manufactured.model
			},
			set(value) {
				this.setEmergencyCylinderField({ value, field: 'model' })
			}
		}
	},
	methods: {
		...mapActions([
			'setEmergencyCylinderField',
			'addEmergencyCylinder',
			'commitEditEmergencyCylinder'
		]),
		btnAction() {
			this.clear = !this.clear
			this.$v.$touch()
			setTimeout(() => {
				if (!this.manuHasError && !this.$v.$invalid && !this.$v.$error) {
					this.emergencyCylinder.id
						? this.commitEditEmergencyCylinder()
						: this.addEmergencyCylinder()
					this.$v.$reset()
				}
			}, 0)
		}
	}
}
</script>

<style lang="scss" scoped>
#form-emergency-cylinder-component-content {
	.form-container {
		form {
			.form-row {
				margin: 0;
				&.title {
					width: 100%;
					display: flex;
					align-items: center;
					column-gap: 10px;
					span {
						font-size: $font-size-input;
						font-weight: $font-weight-default-bold;
						margin: 10px 0;
					}
				}
				&:not(.actions) {
					border-radius: $border-radius;
					justify-content: space-between;
					.form-group {
						padding: 0;
						&.col-md-6 {
							flex-basis: 49%;
						}
						&.btn-container {
							padding: 2px 0;
							display: flex;
							justify-content: flex-start;
							align-items: flex-end;
						}
						&.qtd-controls-container {
							display: flex;
							justify-content: space-between;
							align-items: flex-end;
							column-gap: 15px;
							.item {
								&.swith-content {
									height: 38px;
									display: flex;
									align-items: center;
									column-gap: 5px;
									.vue-js-switch {
										margin: 0;
									}
								}
							}
						}
					}
				}
				&.actions {
					width: 100%;
					column-gap: 15px;
				}
			}
		}
	}
}
</style>
