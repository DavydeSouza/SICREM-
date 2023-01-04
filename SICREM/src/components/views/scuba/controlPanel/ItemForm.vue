<template>
	<div id="form-control-panel-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent>
				<!-- <div class="form-row title">
					<span>PAINEL DE CONTROLE</span>
				</div> -->

				<div class="form-row">
					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.diversSupplied.$error }"
					>
						<label for="diversSupplied">Mergulhadores atendidos</label>
						<input
							id="diversSupplied"
							v-model="diversSupplied"
							type="number"
							class="form-control"
							placeholder="Quant. de cilindros"
							@blur="$v.diversSupplied.$touch()"
						/>
						<div v-if="$v.diversSupplied.$error" class="error-messages">
							<span v-if="!$v.diversSupplied.required"
								>O campo é obrigatório</span
							>
						</div>
					</div>

					<div class="form-group col-md-12 swith-content">
						<div class="form-group col-md-8 swith-content">
							<label>Manômetro de profundidade (pneufatômetro):</label>
							<toggle-button
								:sync="true"
								:width="70"
								:height="30"
								:color="`#01253f`"
								:value="pneumaticMeter"
								:labels="{ checked: 'SIM', unchecked: 'NÃO' }"
								@change="pneumaticMeter = !pneumaticMeter"
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
							{{ controlPanel.id ? 'Editar' : 'Adicionar' }}
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
import controlPanelValidation from '@/mixins/validations/scuba/controlPanel.js'
import ManufacturerAndModel from '../../../shared/ManufacturerAndModel.vue'
import { ToggleButton } from 'vue-js-toggle-button'

export default {
	name: 'ItemFormControlPanel',
	components: { ManufacturerAndModel, ToggleButton },
	mixins: [controlPanelValidation],
	data() {
		return {
			clear: false,
			manuHasError: true
		}
	},
	computed: {
		...mapState({
			controlPanel: state => state.controlPanel.controlPanel
		}),
		diversSupplied: {
			get() {
				return this.controlPanel.diversSupplied
			},
			set(value) {
				this.setControlPanelField({ value, field: 'dives' })
			}
		},
		pneumaticMeter: {
			get() {
				return this.controlPanel.pneumaticMeter
			},
			set(value) {
				this.setControlPanelField({ value, field: 'pneumaticMeter' })
			}
		},
		idNumber: {
			get() {
				return this.controlPanel.manufactured.idNumber
			},
			set(value) {
				this.setControlPanelField({ value, field: 'number' })
			}
		},
		manufacturer: {
			get() {
				return this.controlPanel.manufactured.manufacturer
			},
			set(value) {
				this.setControlPanelField({ value, field: 'manufacturer' })
			}
		},
		model: {
			get() {
				return this.controlPanel.manufactured.model
			},
			set(value) {
				this.setControlPanelField({ value, field: 'model' })
			}
		}
	},
	methods: {
		...mapActions([
			'setControlPanelField',
			'addControlPanel',
			'commitEditControlPanel'
		]),
		btnAction() {
			this.clear = !this.clear
			this.$v.$touch()
			setTimeout(() => {
				if (!this.manuHasError && !this.$v.$invalid && !this.$v.$error) {
					this.controlPanel.id
						? this.commitEditControlPanel()
						: this.addControlPanel()
					this.$v.$reset()
				}
			}, 0)
		}
	}
}
</script>

<style lang="scss" scoped>
#form-control-panel-component-content {
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
