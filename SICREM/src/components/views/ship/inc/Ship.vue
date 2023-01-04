<template>
	<div id="crate-ship-component-content">
		<div class="form-container">
			<form novalidate="true" class="register" @submit.prevent="save">
				<div class="form-row">
					<div
						class="form-group col-md-6"
						:class="{ 'invalid-field': $v.name.$error }"
					>
						<label for="name">Nome</label>
						<input
							id="name"
							v-model="name"
							type="text"
							class="form-control"
							placeholder="Nome da embarcação"
							@blur="$v.name.$touch()"
						/>
						<div v-if="$v.name.$error" class="error-messages">
							<span v-if="!$v.name.required">O campo é obrigatório</span>
							<span v-if="!$v.name.minLength">
								Deve ter no minimo
								{{ $v.name.$params.minLength.min }} caracteres
							</span>
						</div>
					</div>

					<div class="form-group col-md-4">
						<label for="cbesid">CBES ID</label>
						<input
							id="cbesid"
							v-model="cbesid"
							type="text"
							class="form-control"
							placeholder="Gerado pelo sistema"
							readonly
							tabindex="-1"
						/>
					</div>

					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.registrationnumber.$error }"
					>
						<label for="registrationnumber">Nº de inscrição</label>
						<input
							id="registrationnumber"
							v-model="registrationnumber"
							type="text"
							class="form-control"
							placeholder="Incrição nº"
							@blur="$v.registrationnumber.$touch()"
						/>
						<div v-if="$v.registrationnumber.$error" class="error-messages">
							<span v-if="!$v.registrationnumber.required"
								>O campo é obrigatório</span
							>
							<span v-if="!$v.registrationnumber.minLength">
								Deve ter no minimo
								{{ $v.registrationnumber.$params.minLength.min }} caracteres
							</span>
						</div>
					</div>

					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.imonumber.$error }"
					>
						<label for="imonumber">Nº IMO</label>
						<input
							id="imonumber"
							v-model="imonumber"
							type="text"
							class="form-control"
							placeholder="IMO"
							@blur="$v.imonumber.$touch()"
						/>
						<div v-if="$v.imonumber.$error" class="error-messages">
							<span v-if="!$v.imonumber.required">O campo é obrigatório</span>
							<span v-if="!$v.imonumber.minLength">
								Deve ter no minimo
								{{ $v.imonumber.$params.minLength.min }} caracteres
							</span>
						</div>
					</div>

					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.callsign.$error }"
					>
						<label for="callsign">Indicativo de chamada</label>
						<input
							id="callsign"
							v-model="callsign"
							type="text"
							class="form-control"
							placeholder="Callsign"
							@blur="$v.callsign.$touch()"
						/>
						<div v-if="$v.callsign.$error" class="error-messages">
							<span v-if="!$v.callsign.required">O campo é obrigatório</span>
							<span v-if="!$v.callsign.minLength">
								Deve ter no minimo
								{{ $v.callsign.$params.minLength.min }} caracteres
							</span>
						</div>
					</div>

					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.constructionyear.$error }"
					>
						<label for="constYear">Ano de Construção</label>
						<input
							id="constYear"
							v-model="constructionyear"
							type="number"
							class="form-control"
							placeholder="Construída em"
							min="1800"
							max="2021"
							@blur="$v.constructionyear.$touch()"
						/>
						<div v-if="$v.constructionyear.$error" class="error-messages">
							<span v-if="!$v.constructionyear.required"
								>O campo é obrigatório</span
							>
							<span v-if="!$v.constructionyear.maxValue">
								O valor não pode ser maior que o ano corrente
							</span>
						</div>
					</div>

					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.updateyear.$error }"
					>
						<label for="upYear">Ano de Alteração</label>
						<input
							id="upYear"
							v-model="updateyear"
							type="number"
							class="form-control"
							placeholder="Última alteração"
							min="1800"
							max="2021"
						/>
						<div v-if="$v.updateyear.$error" class="error-messages">
							<span v-if="!$v.updateyear.maxValue">
								O valor não pode ser maior que o ano corrente
							</span>
						</div>
					</div>

					<div
						id="material-type-container"
						class="form-group col-md-4 select-container"
						:class="{ 'invalid-field': $v.hullmaterial.$error }"
					>
						<label for="material-type-container">Material do casco</label>
						<v-select
							v-model="hullmaterial"
							placeholder="Selecione o material do casco"
							track-by="name"
							label="name"
							:options="types.hullmaterial"
							@search:blur=";[$v.hullmaterial.$touch()]"
						>
							<template #no-options="{ searching }">
								<template v-if="searching" class="info-messages">
									<div class="not-found-message">
										<span>Material não encontrado</span>
									</div>
								</template>
							</template>
						</v-select>
						<div v-if="$v.hullmaterial.$error" class="error-messages">
							<span v-if="!$v.hullmaterial.required"
								>O campo é obrigatório</span
							>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div id="foreign-ship" class="form-group col-md-4 swith-content">
						<label>Estrangeiro afretado</label>
						<toggle-button
							:sync="true"
							:width="70"
							:height="30"
							:color="`#01253f`"
							:value="charteredforeign"
							:labels="{ checked: 'SIM', unchecked: 'NÃO' }"
							@change="charteredforeign = !charteredforeign"
						/>
					</div>

					<div class="form-group col-md-4 swith-content">
						<label>SOLAS</label>
						<toggle-button
							:sync="true"
							:width="70"
							:height="30"
							:color="`#01253f`"
							:value="solas"
							:labels="{ checked: 'SIM', unchecked: 'NÃO' }"
							@change="solas = !solas"
						/>
					</div>

					<div id="prop-and-power" class="form-group col-md-4 swith-content">
						<label>Propulsão</label>
						<toggle-button
							:sync="true"
							:width="70"
							:height="30"
							:color="`#01253f`"
							:value="haspropulsion"
							:labels="{ checked: 'SIM', unchecked: 'NÃO' }"
							@change="haspropulsion = !haspropulsion"
						/>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import shipValidation from '@/mixins/validations/ships/ship.js'
