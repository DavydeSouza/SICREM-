<template>
	<div id="company-component-content">
		<div class="form-container">
			<form novalidate="true" @submit.prevent="save">
				<div class="form-row">
					<div id="company-internal-container">
						<div
							id="company-container"
							class="form-group select-container"
							:class="{ 'invalid-field': $v.company.$error }"
						>
							<label for="ship-type-container">Empresa de mergulho</label>
							<v-select
								v-model="company"
								placeholder="Digite o nome do empresa de mergulho"
								track-by="name"
								label="name"
								:clearable="false"
								:options="companys"
								:searchable="true"
								:close-on-select="true"
								:show-labels="false"
								:allow-empty="false"
								@search="getCompanysByName($event)"
								@input="$emit('select-company', $event)"
								@option:selected=";[$v.company.$touch(), isValid()]"
							>
								<span slot="noResult"
									>Digite no mínimo 3 caracteres para buscar</span
								>
								<span slot="noOptions"
									>Digite no mínimo 3 caracteres para buscar</span
								>
							</v-select>
							<div v-if="$v.company.$error" class="error-messages">
								<span v-if="!$v.company.required">O campo é obrigatório</span>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import validation from '@/mixins/validations/scuba/company.js'

export default {
	name: 'Company',
	mixins: [validation],
	props: {
		company_: {
			type: Object,
			default: null
		}
	},
	data() {
		return {
			company: this.company_
		}
	},
	computed: {
		...mapState({
			companys: state => state.company.companys
		})
	},
	methods: {
		...mapActions(['getCompanysByName', 'setCompany']),
		isValid() {
			this.$emit('company-validation', this.$v.$invalid)
		}
	}
}
</script>

<style lang="scss" scoped>
#company-component-content {
	width: 100%;
	.form-container {
		display: flex;
		form {
			width: 100%;
			.form-row {
				#company-internal-container {
					#company-container {
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
