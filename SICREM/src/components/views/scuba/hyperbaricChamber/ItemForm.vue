<template>
	<div id="form-hyperbaric-chamber-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent>
				<!-- <div class="form-row title">
					<span>CÂMARA HIPERBÁRICA</span>
				</div> -->

				<div class="form-row">
					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.workPressure.$error }"
					>
						<label for="workPressure">Especificação do cabo</label>
						<input
							id="workPressure"
							v-model="workPressure"
							type="number"
							class="form-control"
							placeholder="Especificação do cabo"
							@blur="$v.workPressure.$touch()"
						/>
						<div v-if="$v.workPressure.$error" class="error-messages">
							<span v-if="!$v.workPressure.required"
								>O campo é obrigatório</span
							>
						</div>
					</div>

					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.testPressure.$error }"
					>
						<label for="testPressure">Carga de Trabalho</label>
						<input
							id="testPressure"
							v-model="testPressure"
							type="number"
							class="form-control"
							placeholder="Carga de Trabalho"
							@blur="$v.testPressure.$touch()"
						/>
						<div v-if="$v.testPressure.$error" class="error-messages">
							<span v-if="!$v.testPressure.required"
								>O campo é obrigatório</span
							>
						</div>
					</div>

					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.dimensions.$error }"
					>
						<label for="dimensions">Carga de Teste</label>
						<input
							id="dimensions"
							v-model="dimensions"
							type="number"
							class="form-control"
							placeholder="Carga de Teste"
							@blur="$v.dimensions.$touch()"
						/>
						<div v-if="$v.dimensions.$error" class="error-messages">
							<span v-if="!$v.dimensions.required">O campo é obrigatório</span>
						</div>
					</div>

					<div
						class="form-group col-md-12"
						:class="{ 'invalid-field': $v.description.$error }"
					>
						<label for="description">Descrição</label>
						<textarea
							id="description"
							v-model="description"
							class="form-control"
							placeholder="Descrição"
							@blur="$v.description.$touch()"
						/>
						<div v-if="$v.description.$error" class="error-messages">
							<span v-if="!$v.description.required">O campo é obrigatório</span>
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
						<conformity
							:clear="clear"
							:_declarationNumber="declarationNumber"
							:_expiration="expiration"
							:_issuedBy="issuedBy"
							@set-declaration-number="data => (declarationNumber = data)"
							@set-expiration="data => (expiration = data)"
							@set-issue-by="data => (issuedBy = data)"
							@conformity-validation="data => (manuHasError = data)"
						/>
					</div>

					<div class="form-group col-md-6 btn-container">
						<button
							type="buttom"
							class="btn-custom secondary"
							@click="btnAction"
						>
							{{ hyperbaricChamber.id ? 'Editar' : 'Adicionar' }}
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
import validation from '@/mixins/validations/scuba/hyperbaricChamber.js'
import ManufacturerAndModel from '../../../shared/ManufacturerAndModel.vue'
import Conformity from '../../../shared/Conformity.vue'

export default {
	name: 'ItemFormHyperbaricChamber',
	components: { ManufacturerAndModel, Conformity },
	mixins: [validation],
	data() {
		return {
			clear: false,
			manuHasError: true
		}
	},
	computed: {
		...mapState({
			hyperbaricChamber: state => state.hyperbaricChamber.hyperbaricChamber
		}),
		workPressure: {
			get() {
				return this.hyperbaricChamber.workPressure
			},
			set(value) {
				this.setHyperbaricChamberField({ value, field: 'workPressure' })
			}
		},
		testPressure: {
			get() {
				return this.hyperbaricChamber.testPressure
			},
			set(value) {
				this.setHyperbaricChamberField({ value, field: 'testPressure' })
			}
		},
		dimensions: {
			get() {
				return this.hyperbaricChamber.dimensions
			},
			set(value) {
				this.setHyperbaricChamberField({ value, field: 'dimensions' })
			}
		},
		description: {
			get() {
				return this.hyperbaricChamber.description
			},
			set(value) {
				this.setHyperbaricChamberField({ value, field: 'description' })
			}
		},
		idNumber: {
			get() {
				return this.hyperbaricChamber.manufactured.idNumber
			},
			set(value) {
				this.setHyperbaricChamberField({ value, field: 'number' })
			}
		},
		manufacturer: {
			get() {
				return this.hyperbaricChamber.manufactured.manufacturer
			},
			set(value) {
				this.setHyperbaricChamberField({ value, field: 'manufacturer' })
			}
		},
		model: {
			get() {
				return this.hyperbaricChamber.manufactured.model
			},
			set(value) {
				this.setHyperbaricChamberField({ value, field: 'model' })
			}
		},
		declarationNumber: {
			get() {
				return this.hyperbaricChamber.conformity.declarationNumber
			},
			set(value) {
				this.setHyperbaricChamberField({ value, field: 'declaration' })
			}
		},
		expiration: {
			get() {
				return this.hyperbaricChamber.conformity.expiration
			},
			set(value) {
				this.setHyperbaricChamberField({ value, field: 'expiration' })
			}
		},
		issuedBy: {
			get() {
				return this.hyperbaricChamber.conformity.issuedBy
			},
			set(value) {
				this.setHyperbaricChamberField({ value, field: 'issuedBy' })
			}
		}
	},
	methods: {
		...mapActions([
			'setHyperbaricChamberField',
			'addHyperbaricChamber',
			'commitEditHyperbaricChamber'
		]),
		btnAction() {
			this.clear = !this.clear
			this.$v.$touch()
			setTimeout(() => {
				if (!this.manuHasError && !this.$v.$invalid && !this.$v.$error) {
					this.hyperbaricChamber.id
						? this.commitEditHyperbaricChamber()
						: this.addHyperbaricChamber()
					this.$v.$reset()
				}
			}, 0)
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
