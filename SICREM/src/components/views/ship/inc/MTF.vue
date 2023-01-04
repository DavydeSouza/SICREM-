<template>
	<div id="mtf-component-content">
		<div class="form-container">
			<form novalidate="true" @submit.prevent="save">
				<div class="form-row">
					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.totallength.$error }"
					>
						<label for="totallength">Comprimento total</label>
						<input
							id="totallength"
							v-model="totallength"
							type="number"
							class="form-control"
							placeholder="Em metros"
							min="1"
							@blur=";[$v.totallength.$touch(), toDecimal('totallength')]"
						/>
						<div v-if="$v.totallength.$error" class="error-messages">
							<span v-if="!$v.totallength.required">O campo é obrigatório</span>
						</div>
					</div>

					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.hulllength.$error }"
					>
						<label for="hulllength">Comprimento do casco</label>
						<input
							id="hulllength"
							v-model="hulllength"
							type="number"
							class="form-control"
							placeholder="Em metros"
							min="1"
							@blur=";[$v.hulllength.$touch(), toDecimal('hulllength')]"
						/>
						<div v-if="$v.hulllength.$error" class="error-messages">
							<span v-if="!$v.hulllength.required">O campo é obrigatório</span>
						</div>
					</div>

					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.rulelength.$error }"
					>
						<label for="rulelength">Comprimento de Regra (L)</label>
						<input
							id="rulelength"
							v-model="rulelength"
							type="number"
							class="form-control"
							placeholder="Em metros"
							min="1"
							@blur=";[$v.rulelength.$touch(), toDecimal('rulelength')]"
						/>
						<div v-if="$v.rulelength.$error" class="error-messages">
							<span v-if="!$v.rulelength.required">O campo é obrigatório</span>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.lpp.$error }"
					>
						<label for="lpp">Comprimento entre Perp. (Lpp)</label>
						<input
							id="lpp"
							v-model="lpp"
							type="number"
							class="form-control"
							placeholder="Em metros"
							min="1"
							@blur=";[$v.lpp.$touch(), toDecimal('lpp')]"
						/>
						<div v-if="$v.lpp.$error" class="error-messages">
							<span v-if="!$v.lpp.required">O campo é obrigatório</span>
						</div>
					</div>

					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.moldedend.$error }"
					>
						<label for="moldedend">Pontal Moldado (P)</label>
						<input
							id="moldedend"
							v-model="moldedend"
							type="number"
							class="form-control"
							placeholder="Em metros"
							min="1"
							@blur=";[$v.moldedend.$touch(), toDecimal('moldedend')]"
						/>
						<div v-if="$v.moldedend.$error" class="error-messages">
							<span v-if="!$v.moldedend.required">O campo é obrigatório</span>
						</div>
					</div>

					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.moldedmouth.$error }"
					>
						<label for="moldedmouth">Boca Moldada (B)</label>
						<input
							id="moldedmouth"
							v-model="moldedmouth"
							type="number"
							class="form-control"
							placeholder="Em metros"
							min="1"
							@blur=";[$v.moldedmouth.$touch(), toDecimal('moldedmouth')]"
						/>
						<div v-if="$v.moldedmouth.$error" class="error-messages">
							<span v-if="!$v.moldedmouth.required">O campo é obrigatório</span>
						</div>
					</div>
				</div>

				<div v-if="showCoAndCa" class="form-row">
					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.countour.$error }"
					>
						<label for="countour">Contorno (Co)</label>
						<input
							id="countour"
							v-model="countour"
							type="number"
							class="form-control"
							placeholder="Em metros"
							min="1"
							@blur=";[$v.countour.$touch(), toDecimal('countour')]"
						/>
						<div v-if="$v.countour.$error" class="error-messages">
							<span v-if="!$v.countour.required">O campo é obrigatório</span>
						</div>
					</div>

					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.tonnagelength.$error }"
					>
						<label for="tonnagelength">Comprimento de arqueação (Ca)</label>
						<input
							id="tonnagelength"
							v-model="tonnagelength"
							type="number"
							class="form-control"
							placeholder="Em metros"
							min="1"
							@blur=";[$v.tonnagelength.$touch(), toDecimal('tonnagelength')]"
						/>
						<div v-if="$v.tonnagelength.$error" class="error-messages">
							<span v-if="!$v.tonnagelength.required"
								>O campo é obrigatório</span
							>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.grosstonnage.$error }"
					>
						<label for="grosstonnage">Arqueação Bruta</label>
						<input
							id="grosstonnage"
							v-model="grosstonnage"
							type="number"
							class="form-control"
							placeholder="Em metros"
							min="1"
							@blur="$v.grosstonnage.$touch()"
						/>
						<div v-if="$v.grosstonnage.$error" class="error-messages">
							<span v-if="!$v.grosstonnage.required"
								>O campo é obrigatório</span
							>
							<span v-if="!$v.grosstonnage.numeric"
								>Somente valores inteiros</span
							>
						</div>
					</div>

					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.nettonnage.$error }"
					>
						<label for="nettonnage">Arqueação Liquida</label>
						<input
							id="nettonnage"
							v-model="nettonnage"
							type="number"
							class="form-control"
							placeholder="Em metros"
							min="1"
							@blur="$v.nettonnage.$touch()"
						/>
						<div v-if="$v.nettonnage.$error" class="error-messages">
							<span v-if="!$v.nettonnage.required">O campo é obrigatório</span>
							<span v-if="!$v.nettonnage.numeric"
								>Somente valores inteiros</span
							>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.heavydisplacement.$error }"
					>
						<label for="heavydisplacement">Deslocamento carregado</label>
						<input
							id="heavydisplacement"
							v-model="heavydisplacement"
							type="number"
							class="form-control"
							placeholder="Em toneladas"
							min="1"
							@blur="
								;[$v.heavydisplacement.$touch(), toDecimal('heavydisplacement')]
							"
						/>
						<div v-if="$v.heavydisplacement.$error" class="error-messages">
							<span v-if="!$v.heavydisplacement.required"
								>O campo é obrigatório</span
							>
						</div>
					</div>

					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.ligthdisplacement.$error }"
					>
						<label for="ligthdisplacement">Deslocamento leve</label>
						<input
							id="ligthdisplacement"
							v-model="ligthdisplacement"
							type="number"
							class="form-control"
							placeholder="Em toneladas"
							min="1"
							@blur="
								;[$v.ligthdisplacement.$touch(), toDecimal('ligthdisplacement')]
							"
						/>
						<div v-if="$v.ligthdisplacement.$error" class="error-messages">
							<span v-if="!$v.ligthdisplacement.required"
								>O campo é obrigatório</span
							>
						</div>
					</div>

					<div
						class="form-group col-md-4"
						:class="{ 'invalid-field': $v.deadweight.$error }"
					>
						<label for="deadweight">Porte Bruto</label>
						<input
							id="deadweight"
							v-model="deadweight"
							type="number"
							class="form-control"
							placeholder="Em toneladas"
							min="1"
							@blur=";[$v.deadweight.$touch(), toDecimal('deadweight')]"
						/>
						<div v-if="$v.deadweight.$error" class="error-messages">
							<span v-if="!$v.deadweight.required">O campo é obrigatório</span>
						</div>
					</div>
				</div>

				<draft :validating="validating" draft="lightdraft" />
				<draft :validating="validating" draft="heavydraft" />
			</form>
		</div>
	</div>
