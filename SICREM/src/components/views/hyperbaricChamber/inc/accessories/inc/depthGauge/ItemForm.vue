<template>
	<div id="form-hyperbaric-chamber-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent>
				<MultiRadio
					:clear="clear"
					:radios="radios"
					@multi-radio-change="data => radioMapper(data)"
				/>

				<div class="form-row">
					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.diameter.$error }"
					>
						<label for="diameter">Diâmetro</label>
						<input
							id="diameter"
							v-model="diameter"
							type="number"
							class="form-control"
							placeholder="Diâmetro"
							@blur="$v.diameter.$touch()"
						/>
						<div v-if="$v.diameter.$error" class="error-messages">
							<span v-if="!$v.diameter.required">O campo é obrigatório</span>
						</div>
					</div>

					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.escale.$error }"
					>
						<label for="escale">Escala</label>
						<input
							id="escale"
							v-model="escale"
							type="number"
							class="form-control"
							placeholder="Escala"
							@blur="$v.escale.$touch()"
						/>
						<div v-if="$v.escale.$error" class="error-messages">
							<span v-if="!$v.escale.required">O campo é obrigatório</span>
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
							{{ depthGauge && depthGauge.id ? 'Editar' : 'Adicionar' }}
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
import validation from '@/mixins/validations/hyperbaricChamber/'
import ManufacturerAndModel from '@/components/shared/ManufacturerAndModel.vue'
import MultiRadio from '@/components/shared/MultiRadio.vue'

export default {
	name: 'ItemFormDepthGauge',
	components: { ManufacturerAndModel, MultiRadio },
	mixins: [validation],
	props: {
		data: {
			type: Object,
			default: null
		}
	},
	data() {
		return {
			clear: false,
			manuHasError: true,
			radios: [
				{
					label: 'Local',
					name: 'local',
					values: [
						{ label: 'Interior', value: 'interior' },
						{ label: 'Exterior', value: 'exterior' }
					]
				},
				{
					label: 'Tipo',
					name: 'type',
					values: [
						{ label: 'Câmara', value: 'Câmara' },
						{ label: 'Antecâmara', value: 'Antecâmara' }
					]
				}
			]
		}
	},
	computed: {
		...mapState({
			depthGauge: state => state.depthGauges.depthGauge
		}),
		id: {
			get() {
				return this.depthGauge.id
			},
			set(value) {
				this.setDepthGaugeField({ value, field: 'id' })
			}
		},
		diameter: {
			get() {
				return this.depthGauge.diameter
			},
			set(value) {
				this.setDepthGaugeField({ value, field: 'diameter' })
			}
		},
		escale: {
			get() {
				return this.depthGauge.escale
			},
			set(value) {
				this.setDepthGaugeField({ value, field: 'escale' })
			}
		},
		type: {
			get() {
				return this.depthGauge.type
			},
			set(value) {
				this.setDepthGaugeField({ value, field: 'type' })
			}
		},
		local: {
			get() {
				return this.depthGauge.local
			},
			set(value) {
				this.setDepthGaugeField({ value, field: 'local' })
			}
		},
		idNumber: {
			get() {
				return this.depthGauge.manufactured.idNumber
			},
			set(value) {
				this.setDepthGaugeManuField({ value, field: 'idNumber' })
			}
		},
		manufacturer: {
			get() {
				return this.depthGauge.manufactured.manufacturer
			},
			set(value) {
				this.setDepthGaugeManuField({ value, field: 'manufacturer' })
			}
		},
		model: {
			get() {
				return this.depthGauge.manufactured.model
			},
			set(value) {
				this.setDepthGaugeManuField({ value, field: 'model' })
			}
		}
	},
	methods: {
		...mapActions([
			'setDepthGaugeField',
			'setDepthGaugeManuField',
			'addDepthGauge',
			'commitEditDepthGauge',
			'resetDepthGaugeFields'
		]),
		btnAction() {
			this.clear = !this.clear
			this.$v.$touch()
			setTimeout(() => {
				if (!this.manuHasError && !this.$v.$invalid && !this.$v.$error) {
					this.depthGauge && this.depthGauge.id
						? this.commitEditDepthGauge()
						: this.addDepthGauge()
					this.$v.$reset()
				}
			}, 0)
		},
		radioMapper(data) {
			this[data.name] = data.value
		}
	}
}
</script>

<style lang="scss" scoped>
#form-hyperbaric-chamber-component-content {
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
						&.col-md-4 {
							flex-basis: 32%;
						}
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
