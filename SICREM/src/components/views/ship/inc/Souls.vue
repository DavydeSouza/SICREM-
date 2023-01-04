<template>
	<div :id="`souls-component-content`">
		<div class="form-container">
			<form novalidate="true" @submit.prevent="save">
				<div
					class="form-group col-md-12 input-container"
					:class="{ 'invalid-field': $v.qtdpaxcabin8bunks.$error }"
				>
					<label for="qtdpaxcabin8bunks" class="no-break-label"
						>Número de passageiros em camarotes com até 8 beliches</label
					>
					<div class="qtdpaxcabin8bunks">
						<input
							id="qtdpaxcabin8bunks"
							v-model="qtdpaxcabin8bunks"
							type="number"
							class="form-control"
							min="0"
							@blur="$v.qtdpaxcabin8bunks.$touch()"
						/>
						<div v-if="$v.qtdpaxcabin8bunks.$error" class="error-messages">
							<span v-if="!$v.qtdpaxcabin8bunks.required"
								>O campo é obrigatório</span
							>
						</div>
					</div>
				</div>

				<div
					class="form-group col-md-12 input-container"
					:class="{ 'invalid-field': $v.qtdotherpax.$error }"
				>
					<label for="av">Número dos demais passageiros</label>
					<div class="qtdotherpax">
						<input
							id="ar"
							v-model="qtdotherpax"
							type="number"
							class="form-control"
							min="0"
							@blur="$v.qtdotherpax.$touch()"
						/>
						<div v-if="$v.qtdotherpax.$error" class="error-messages">
							<span v-if="!$v.qtdotherpax.required">O campo é obrigatório</span>
						</div>
					</div>
				</div>

				<div
					class="form-group col-md-12 input-container"
					:class="{ 'invalid-field': $v.crew.$error }"
				>
					<label for="av">Número de tripulantes</label>
					<div class="crew">
						<input
							id="ar"
							v-model="crew"
							type="number"
							class="form-control"
							min="0"
							@blur="$v.crew.$touch()"
						/>
						<div v-if="$v.crew.$error" class="error-messages">
							<span v-if="!$v.crew.required">O campo é obrigatório</span>
						</div>
					</div>
				</div>

				<div
					class="form-group col-md-12 input-container"
					:class="{ 'invalid-field': $v.qtdnotcrewprofissionals.$error }"
				>
					<label for="av" class="no-break-label"
						>Número de profissionais não tripulantes empregados em atividades a
						bordo (outros)</label
					>
					<div class="qtdnotcrewprofissionals">
						<input
							id="qtdnotcrewprofissionals"
							v-model="qtdnotcrewprofissionals"
							type="number"
							class="form-control"
							min="0"
							@blur="$v.qtdnotcrewprofissionals.$touch()"
						/>
						<div
							v-if="$v.qtdnotcrewprofissionals.$error"
							class="error-messages"
						>
							<span v-if="!$v.qtdnotcrewprofissionals.required"
								>O campo é obrigatório</span
							>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import soulsValidation from '@/mixins/validations/ships/souls.js'
import toValidate from '@/mixins/validations/toValidate.js'
import { mapState, mapActions } from 'vuex'

export default {
	name: 'Souls',
	components: {},
	mixins: [soulsValidation, toValidate],
	data() {
		return {
			updating: true,
			type: 'draft'
		}
	},
	computed: {
		...mapState({
			// $v: state => state.souls.validations,
			souls: state => state.souls.souls
		}),
		qtdpaxcabin8bunks: {
			get() {
				return this.souls.qtdpaxcabin8bunks
			},
			set(value) {
				this.setSoulsField({ value, field: 'qtdpaxcabin8bunks' })
				this.validate('qtdpaxcabin8bunks')
			}
		},
		qtdotherpax: {
			get() {
				return this.souls.qtdotherpax
			},
			set(value) {
				this.setSoulsField({ value, field: 'qtdotherpax' })
				this.validate('qtdotherpax')
			}
		},
		crew: {
			get() {
				return this.souls.crew
			},
			set(value) {
				this.setSoulsField({ value, field: 'crew' })
				this.validate('crew')
			}
		},
		qtdnotcrewprofissionals: {
			get() {
				return this.souls.qtdnotcrewprofissionals
			},
			set(value) {
				this.setSoulsField({ value, field: 'qtdnotcrewprofissionals' })
				this.validate('qtdnotcrewprofissionals')
			}
		}
	},
	mounted() {
		this.$emit('souls-validattion', this.$v.$invalid)
	},
	updated() {
		if (this.$route.params.id && this.updating) {
			this.updating = false
			this.validate()
		}
	},
	methods: {
		...mapActions(['setSoulsField']),
		validate(field) {
			field ? this.$v[field]?.$touch() : this.$v.$touch()
			this.$emit('souls-validattion', this.$v.$invalid)
		}
	}
}
</script>

<style lang="scss" scoped>
#souls-component-content {
	.form-container {
		form {
			.form-group {
				background-color: transparent;
				padding: 0;
				&.input-container {
					input {
						max-width: 100px;
					}
				}
			}
		}
	}
}
</style>
