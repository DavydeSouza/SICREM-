<template>
	<div id="form-winch-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent>
				<!-- <div class="form-row title">
					<span>GUINCHO</span>
				</div> -->

				<div class="form-row">
					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.cableSpecification.$error }"
					>
						<label for="cableSpecification">Especificação do cabo</label>
						<input
							id="cableSpecification"
							v-model="cableSpecification"
							type="number"
							class="form-control"
							placeholder="Especificação do cabo"
							@blur="$v.cableSpecification.$touch()"
						/>
						<div v-if="$v.cableSpecification.$error" class="error-messages">
							<span v-if="!$v.cableSpecification.required"
								>O campo é obrigatório</span
							>
						</div>
					</div>

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
						:class="{ 'invalid-field': $v.testLoad.$error }"
					>
						<label for="testLoad">Carga de Teste</label>
						<input
							id="testLoad"
							v-model="testLoad"
							type="number"
							class="form-control"
							placeholder="Carga de Teste"
							@blur="$v.testLoad.$touch()"
						/>
						<div v-if="$v.testLoad.$error" class="error-messages">
							<span v-if="!$v.testLoad.required">O campo é obrigatório</span>
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
							{{ winch.id ? 'Editar' : 'Adicionar' }}
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
import winchValidation from '@/mixins/validations/scuba/winch.js'
import ManufacturerAndModel from '../../../shared/ManufacturerAndModel.vue'
import Conformity from '../../../shared/Conformity.vue'

export default {
	name: 'ItemFormWinch',
	components: { ManufacturerAndModel, Conformity },
	mixins: [winchValidation],
	data() {
		return {
			clear: false,
			manuHasError: true
		}
	},
	computed: {
		...mapState({
			winch: state => state.winch.winch
		}),
		cableSpecification: {
			get() {
				return this.winch.cableSpecification
			},
			set(value) {
				this.setWinchField({ value, field: 'cable' })
			}
		},
		workLoad: {
			get() {
				return this.winch.workLoad
			},
			set(value) {
				this.setWinchField({ value, field: 'workLoad' })
			}
		},
		testLoad: {
			get() {
				return this.winch.testLoad
			},
			set(value) {
				this.setWinchField({ value, field: 'testLoad' })
			}
		},
		idNumber: {
			get() {
				return this.winch.manufactured.idNumber
			},
			set(value) {
				this.setWinchField({ value, field: 'number' })
			}
		},
		manufacturer: {
			get() {
				return this.winch.manufactured.manufacturer
			},
			set(value) {
				this.setWinchField({ value, field: 'manufacturer' })
			}
		},
		model: {
			get() {
				return this.winch.manufactured.model
			},
			set(value) {
				this.setWinchField({ value, field: 'model' })
			}
		},
		declarationNumber: {
			get() {
				return this.winch.conformity.declarationNumber
			},
			set(value) {
				this.setWinchField({ value, field: 'declaration' })
			}
		},
		expiration: {
			get() {
				return this.winch.conformity.expiration
			},
			set(value) {
				this.setWinchField({ value, field: 'expiration' })
			}
		},
		issuedBy: {
			get() {
				return this.winch.conformity.issuedBy
			},
			set(value) {
				this.setWinchField({ value, field: 'issuedBy' })
			}
		}
	},
	methods: {
		...mapActions(['setWinchField', 'addWinch', 'commitEditWinch']),
		btnAction() {
			this.clear = !this.clear
			this.$v.$touch()
			setTimeout(() => {
				if (!this.manuHasError && !this.$v.$invalid && !this.$v.$error) {
					this.winch.id ? this.commitEditWinch() : this.addWinch()
					this.$v.$reset()
				}
			}, 0)
		}
	}
}
</script>

<style lang="scss" scoped>
#form-winch-component-content {
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