import toValidate from '@/mixins/validations/toValidate.js'

import { ToggleButton } from 'vue-js-toggle-button'

export default {
	name: 'ShipForm',
	components: {
		ToggleButton
	},
	mixins: [shipValidation, toValidate],
	data() {
		return {
			updating: true
		}
	},
	computed: {
		...mapState({
			ship: state => state.ships.ship,
			gtf: state => state.gtf.gtf,
			types: state => state.types.types
		}),
		id: {
			get() {
				return this.ship.id
			},
			set(value) {
				this.setShipField({ value, field: 'id' })
				this.validate('id')
			}
		},
		cbesid: {
			get() {
				return this.ship.cbesid
			},
			set(value) {
				this.setShipField({ value, field: 'cbesid' })
				this.validate('cbesid')
			}
		},
		callsign: {
			get() {
				return this.ship.callsign
			},
			set(value) {
				this.setShipField({ value, field: 'callsign' })
				this.validate('callsign')
			}
		},
		registrationnumber: {
			get() {
				return this.ship.registrationnumber
			},
			set(value) {
				this.setShipField({ value, field: 'registrationnumber' })
				this.validate('registrationnumber')
			}
		},
		imonumber: {
			get() {
				return this.ship.imonumber
			},
			set(value) {
				this.setShipField({ value, field: 'imonumber' })
				this.validate('imonumber')
			}
		},
		name: {
			get() {
				return this.ship.name
			},
			set(value) {
				this.setShipField({ value, field: 'name' })
				this.validate('name')
			}
		},
		constructionyear: {
			get() {
				return this.ship.constructionyear
			},
			set(value) {
				this.setShipField({ value, field: 'constructionyear' })
				this.validate('constructionyear')
			}
		},
		updateyear: {
			get() {
				return this.ship.updateyear
			},
			set(value) {
				this.setShipField({ value, field: 'updateyear' })
				this.validate('updateyear')
			}
		},
		solas: {
			get() {
				return this.ship.solas
			},
			set(value) {
				this.setShipField({ value, field: 'solas' })
				this.validate('solas')
			}
		},
		charteredforeign: {
			get() {
				return this.ship.charteredforeign
			},
			set(value) {
				this.setShipField({ value, field: 'charteredforeign' })
				this.validate('charteredforeign')
			}
		},
		haspropulsion: {
			get() {
				return this.ship.haspropulsion
			},
			set(value) {
				this.setShipField({ value, field: 'haspropulsion' })
				this.$emit('ship-haspropulsion', value)
				this.validate('haspropulsion')
			}
		},
		hullmaterial: {
			get() {
				return this.gtf.hullmaterial
			},
			set(value) {
				this.setGtfField({ value, field: 'hullmaterial' })
				this.validate('hullmaterial')
			}
		}
	},
	mounted() {
		this.$emit('ship-haspropulsion', this.haspropulsion)
	},
	updated() {
		if (this.$route.params.id && this.updating) {
			this.updating = false
			this.validate()
		}
	},
	methods: {
		...mapActions([
			'setShipField',
			'setGtfField',
			'resetShipFields',
			'getShipById'
		]),
		validate(field) {
			field ? this.$v[field]?.$touch() : this.$v.$touch()
			this.$emit('ship-validattion', this.$v.$invalid)
		}
	}
}
</script>

<style lang="scss">
#crate-ship-component-content {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	.form-container {
		.form-row {
			&.radios-checks-content {
				padding-top: 10px;
			}
			.form-group {
				&#ship-owner {
					margin: 0px;
				}
				&#foreign-ship {
					label {
						white-space: nowrap;
					}
				}
				&#prop-and-power {
					background-color: transparent;
				}
				&.swith-content {
					justify-content: center;
				}
			}
		}
	}
}
</style>

<style lang="scss" scoped>
@media (max-width: 1024px) {
	#crate-ship-component-content {
		.form-container {
			.form-row {
				&:nth-child(1) {
					.form-group {
						max-width: 50%;
						flex-basis: 50%;
					}
				}
				.form-group {
					&.swith-content {
						min-width: 100%;
						justify-content: flex-start;
						> label {
							&:first-child {
								width: 170px;
							}
						}
					}
				}
			}
		}
	}
}
</style>
