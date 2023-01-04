<template>
	<div id="other-infos-component-content">
		<div class="form-container">
			<form novalidate="true" @submit.prevent="save">
				<div class="form-row">
					<div
						:class="[inline, { 'invalid-field': $v.otherInfos.tank.$error }]"
						class="item"
					>
						<span class="text">
							Embarcação tanque?
						</span>
						<div class="container-checks" :class="setClass(tank)">
							<div :class="check">
								<input
									id="tank_n"
									v-model="tank"
									:class="input"
									type="radio"
									name="tank"
									value="0"
								/>
								<label for="tank_n" :class="label" class="not">Não</label>
							</div>
							<div :class="check">
								<input
									id="tank_s"
									v-model="tank"
									:class="input"
									type="radio"
									name="tank"
									value="1"
								/>
								<label for="tank_s" :class="label" class="yes">Sim</label>
							</div>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div
						:class="[
							inline,
							{ 'invalid-field': $v.otherInfos.cargoondeck.$error }
						]"
						class="item"
					>
						<span class="text">
							Transporta carga no convés?
						</span>
						<div class="container-checks" :class="setClass(cargoondeck)">
							<div :class="check">
								<input
									id="cargoOnDeck_n"
									v-model="cargoondeck"
									:class="input"
									type="radio"
									name="cargoondeck"
									value="0"
								/>
								<label for="cargoOnDeck_n" :class="label" class="not"
									>Não</label
								>
							</div>
							<div :class="check">
								<input
									id="cargoOnDeck_s"
									v-model="cargoondeck"
									:class="input"
									type="radio"
									name="cargoondeck"
									value="1"
								/>
								<label for="cargoOnDeck_s" :class="label" class="yes"
									>Sim</label
								>
							</div>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div
						:class="[
							inline,
							{ 'invalid-field': $v.otherInfos.dangerouscargo.$error }
						]"
						class="item"
					>
						<span class="text">
							Transporta mercadoria perigosa?
						</span>
						<div class="container-checks" :class="setClass(dangerouscargo)">
							<div :class="check">
								<input
									id="dangerousCargo_n"
									v-model="dangerouscargo"
									:class="input"
									type="radio"
									name="dangerouscargo"
									value="0"
								/>
								<label for="dangerousCargo_n" :class="label" class="not"
									>Não</label
								>
							</div>
							<div :class="check">
								<input
									id="dangerousCargo_s"
									v-model="dangerouscargo"
									:class="input"
									type="radio"
									name="dangerouscargo"
									value="1"
								/>
								<label for="dangerousCargo_s" :class="label" class="yes"
									>Sim</label
								>
							</div>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div
						:class="[inline, { 'invalid-field': $v.otherInfos.convoy.$error }]"
						class="item"
					>
						<span class="text">
							Embarcação opera em comboio?
						</span>
						<div class="container-checks" :class="setClass(convoy)">
							<div :class="check">
								<input
									id="convoy_n"
									v-model="convoy"
									:class="input"
									type="radio"
									name="convoy"
									value="0"
								/>
								<label for="convoy_n" :class="label" class="not">Não</label>
							</div>
							<div :class="check">
								<input
									id="convoy_s"
									v-model="convoy"
									:class="input"
									type="radio"
									name="convoy"
									value="1"
								/>
								<label for="convoy_s" :class="label" class="yes">Sim</label>
							</div>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div
						:class="[
							inline,
							{ 'invalid-field': $v.otherInfos.crossingsoperator.$error }
						]"
						class="item"
					>
						<span class="text">
							Embarcação empregada em navegação de travessia?
						</span>
						<div class="container-checks" :class="setClass(crossingsoperator)">
							<div :class="check">
								<input
									id="crossingsOperator_n"
									v-model="crossingsoperator"
									:class="input"
									type="radio"
									name="crossingsoperator"
									value="0"
								/>
								<label for="crossingsOperator_n" :class="label" class="not"
									>Não</label
								>
							</div>
							<div :class="check">
								<input
									id="crossingsOperator_s"
									v-model="crossingsoperator"
									:class="input"
									type="radio"
									name="crossingsoperator"
									value="1"
								/>
								<label for="crossingsOperator_s" :class="label" class="yes"
									>Sim</label
								>
							</div>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div
						:class="[
							inline,
							{ 'invalid-field': $v.otherInfos.glowless60.$error }
						]"
						class="item"
					>
						<span class="text">
							Transporta produtos com ponto de fulgor inferior a 60°C?
						</span>
						<div class="container-checks" :class="setClass(glowless60)">
							<div :class="check">
								<input
									id="glowless60_n"
									v-model="glowless60"
									:class="input"
									type="radio"
									name="glowless60"
									value="0"
								/>
								<label for="glowless60_n" :class="label" class="not">Não</label>
							</div>
							<div :class="check">
								<input
									id="glowless60_s"
									v-model="glowless60"
									:class="input"
									type="radio"
									name="glowless60"
									value="1"
								/>
								<label for="glowless60_s" :class="label" class="yes">Sim</label>
							</div>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div
						:class="[inline, { 'invalid-field': $v.otherInfos.standby.$error }]"
						class="item"
					>
						<span class="text">
							Embarcação empregada no apoio Marítimo executando serviços de
							prontidão?
						</span>
						<div class="container-checks" :class="setClass(standby)">
							<div :class="check">
								<input
									id="standby_n"
									v-model="standby"
									:class="input"
									type="radio"
									name="standby"
									value="0"
								/>
								<label for="standby_n" :class="label" class="not">Não</label>
							</div>
							<div :class="check">
								<input
									id="standby_s"
									v-model="standby"
									:class="input"
									type="radio"
									name="standby"
									value="1"
								/>
								<label for="standby_s" :class="label" class="yes">Sim</label>
							</div>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div
						:class="[
							inline,
							{ 'invalid-field': $v.otherInfos.toxicchemicalsorgas.$error }
						]"
						class="item"
					>
						<span class="text">
							Transporta produtos quimicos ou gasosos que desprendam vapores ou
							gases tóxicos?
						</span>
						<div
							class="container-checks"
							:class="setClass(toxicchemicalsorgas)"
						>
							<div :class="check">
								<input
									id="toxicchemicalsorgas_n"
									v-model="toxicchemicalsorgas"
									:class="input"
									type="radio"
									name="toxicchemicalsorgas"
									value="0"
								/>
								<label for="toxicchemicalsorgas_n" :class="label" class="not"
									>Não</label
								>
							</div>
							<div :class="check">
								<input
									id="toxicchemicalsorgas_s"
									v-model="toxicchemicalsorgas"
									:class="input"
									type="radio"
									name="toxicchemicalsorgas"
									value="1"
								/>
								<label for="toxicchemicalsorgas_s" :class="label" class="yes"
									>Sim</label
								>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import otherInfosValidatios from '@/mixins/validations/ships/otherInfos.js'
