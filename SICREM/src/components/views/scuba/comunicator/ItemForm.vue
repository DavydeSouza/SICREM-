<template>
	<div id="form-comunicator-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent>
				<!-- <div class="form-row title">
					<span>INTERCOMUNICADOR / GRAVADOR DE SOM E IMAGEM</span>
				</div> -->

				<div class="form-row">
					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.diversSuppliedByIntercoms.$error }"
					>
						<label for="diversSuppliedByIntercoms"
							>Intercomunicador atende quantos mergulhadores</label
						>
						<input
							id="diversSuppliedByIntercoms"
							v-model="diversSuppliedByIntercoms"
							type="number"
							class="form-control"
							placeholder="Quant. de cilindros"
							@blur="$v.diversSuppliedByIntercoms.$touch()"
						/>
						<div
							v-if="$v.diversSuppliedByIntercoms.$error"
							class="error-messages"
						>
							<span v-if="!$v.diversSuppliedByIntercoms.required"
								>O campo é obrigatório</span
							>
						</div>
					</div>

					<div class="form-group col-md-12 swith-content">
						<div class="form-group col-md-6 swith-content">
							<label>Intercomunicador</label>
							<toggle-button
								:sync="true"
								:width="70"
								:height="30"
								:color="`#01253f`"
								:value="intercom"
								:labels="{ checked: 'SIM', unchecked: 'NÃO' }"
								@change="intercom = !intercom"
							/>
						</div>

						<div class="form-group col-md-6 swith-content">
							<label>Gravador de Som e Imagem</label>
							<toggle-button
								:sync="true"
								:width="70"
								:height="30"
								:color="`#01253f`"
								:value="soundImageRecorder"
								:labels="{ checked: 'SIM', unchecked: 'NÃO' }"
								@change="soundImageRecorder = !soundImageRecorder"
							/>
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
							{{ comunicator.id ? 'Editar' : 'Adicionar' }}
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
import comunicatorValidation from '@/mixins/validations/scuba/comunicator.js'
import ManufacturerAndModel from '../../../shared/ManufacturerAndModel.vue'
import { ToggleButton } from 'vue-js-toggle-button'

export default {
	name: 'ItemFormComunicator',
	components: { ManufacturerAndModel, ToggleButton },
	mixins: [comunicatorValidation],
	data() {
		return {
			clear: false,
			manuHasError: true
		}
	},
	computed: {
		...mapState({
			comunicator: state => state.comunicator.comunicator
		}),
		diversSuppliedByIntercoms: {
			get() {
				return this.comunicator.diversSuppliedByIntercoms
			},
			set(value) {
				this.setComunicatorField({ value, field: 'dives' })
			}
		},
		intercom: {
			get() {
				return this.comunicator.intercom
			},
			set(value) {
				this.setComunicatorField({ value, field: 'intercom' })
			}
		},
		soundImageRecorder: {
			get() {
				return this.comunicator.soundImageRecorder
			},
			set(value) {
				this.setComunicatorField({ value, field: 'recorder' })
			}
		},
		idNumber: {
			get() {
				return this.comunicator.manufactured.idNumber
			},
			set(value) {
				this.setComunicatorField({ value, field: 'number' })
			}
		},
		manufacturer: {
			get() {
				return this.comunicator.manufactured.manufacturer
			},
			set(value) {
				this.setComunicatorField({ value, field: 'manufacturer' })
			}
		},
		model: {
			get() {
				return this.comunicator.manufactured.model
			},
			set(value) {
				this.setComunicatorField({ value, field: 'model' })
			}
		}
	},
	methods: {
		...mapActions([
			'setComunicatorField',
			'addComunicator',
			'commitEditComunicator'
		]),
		btnAction() {
			this.clear = !this.clear
			this.$v.$touch()
			setTimeout(() => {
				if (!this.manuHasError && !this.$v.$invalid && !this.$v.$error) {
					this.comunicator.id
						? this.commitEditComunicator()
						: this.addComunicator()
					this.$v.$reset()
				}
			}, 0)
		}
	}
}
</script>

<style lang="scss" scoped>
#form-comunicator-component-content {
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
