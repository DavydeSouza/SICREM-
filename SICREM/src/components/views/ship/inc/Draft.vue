<template>
	<div :id="`${draft}-component-content`" class="draft-component-content">
		<div class="form-container">
			<form novalidate="true" @submit.prevent="save">
				<label for="av">{{ label() }}</label>
				<div id="light-draft-container" class="form-row">
					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.av.$error }"
					>
						<div class="av draft-item-container">
							<input
								id="av"
								v-model="av"
								type="number"
								class="form-control"
								placeholder="AV"
								min="1"
								@blur="$v.av.$touch()"
							/>
							<div v-if="$v.av.$error" class="error-messages">
								<span v-if="!$v.av.required">O campo é obrigatório</span>
							</div>
						</div>
					</div>

					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.ar.$error }"
					>
						<div class="ar draft-item-container">
							<input
								id="ar"
								v-model="ar"
								type="number"
								class="form-control"
								placeholder="AR"
								min="1"
								@blur="$v.ar.$touch()"
							/>
							<div v-if="$v.ar.$error" class="error-messages">
								<span v-if="!$v.ar.required">O campo é obrigatório</span>
							</div>
						</div>
					</div>

					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.average.$error }"
					>
						<div class="average draft-item-container">
							<input
								id="average"
								v-model="average"
								type="number"
								class="form-control"
								placeholder="Média"
								min="1"
								@blur="$v.average.$touch()"
							/>
							<div v-if="$v.average.$error" class="error-messages">
								<span v-if="!$v.average.required">O campo é obrigatório</span>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import draftValidation from '@/mixins/validations/ships/draft.js'
import toValidate from '@/mixins/validations/toValidate.js'
import { mapState, mapActions } from 'vuex'

export default {
	name: 'Draft',
	components: {},
	mixins: [draftValidation, toValidate],
	props: {
		draft: {
			type: String,
			required: true,
			validator: function(value) {
				return ['lightdraft', 'heavydraft'].indexOf(value) !== -1
			}
		}
	},
	data() {
		return {
			updating: true
		}
	},
	computed: {
		...mapState({
			lightdraft: state => state.mtf.mtf.lightdraft,
			heavydraft: state => state.mtf.mtf.heavydraft
		}),
		av: {
			get() {
				return this[this.draft].av
			},
			set(value) {
				this.setMtfDraftField({ value, field: 'av', draft: this.draft })
				this.validate('av')
			}
		},
		ar: {
			get() {
				return this[this.draft].ar
			},
			set(value) {
				this.setMtfDraftField({ value, field: 'ar', draft: this.draft })
				this.validate('ar')
			}
		},
		average: {
			get() {
				return this[this.draft].average
			},
			set(value) {
				this.setMtfDraftField({ value, field: 'average', draft: this.draft })
				this.validate('average')
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
		...mapActions(['setMtfDraftField']),
		validate(field) {
			field ? this.$v[field]?.$touch() : this.$v.$touch()
			this.$emit(`${this.draft}-validattion`, this.$v.$invalid)
		},
		label() {
			return this.draft === 'lightdraft' ? 'Calado Leve' : 'Calado Carregado'
		}
	}
}
</script>

<style lang="scss" scoped>
.draft-component-content {
	.form-container {
		form {
			.form-row {
				.form-group {
					.draft-item-container {
						background-color: transparent;
						input {
							height: $input-height-default;
						}
					}
				}
			}
		}
	}
}
</style>