import toValidate from '@/mixins/validations/toValidate.js'

export default {
	name: 'OtherInfos',
	mixins: [otherInfosValidatios, toValidate],
	data() {
		return {
			updating: true,
			inline: 'form-check form-check-inline',
			check: 'form-check',
			input: 'form-check-input',
			label: 'form-check-label'
		}
	},
	computed: {
		...mapState({
			otherInfos: state => state.otherInfos.otherInfos
		}),
		...mapGetters(['infosAreInvalid']),
		cargoondeck: {
			get() {
				return this.otherInfos.cargoondeck
			},
			set(value) {
				this.setInfoField({ value, field: 'cargoondeck' })
				this.validate('cargoondeck')
			}
		},
		tank: {
			get() {
				return this.otherInfos.tank
			},
			set(value) {
				this.setInfoField({ value, field: 'tank' })
				this.validate('tank')
			}
		},
		toxicchemicalsorgas: {
			get() {
				return this.otherInfos.toxicchemicalsorgas
			},
			set(value) {
				this.setInfoField({ value, field: 'toxicchemicalsorgas' })
				this.validate('toxicchemicalsorgas')
			}
		},
		glowless60: {
			get() {
				return this.otherInfos.glowless60
			},
			set(value) {
				this.setInfoField({ value, field: 'glowless60' })
				this.validate('glowless60')
			}
		},
		dangerouscargo: {
			get() {
				return this.otherInfos.dangerouscargo
			},
			set(value) {
				this.setInfoField({ value, field: 'dangerouscargo' })
				this.validate('dangerouscargo')
			}
		},
		standby: {
			get() {
				return this.otherInfos.standby
			},
			set(value) {
				this.setInfoField({ value, field: 'standby' })
				this.validate('standby')
			}
		},
		convoy: {
			get() {
				return this.otherInfos.convoy
			},
			set(value) {
				this.setInfoField({ value, field: 'convoy' })
				this.validate('convoy')
			}
		},
		crossingsoperator: {
			get() {
				return this.otherInfos.crossingsoperator
			},
			set(value) {
				this.setInfoField({ value, field: 'crossingsoperator' })
				this.validate('crossingsoperator')
			}
		},
		ship: {
			get() {
				return this.otherInfos.ship
			},
			set(value) {
				this.setInfoField({ value, field: 'ship' })
				this.validate('ship')
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
		...mapActions(['setInfoField']),
		validate(field) {
			field ? this.$v[field]?.$touch() : this.$v.$touch()
			this.$emit('other-infos-validattion', this.$v.$invalid)
		},
		setClass(value) {
			const _classes = [
				{ _class: 'yes', value: true },
				{ _class: 'not', value: false },
				{ _class: 'undef', value: -1 }
			]
			return _classes.find(c => c.value === value)._class
		}
	}
}
</script>

<style lang="scss" scoped>
#other-infos-component-content {
	background-color: transparent;
	.form-container {
		form {
			.form-row {
				margin-top: 15px;
				height: auto;
				.item {
					width: 100%;
					padding: 7px;
					border: 1px solid $font-color;
					border-right: none;
					border-left: none;
					border-bottom: none;
					color: $font-color;
					font-size: $font-size-mid-big;
					margin: 0;
					.text {
						margin-right: 10px;
						flex-grow: 1;
					}
					.container-checks {
						display: flex;
						column-gap: 10px;
						&.not {
							label {
								&.not {
									background-color: $danger-color;
									font-weight: $font-weight-buttons;
									&:hover {
										background-color: $danger-color-hover;
									}
								}
							}
						}
						&.yes {
							label {
								&.yes {
									background-color: $success-color;
									font-weight: $font-weight-buttons;
									&:hover {
										background-color: $success-color-hover;
									}
								}
							}
						}
					}
					.form-check {
						padding: 0;
						label {
							background-color: #a1abb6;
							border-radius: $border-radius;
							padding: 2px 5px;
							color: $font-color-btn;
							cursor: pointer;
							&:hover {
								background-color: #bfcbd9;
								font-weight: $font-weight-buttons;
							}
						}
						.form-check-input {
							display: none;
						}
					}
				}
			}
		}
	}
}
</style>
