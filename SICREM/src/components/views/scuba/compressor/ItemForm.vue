<template>
	<div id="form-compressor-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent>
				<!-- <div class="form-row title">
					<span>A. COMPRESSOR</span>
				</div> -->

				<div class="form-row">
					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.type.$error }"
					>
						<label for="type">Tipo</label>
						<input
							id="type"
							v-model="type"
							type="text"
							class="form-control"
							placeholder="Tipo de compressor"
							@blur="$v.type.$touch()"
						/>
						<div v-if="$v.type.$error" class="error-messages">
							<span v-if="!$v.type.required">O campo é obrigatório</span>
							<span v-if="!$v.type.minLength">
								Deve ter no minimo
								{{ $v.type.$params.minLength.min }} caracteres
							</span>
						</div>
					</div>

					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.pressure.$error }"
					>
						<label for="pressure">Pressão</label>
						<input
							id="pressure"
							v-model="pressure"
							type="number"
							class="form-control"
							placeholder="Pressão do compressor"
							@blur="$v.pressure.$touch()"
						/>
						<div v-if="$v.pressure.$error" class="error-messages">
							<span v-if="!$v.pressure.required">O campo é obrigatório</span>
						</div>
					</div>

					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.flowrate.$error }"
					>
						<label for="type">Vazão</label>
						<input
							id="type"
							v-model="flowrate"
							type="number"
							class="form-control"
							placeholder="Vazão do compressor"
							@blur="$v.flowrate.$touch()"
						/>
						<div v-if="$v.flowrate.$error" class="error-messages">
							<span v-if="!$v.flowrate.required">O campo é obrigatório</span>
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
							{{ compressor.id ? 'Editar' : 'Adicionar' }}
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
import compressorValidation from '@/mixins/validations/scuba/compressor.js'
import ManufacturerAndModel from '../../../shared/ManufacturerAndModel.vue'

export default {
	name: 'ItemFormCompressor',
	components: { ManufacturerAndModel },
	mixins: [compressorValidation],
	data() {
		return {
			clear: false,
			manuHasError: true
		}
	},
	computed: {
		...mapState({
			compressor: state => state.compressor.compressor
		}),
		type: {
			get() {
				return this.compressor.type
			},
			set(value) {
				this.setCompressorField({ value, field: 'type' })
			}
		},
		pressure: {
			get() {
				return this.compressor.pressure
			},
			set(value) {
				this.setCompressorField({ value, field: 'pressure' })
			}
		},
		flowrate: {
			get() {
				return this.compressor.flowrate
			},
			set(value) {
				this.setCompressorField({ value, field: 'flowrate' })
			}
		},
		idNumber: {
			get() {
				return this.compressor.manufactured.idNumber
			},
			set(value) {
				this.setCompressorField({ value, field: 'number' })
			}
		},
		manufacturer: {
			get() {
				return this.compressor.manufactured.manufacturer
			},
			set(value) {
				this.setCompressorField({ value, field: 'manufacturer' })
			}
		},
		model: {
			get() {
				return this.compressor.manufactured.model
			},
			set(value) {
				this.setCompressorField({ value, field: 'model' })
			}
		}
	},
	methods: {
		...mapActions([
			'setCompressorField',
			'addCompressor',
			'commitEditCompressor'
		]),
		btnAction() {
			this.clear = !this.clear
			this.$v.$touch()

			setTimeout(() => {
				if (!this.manuHasError && !this.$v.$invalid && !this.$v.$error) {
					this.compressor.id
						? this.commitEditCompressor()
						: this.addCompressor()
					this.$v.$reset()
				}
			}, 0)
		}
	}
}
</script>

<style lang="scss" scoped>
#form-compressor-component-content {
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
