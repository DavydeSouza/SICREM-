<template>
	<div id="other-infos-component-content">
		<div class="form-container">
			<form novalidate="true" @submit.prevent="save">
				<div class="form-row">
					<div
						:class="[
							inline,
							{
								'invalid-field':
									$v.generalSystemItems.appropriateClothing.$error
							}
						]"
						class="item"
					>
						<span class="text">
							Roupas apropriadas
						</span>
						<div
							class="container-checks"
							:class="setClass(appropriateClothing)"
						>
							<div :class="check">
								<input
									id="appropriateClothing_n"
									v-model="appropriateClothing"
									:class="input"
									type="radio"
									name="appropriateClothing"
									value="0"
								/>
								<label for="appropriateClothing_n" :class="label" class="not"
									>Não</label
								>
							</div>
							<div :class="check">
								<input
									id="appropriateClothing_s"
									v-model="appropriateClothing"
									:class="input"
									type="radio"
									name="appropriateClothing"
									value="1"
								/>
								<label for="appropriateClothing_s" :class="label" class="yes"
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
							{ 'invalid-field': $v.generalSystemItems.regulatingValves.$error }
						]"
						class="item"
					>
						<span class="text">
							Válvulas reguladoras
						</span>
						<div class="container-checks" :class="setClass(regulatingValves)">
							<div :class="check">
								<input
									id="regulatingValves_n"
									v-model="regulatingValves"
									:class="input"
									type="radio"
									name="regulatingValves"
									value="0"
								/>
								<label for="regulatingValves_n" :class="label" class="not"
									>Não</label
								>
							</div>
							<div :class="check">
								<input
									id="regulatingValves_s"
									v-model="regulatingValves"
									:class="input"
									type="radio"
									name="regulatingValves"
									value="1"
								/>
								<label for="regulatingValves_s" :class="label" class="yes"
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
							{ 'invalid-field': $v.generalSystemItems.beltsWithBallast.$error }
						]"
						class="item"
					>
						<span class="text">
							Cintos com lastro
						</span>
						<div class="container-checks" :class="setClass(beltsWithBallast)">
							<div :class="check">
								<input
									id="beltsWithBallast_n"
									v-model="beltsWithBallast"
									:class="input"
									type="radio"
									name="beltsWithBallast"
									value="0"
								/>
								<label for="beltsWithBallast_n" :class="label" class="not"
									>Não</label
								>
							</div>
							<div :class="check">
								<input
									id="beltsWithBallast_s"
									v-model="beltsWithBallast"
									:class="input"
									type="radio"
									name="beltsWithBallast"
									value="1"
								/>
								<label for="beltsWithBallast_s" :class="label" class="yes"
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
							{ 'invalid-field': $v.generalSystemItems.floors.$error }
						]"
						class="item"
					>
						<span class="text">
							Nadadeiras
						</span>
						<div class="container-checks" :class="setClass(floors)">
							<div :class="check">
								<input
									id="floors_n"
									v-model="floors"
									:class="input"
									type="radio"
									name="floors"
									value="0"
								/>
								<label for="floors_n" :class="label" class="not">Não</label>
							</div>
							<div :class="check">
								<input
									id="floors_s"
									v-model="floors"
									:class="input"
									type="radio"
									name="floors"
									value="1"
								/>
								<label for="floors_s" :class="label" class="yes">Sim</label>
							</div>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div
						:class="[
							inline,
							{ 'invalid-field': $v.generalSystemItems.knives.$error }
						]"
						class="item"
					>
						<span class="text">
							Facas
						</span>
						<div class="container-checks" :class="setClass(knives)">
							<div :class="check">
								<input
									id="knives_n"
									v-model="knives"
									:class="input"
									type="radio"
									name="knives"
									value="0"
								/>
								<label for="knives_n" :class="label" class="not">Não</label>
							</div>
							<div :class="check">
								<input
									id="knives_s"
									v-model="knives"
									:class="input"
									type="radio"
									name="knives"
									value="1"
								/>
								<label for="knives_s" :class="label" class="yes">Sim</label>
							</div>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div
						:class="[
							inline,
							{ 'invalid-field': $v.generalSystemItems.suspensories.$error }
						]"
						class="item"
					>
						<span class="text">
							Suspensórios
						</span>
						<div class="container-checks" :class="setClass(suspensories)">
							<div :class="check">
								<input
									id="suspensories_n"
									v-model="suspensories"
									:class="input"
									type="radio"
									name="suspensories"
									value="0"
								/>
								<label for="suspensories_n" :class="label" class="not"
									>Não</label
								>
							</div>
							<div :class="check">
								<input
									id="suspensories_s"
									v-model="suspensories"
									:class="input"
									type="radio"
									name="suspensories"
									value="1"
								/>
								<label for="suspensories_s" :class="label" class="yes"
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
							{ 'invalid-field': $v.generalSystemItems.inflatableVests.$error }
						]"
						class="item"
					>
						<span class="text">
							Coletes infláveis
						</span>
						<div class="container-checks" :class="setClass(inflatableVests)">
							<div :class="check">
								<input
									id="inflatableVests_n"
									v-model="inflatableVests"
									:class="input"
									type="radio"
									name="inflatableVests"
									value="0"
								/>
								<label for="inflatableVests_n" :class="label" class="not"
									>Não</label
								>
							</div>
							<div :class="check">
								<input
									id="inflatableVests_s"
									v-model="inflatableVests"
									:class="input"
									type="radio"
									name="inflatableVests"
									value="1"
								/>
								<label for="inflatableVests_s" :class="label" class="yes"
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
							{ 'invalid-field': $v.generalSystemItems.lanterns.$error }
						]"
						class="item"
					>
						<span class="text">
							Lanternas
						</span>
						<div class="container-checks" :class="setClass(lanterns)">
							<div :class="check">
								<input
									id="lanterns_n"
									v-model="lanterns"
									:class="input"
									type="radio"
									name="lanterns"
									value="0"
								/>
								<label for="lanterns_n" :class="label" class="not">Não</label>
							</div>
							<div :class="check">
								<input
									id="lanterns_s"
									v-model="lanterns"
									:class="input"
									type="radio"
									name="lanterns"
									value="1"
								/>
								<label for="lanterns_s" :class="label" class="yes">Sim</label>
							</div>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div
						:class="[
							inline,
							{ 'invalid-field': $v.generalSystemItems.depths.$error }
						]"
						class="item"
					>
						<span class="text">
							Profundímetros
						</span>
						<div class="container-checks" :class="setClass(depths)">
							<div :class="check">
								<input
									id="depths_n"
									v-model="depths"
									:class="input"
									type="radio"
									name="depths"
									value="0"
								/>
								<label for="depths_n" :class="label" class="not">Não</label>
							</div>
							<div :class="check">
								<input
									id="depths_s"
									v-model="depths"
									:class="input"
									type="radio"
									name="depths"
									value="1"
								/>
								<label for="depths_s" :class="label" class="yes">Sim</label>
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
import generalSystemItemsValidatios from '@/mixins/validations/scuba/generalSystemItems.js'

