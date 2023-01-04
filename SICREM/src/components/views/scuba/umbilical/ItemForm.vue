<template>
	<div id="form-umbilical-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent>
				<!-- <div class="form-row title">
					<span>UMBILICAL</span>
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
							length="number"
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
						:class="{ 'invalid-field': $v.length.$error }"
					>
						<label for="length">Comprimento</label>
						<input
							id="length"
							v-model="length"
							type="number"
							class="form-control"
							placeholder="Comprimento"
							@blur="$v.length.$touch()"
						/>
						<div v-if="$v.length.$error" class="error-messages">
							<span v-if="!$v.length.required">O campo é obrigatório</span>
						</div>
					</div>

					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.internalDiameter.$error }"
					>
						<label for="internalDiameter">Diâmetro interno</label>
						<input
							id="internalDiameter"
							v-model="internalDiameter"
							type="number"
							class="form-control"
							placeholder="Diâmetro interno"
							@blur="$v.internalDiameter.$touch()"
						/>
						<div v-if="$v.internalDiameter.$error" class="error-messages">
							<span v-if="!$v.internalDiameter.required"
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
							{{ umbilical.id ? 'Editar' : 'Adicionar' }}
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
import umbilicalValidation from '@/mixins/validations/scuba/umbilical.js'
import ManufacturerAndModel from '../../../shared/ManufacturerAndModel.vue'

export default {
	name: 'ItemFormUmbilical',
	components: { ManufacturerAndModel },
	mixins: [umbilicalValidation],
	data() {
		return {
			clear: false,
			manuHasError: true
		}
	},
	computed: {
		...mapState({
			umbilical: state => state.umbilical.umbilical
		}),
		length: {
			get() {
				return this.umbilical.length
			},
			set(value) {
				this.setUmbilicalField({ value, field: 'length' })
			}
		},
		pressure: {
			get() {
				return this.umbilical.pressure
			},
			set(value) {
				this.setUmbilicalField({ value, field: 'pressure' })
			}
		},
		internalDiameter: {
			get() {
				return this.umbilical.internalDiameter
			},
			set(value) {
				this.setUmbilicalField({ value, field: 'internalDiameter' })
			}
		},
		idNumber: {
			get() {
				return this.umbilical.manufactured.idNumber
			},
			set(value) {
				this.setUmbilicalField({ value, field: 'number' })
			}
		},
		manufacturer: {
			get() {
				return this.umbilical.manufactured.manufacturer
			},
			set(value) {
				this.setUmbilicalField({ value, field: 'manufacturer' })
			}
		},
		model: {
			get() {
				return this.umbilical.manufactured.model
			},
			set(value) {
				this.setUmbilicalField({ value, field: 'model' })
			}
		}
	},
	methods: {
		...mapActions(['setUmbilicalField', 'addUmbilical', 'commitEditUmbilical']),
		btnAction() {
			this.clear = !this.clear
			this.$v.$touch()
			setTimeout(() => {
				if (!this.manuHasError && !this.$v.$invalid && !this.$v.$error) {
					this.umbilical.id ? this.commitEditUmbilical() : this.addUmbilical()
					this.$v.$reset()
				}
			}, 0)
		}
	}
}
</script>

<style lang="scss" scoped>
#form-umbilical-component-content {
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