</template>

<script>
import mtfValidation from '@/mixins/validations/ships/mtf.js'
import toValidate from '@/mixins/validations/toValidate.js'
import { mapState, mapActions } from 'vuex'
import Draft from './Draft'

export default {
	name: 'MTF',
	components: { Draft },
	mixins: [mtfValidation, toValidate],
	data() {
		return {
			updating: true
		}
	},
	computed: {
		...mapState({
			mtf: state => state.mtf.mtf
		}),
		id: {
			get() {
				return this.mtf.id
			},
			set(value) {
				this.setMtfField({ value, field: 'id' })
				this.validate('id')
			}
		},
		totallength: {
			get() {
				return this.mtf.totallength
			},
			set(value) {
				this.setMtfField({ value, field: 'totallength' })
				this.validate('totallength')
			}
		},
		hulllength: {
			get() {
				return this.mtf.hulllength
			},
			set(value) {
				this.setMtfField({ value, field: 'hulllength' })
				this.validate('hulllength')
			}
		},
		rulelength: {
			get() {
				return this.mtf.rulelength
			},
			set(value) {
				this.setMtfField({ value, field: 'rulelength' })
				this.validate('rulelength')
			}
		},
		lpp: {
			get() {
				return this.mtf.lpp
			},
			set(value) {
				this.setMtfField({ value, field: 'lpp' })
				this.validate('lpp')
			}
		},
		ligthdisplacement: {
			get() {
				return this.mtf.ligthdisplacement
			},
			set(value) {
				this.setMtfField({ value, field: 'ligthdisplacement' })
				this.validate('ligthdisplacement')
			}
		},
		heavydisplacement: {
			get() {
				return this.mtf.heavydisplacement
			},
			set(value) {
				this.setMtfField({ value, field: 'heavydisplacement' })
				this.validate('heavydisplacement')
			}
		},
		grosstonnage: {
			get() {
				return this.mtf.grosstonnage
			},
			set(value) {
				this.setMtfField({ value, field: 'grosstonnage' })
				this.validate('grosstonnage')
			}
		},
		nettonnage: {
			get() {
				return this.mtf.nettonnage
			},
			set(value) {
				this.setMtfField({ value, field: 'nettonnage' })
				this.validate('nettonnage')
			}
		},
		moldedend: {
			get() {
				return this.mtf.moldedend
			},
			set(value) {
				this.setMtfField({ value, field: 'moldedend' })
				this.validate('moldedend')
			}
		},
		moldedmouth: {
			get() {
				return this.mtf.moldedmouth
			},
			set(value) {
				this.setMtfField({ value, field: 'moldedmouth' })
				this.validate('moldedmouth')
			}
		},
		countour: {
			get() {
				return this.mtf.countour
			},
			set(value) {
				this.setMtfField({ value, field: 'countour' })
				this.validate('countour')
			}
		},
		tonnagelength: {
			get() {
				return this.mtf.tonnagelength
			},
			set(value) {
				this.setMtfField({ value, field: 'tonnagelength' })
				this.validate('tonnagelength')
			}
		},
		deadweight: {
			get() {
				return this.mtf.deadweight
			},
			set(value) {
				this.setMtfField({ value, field: 'deadweight' })
				this.validate('deadweight')
			}
		},
		showCoAndCa() {
			return this.rulelength ? this.rulelength > 24 : false
		}
	},
	updated() {
		if (this.$route.params.id && this.updating) {
			this.updating = false
			this.validate()
		}
	},
	methods: {
		...mapActions(['setMtfField']),
		validate(field) {
			field ? this.$v[field]?.$touch() : this.$v.$touch()
			this.$emit('mtf-validattion', this.$v.$invalid)
		},
		toDecimal(prop) {
			const value = this[prop]
			if (value) {
				const formated = parseFloat(value).toFixed(3)
				this[prop] = formated
				return formated
			}
			return value
		}
	}
}
</script>

<style lang="scss" scoped>
#mtf-component-content {
	background-color: transparent;
}
</style>

<style lang="scss" scoped>
@import '../../../../assets/scss/mixins/_max-width-1024.scss';
@media (max-width: 1024px) {
	#mtf-component-content {
		@include max-width-1024;
	}
}
</style>