export default {
	name: 'GeneralSystemItems',
	mixins: [generalSystemItemsValidatios],
	data() {
		return {
			inline: 'form-check form-check-inline',
			check: 'form-check',
			input: 'form-check-input',
			label: 'form-check-label'
		}
	},
	computed: {
		...mapState({
			generalSystemItems: state => state.generalSystemItems.generalSystemItems
		}),
		...mapGetters(['ItemsAreInvalid']),
		regulatingValves: {
			get() {
				return this.generalSystemItems.regulatingValves
			},
			set(value) {
				this.setInfoField({ value, field: 'regulatingValves' })
			}
		},
		appropriateClothing: {
			get() {
				return this.generalSystemItems.appropriateClothing
			},
			set(value) {
				this.setInfoField({ value, field: 'appropriateClothing' })
			}
		},
		lanterns: {
			get() {
				return this.generalSystemItems.lanterns
			},
			set(value) {
				this.setInfoField({ value, field: 'lanterns' })
			}
		},
		suspensories: {
			get() {
				return this.generalSystemItems.suspensories
			},
			set(value) {
				this.setInfoField({ value, field: 'suspensories' })
			}
		},
		beltsWithBallast: {
			get() {
				return this.generalSystemItems.beltsWithBallast
			},
			set(value) {
				this.setInfoField({ value, field: 'beltsWithBallast' })
			}
		},
		inflatableVests: {
			get() {
				return this.generalSystemItems.inflatableVests
			},
			set(value) {
				this.setInfoField({ value, field: 'inflatableVests' })
			}
		},
		floors: {
			get() {
				return this.generalSystemItems.floors
			},
			set(value) {
				this.setInfoField({ value, field: 'floors' })
			}
		},
		knives: {
			get() {
				return this.generalSystemItems.knives
			},
			set(value) {
				this.setInfoField({ value, field: 'knives' })
			}
		},
		depths: {
			get() {
				return this.generalSystemItems.depths
			},
			set(value) {
				this.setInfoField({ value, field: 'depths' })
			}
		}
	},
	methods: {
		...mapActions(['setInfoField']),
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
