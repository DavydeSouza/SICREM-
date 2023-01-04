<template>
	<div id="certification-component-content">
		<div class="form-container">
			<form novalidate="true" @submit.prevent="save">
				<div class="form-row">
					<div id="certification-internal-container">
						<div
							id="certification-container"
							class="form-group select-container"
							:class="{ 'invalid-field': $v.certification_.$error }"
						>
							<label for="ship-type-container">Certificado</label>
							<v-select
								v-model="certification_"
								placeholder="Escolha o tipo de certificação"
								track-by="name"
								label="name"
								:options="systems"
								:searchable="false"
								:close-on-select="true"
								:show-labels="false"
								:allow-empty="false"
								:multiple="false"
								@input="$emit('select-certification', $event)"
								@option:selected=";[]"
							/>
							<div v-if="$v.certification_.$error" class="error-messages">
								<span v-if="!$v.certification_.required"
									>O campo é obrigatório</span
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
import { required } from 'vuelidate/lib/validators'

export default {
	name: 'Certification',
	mixins: [],
	data() {
		return {}
	},
	computed: {
		...mapState({
			certification: state => state.certification.certification
		}),
		...mapGetters(['systems']),
		certification_: {
			get() {
				return this.certification
			},
			set(value) {
				this.setCertification(value)
			}
		}
	},
	methods: {
		...mapActions(['setCertification'])
	},
	validations() {
		return {
			certification_: { required }
		}
	}
}
</script>

<style lang="scss" scoped>
#certification-component-content {
	width: 100%;
	.form-container {
		display: flex;
		form {
			width: 100%;
			.form-row {
				#certification-internal-container {
					#certification-container {
						width: 100%;
					}
					width: 100%;
					display: flex;
					align-items: center;
				}
			}
		}
	}
}
</style>
