<template>
	<div id="form-portico-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent>
				<!-- <div class="form-row title">
					<span>PÓRTICO</span>
				</div> -->

				<div class="form-row">
					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.workLoad.$error }"
					>
						<label for="workLoad">Carga de Trabalho</label>
						<input
							id="workLoad"
							v-model="workLoad"
							type="number"
							class="form-control"
							placeholder="Carga de Trabalho"
							@blur="$v.workLoad.$touch()"
						/>
						<div v-if="$v.workLoad.$error" class="error-messages">
							<span v-if="!$v.workLoad.required">O campo é obrigatório</span>
						</div>
					</div>

					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.material.$error }"
					>
						<label for="material">Material</label>
						<input
							id="material"
							v-model="material"
							type="text"
							class="form-control"
							placeholder="Material"
							@blur="$v.material.$touch()"
						/>
						<div v-if="$v.material.$error" class="error-messages">
							<span v-if="!$v.material.required">O campo é obrigatório</span>
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
							{{ portico.id ? 'Editar' : 'Adicionar' }}
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
import porticoValidation from '@/mixins/validations/scuba/portico.js'
import ManufacturerAndModel from '../../../shared/ManufacturerAndModel.vue'
import Conformity from '../../../shared/Conformity.vue'

export default {
	name: 'ItemFormPortico',
	components: { ManufacturerAndModel, Conformity },
	mixins: [porticoValidation],
	data() {
		return {
			clear: false,
			manuHasError: true
		}
	},
	computed: {
		...mapState({
			portico: state => state.portico.portico
		}),
		workLoad: {
			get() {
				return this.portico.workLoad
			},
			set(value) {
				this.setPorticoField({ value, field: 'workLoad' })
			}
		},
		material: {
			get() {
				return this.portico.material
			},
			set(value) {
				this.setPorticoField({ value, field: 'material' })
			}
		},
		idNumber: {
			get() {
				return this.portico.manufactured.idNumber
			},
			set(value) {
				this.setPorticoField({ value, field: 'number' })
			}
		},
		manufacturer: {
			get() {
				return this.portico.manufactured.manufacturer
			},
			set(value) {
				this.setPorticoField({ value, field: 'manufacturer' })
			}
		},
		model: {
			get() {
				return this.portico.manufactured.model
			},
			set(value) {
				this.setPorticoField({ value, field: 'model' })
			}
		},
		declarationNumber: {
			get() {
				return this.portico.conformity.declarationNumber
			},
			set(value) {
				this.setPorticoField({ value, field: 'declaration' })
			}
		},
		expiration: {
			get() {
				return this.portico.conformity.expiration
			},
			set(value) {
				this.setPorticoField({ value, field: 'expiration' })
			}
		},
		issuedBy: {
			get() {
				return this.portico.conformity.issuedBy
			},
			set(value) {
				this.setPorticoField({ value, field: 'issuedBy' })
			}
		}
	},
	methods: {
		...mapActions(['setPorticoField', 'addPortico', 'commitEditPortico']),
		btnAction() {
			this.clear = !this.clear
			this.$v.$touch()
			setTimeout(() => {
				if (!this.manuHasError && !this.$v.$invalid && !this.$v.$error) {
					this.portico.id ? this.commitEditPortico() : this.addPortico()
					this.$v.$reset()
				}
			}, 0)
		}
	}
}
</script>

<style lang="scss" scoped>
#form-portico-component-content {
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
