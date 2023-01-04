<template>
	<div id="form-cylinder-frame-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent>
				<!-- <div class="form-row title">
					<span>QUADRO DE CILINDROS</span>
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
							numberCylinders="number"
							class="form-control"
							placeholder="Pressão do reservatório"
							@blur="$v.pressure.$touch()"
						/>
						<div v-if="$v.pressure.$error" class="error-messages">
							<span v-if="!$v.pressure.required">O campo é obrigatório</span>
						</div>
					</div>

					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.numberCylinders.$error }"
					>
						<label for="numberCylinders">Quant. de cilindros</label>
						<input
							id="numberCylinders"
							v-model="numberCylinders"
							type="number"
							class="form-control"
							placeholder="Quant. de cilindros"
							@blur="$v.numberCylinders.$touch()"
						/>
						<div v-if="$v.numberCylinders.$error" class="error-messages">
							<span v-if="!$v.numberCylinders.required"
								>O campo é obrigatório</span
							>
						</div>
					</div>

					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.capacityEachCylinder.$error }"
					>
						<label for="capacityEachCylinder"
							>Capacidade de cada reservatório</label
						>
						<input
							id="capacityEachCylinder"
							v-model="capacityEachCylinder"
							type="number"
							class="form-control"
							placeholder="Capacidade de cada reservatório"
							@blur="$v.capacityEachCylinder.$touch()"
						/>
						<div v-if="$v.capacityEachCylinder.$error" class="error-messages">
							<span v-if="!$v.capacityEachCylinder.required"
								>O campo é obrigatório</span
							>
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
							type="buttom"
							class="btn-custom secondary"
							@click="btnAction"
						>
							{{ cylinderFrame.id ? 'Editar' : 'Adicionar' }}
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
import cylinderFrameValidation from '@/mixins/validations/scuba/cylinderFrame.js'
import ManufacturerAndModel from '../../../shared/ManufacturerAndModel.vue'

export default {
	name: 'ItemFormCylinderFrame',
	components: { ManufacturerAndModel },
	mixins: [cylinderFrameValidation],
	data() {
		return {
			clear: false,
			manuHasError: true
		}
	},
	computed: {
		...mapState({
			cylinderFrame: state => state.cylinderFrame.cylinderFrame
		}),
		numberCylinders: {
			get() {
				return this.cylinderFrame.numberCylinders
			},
			set(value) {
				this.setCylinderFrameField({ value, field: 'qtd' })
			}
		},
		pressure: {
			get() {
				return this.cylinderFrame.pressure
			},
			set(value) {
				this.setCylinderFrameField({ value, field: 'pressure' })
			}
		},
		capacityEachCylinder: {
			get() {
				return this.cylinderFrame.capacityEachCylinder
			},
			set(value) {
				this.setCylinderFrameField({ value, field: 'capacity' })
			}
		},
		idNumber: {
			get() {
				return this.cylinderFrame.manufactured.idNumber
			},
			set(value) {
				this.setCylinderFrameField({ value, field: 'number' })
			}
		},
		manufacturer: {
			get() {
				return this.cylinderFrame.manufactured.manufacturer
			},
			set(value) {
				this.setCylinderFrameField({ value, field: 'manufacturer' })
			}
		},
		model: {
			get() {
				return this.cylinderFrame.manufactured.model
			},
			set(value) {
				this.setCylinderFrameField({ value, field: 'model' })
			}
		}
	},
	methods: {
		...mapActions([
			'setCylinderFrameField',
			'addCylinderFrame',
			'commitEditCylinderFrame'
		]),
		btnAction() {
			this.clear = !this.clear
			this.$v.$touch()
			setTimeout(() => {
				if (!this.manuHasError && !this.$v.$invalid && !this.$v.$error) {
					this.cylinderFrame.id
						? this.commitEditCylinderFrame()
						: this.addCylinderFrame()
					this.$v.$reset()
				}
			}, 0)
		}
	}
}
</script>

<style lang="scss" scoped>
#form-cylinder-frame-component-content {
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
