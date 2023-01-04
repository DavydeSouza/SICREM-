<template>
	<div id="shipyard-component-content">
		<div class="form-container">
			<form novalidate="true" @submit.prevent="newShipYard">
				<div class="form-row">
					<div class="form-group col-md-8 shypyard-external-container">
						<div id="shypyard-internal-container">
							<div
								id="shipyard-container"
								class="form-group select-container"
								:class="{ 'invalid-field': $v.shipyard.$error }"
							>
								<label for="ship-type-container">Estaleiro</label>
								<v-select
									v-model="shipyard_"
									placeholder="Digite o nome do estaleiro desejado"
									track-by="name"
									label="name"
									:clearable="false"
									:options="shipyards"
									@search="debouncer(() => getShipYardByName($event))"
									@close=";[$v.$touch()]"
								>
									<span slot="noResult"
										>Digite no mínimo 3 caracteres para buscar</span
									>
									<span slot="noOptions"
										>Digite no mínimo 3 caracteres para buscar</span
									>

									<template #no-options="{ search, searching }">
										<template v-if="searching" class="info-messages">
											<div class="not-found-message">
												<span
													>Nenhum estaleiro com o nome
													<em>{{ `"${search}"` }}</em>
													encontrado.
												</span>
												<span
													id="new-shypiard"
													@click.stop="newShipYard(search)"
												>
													Clique aqui para cadastrar um novo.
												</span>
											</div>
										</template>
										<em v-else style="opacity: 0.5;"
											>Digíte o nome do estaleiro desejado</em
										>
									</template>
								</v-select>
								<div v-if="$v.shipyard.$error" class="error-messages">
									<span v-if="!$v.shipyard.required"
										>O campo é obrigatório</span
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>

			<modal v-if="showForm" @close="showForm = false">
				<div slot="header" class="header">
					<span>
						<h2>
							<i class="fas fa-industry" />
							Adcionar novo estaleiro
						</h2>
					</span>
				</div>
				<div slot="body">
					<ship-yard-form
						:validate="$v.$invalid"
						@ship-yard-form-validattion="data => (shipYardFormInvalid = data)"
						@close="showForm = false"
					/>
				</div>
			</modal>
		</div>
	</div>
</template>

<script>
import shipYardValidation from '@/mixins/validations/ships/shipYard.js'
import toValidate from '@/mixins/validations/toValidate.js'
import debounceMixin from '@/mixins/debounceMixin.js'
import Modal from '@/components/shared/Modal'
import { mapState, mapActions } from 'vuex'
import ShipYardForm from './ShipYardForm'

export default {
	name: 'ShipYard',
	components: { Modal, ShipYardForm },
	mixins: [shipYardValidation, toValidate, debounceMixin],
	data() {
		return {
			updating: true,
			showForm: false,
			shipYardFormInvalid: true
		}
	},
	computed: {
		...mapState({
			shipyard: state => state.shipyards.shipyard,
			shipyards: state => state.shipyards.shipyards
		}),
		shipyard_: {
			get() {
				return this.shipyard.name ? this.shipyard : this.shipyard.name
			},
			set(value) {
				this.setShipYard(value)
				this.validate('shipyard')
			}
		}
	},
	updated() {
		if (this.$route.params.id && this.updating) {
			this.updating = false
			this.validate()
		}
	},
	methods: {
		...mapActions(['setShipYard', 'getShipYardByName', 'setShipYardField']),
		newShipYard() {
			const name = null
			this.setShipYard({ name })
			this.showForm = true
		},
		validate(field) {
			field ? this.$v[field]?.$touch() : this.$v.$touch()
			this.$emit(
				'ship-yard-validattion',
				this.$v.$invalid && this.shipYardFormInvalid
			)
		}
	}
}
</script>

<style lang="scss" scoped>
#shipyard-component-content {
	width: 100%;
	.form-container {
		display: flex;
		form {
			width: 100%;
			.form-row {
				align-items: center;
				.form-group {
					&.shypyard-external-container {
						padding: 0;
					}
				}
				#shypyard-internal-container {
					#shipyard-container {
						width: 100%;
					}
					width: 100%;
					display: flex;
					align-items: center;
					.not-found-message {
						display: flex;
						flex-direction: column;
						#new-shypiard {
							background-color: $selected-item-color;
							border-radius: 10px;
							margin: 0 10px;
							cursor: pointer;
							color: #fff;
							&:hover {
								background-color: $selected-item-color-hover;
							}
						}
					}
				}
				.buttons-container {
					position: relative;
					bottom: 11px;
				}
			}
		}
	}
}
</style>
