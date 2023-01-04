<template>
	<div id="form-basket-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent>
				<!-- <div class="form-row title">
					<span>CESTA</span>
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

					<div class="form-group col-md-12 swith-content">
						<div class="form-group col-md-6 swith-content">
							<label>Cesta para Mergulho</label>
							<toggle-button
								:sync="true"
								:width="70"
								:height="30"
								:color="`#01253f`"
								:value="diving"
								:labels="{ checked: 'SIM', unchecked: 'NÃO' }"
								@change="diving = !diving"
							/>
						</div>

						<div class="form-group col-md-6 swith-content">
							<label>Cesta de Acesso </label>
							<toggle-button
								:sync="true"
								:width="70"
								:height="30"
								:color="`#01253f`"
								:value="access"
								:labels="{ checked: 'SIM', unchecked: 'NÃO' }"
								@change="access = !access"
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
							{{ basket.id ? 'Editar' : 'Adicionar' }}
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
import basketValidation from '@/mixins/validations/scuba/basket.js'
import ManufacturerAndModel from '../../../shared/ManufacturerAndModel.vue'
import Conformity from '../../../shared/Conformity.vue'
import { ToggleButton } from 'vue-js-toggle-button'

export default {
	name: 'ItemFormBasket',
	components: { ManufacturerAndModel, Conformity, ToggleButton },
	mixins: [basketValidation],
	data() {
		return {
			clear: false,
			manuHasError: true
		}
	},
	computed: {
		...mapState({
			basket: state => state.basket.basket
		}),
		diving: {
			get() {
				return this.basket.diving
			},
			set(value) {
				this.setBasketField({ value, field: 'diving' })
			}
		},
		access: {
			get() {
				return this.basket.access
			},
			set(value) {
				this.setBasketField({ value, field: 'access' })
			}
		},
		workLoad: {
			get() {
				return this.basket.workLoad
			},
			set(value) {
				this.setBasketField({ value, field: 'workLoad' })
			}
		},
		idNumber: {
			get() {
				return this.basket.manufactured.idNumber
			},
			set(value) {
				this.setBasketField({ value, field: 'number' })
			}
		},
		manufacturer: {
			get() {
				return this.basket.manufactured.manufacturer
			},
			set(value) {
				this.setBasketField({ value, field: 'manufacturer' })
			}
		},
		model: {
			get() {
				return this.basket.manufactured.model
			},
			set(value) {
				this.setBasketField({ value, field: 'model' })
			}
		},
		declarationNumber: {
			get() {
				return this.basket.conformity.declarationNumber
			},
			set(value) {
				this.setBasketField({ value, field: 'declaration' })
			}
		},
		expiration: {
			get() {
				return this.basket.conformity.expiration
			},
			set(value) {
				this.setBasketField({ value, field: 'expiration' })
			}
		},
		issuedBy: {
			get() {
				return this.basket.conformity.issuedBy
			},
			set(value) {
				this.setBasketField({ value, field: 'issuedBy' })
			}
		}
	},
	methods: {
		...mapActions(['setBasketField', 'addBasket', 'commitEditBasket']),
		btnAction() {
			this.clear = !this.clear
			this.$v.$touch()
			setTimeout(() => {
				if (!this.manuHasError && !this.$v.$invalid && !this.$v.$error) {
					this.basket.id ? this.commitEditBasket() : this.addBasket()
					this.$v.$reset()
				}
			}, 0)
		}
	}
}
</script>

<style lang="scss" scoped>
#form-basket-component-content {
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
