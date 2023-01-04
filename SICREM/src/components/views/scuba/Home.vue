<template>
	<div id="scuba-home-component-content" class="component-root">
		<div class="content">
			<div class="row">
				<box-filters>
					<template #fields>
						<div class="search-section">
							<input
								v-model="filters.name"
								type="text"
								placeholder="Filtro por CBES-ID"
							/>
							<label class="label-search" for="search">
								<i class="fas fa-search" />
							</label>
						</div>
						<div class="actions">
							<button class="btn-custom primary" @click="search">
								BUSCAR
							</button>
						</div>
					</template>
				</box-filters>
			</div>

			<div class="row">
				<generic-table
					:headers="headers"
					:load-data="() => {}"
					:query="$route.query || {}"
					:total-itens="10"
					:visible="!!certifications.length"
					:pagination="false"
				>
					<template #rows>
						<tr v-for="(certification_, index) in certifications" :key="index">
							<td
								v-for="(prop, indexProp) in filteredCells(certification_)"
								:key="indexProp"
							>
								<span v-if="prop === 'cbesid'">
									<label>{{ headers[indexProp] }}:</label>
									{{ certification_[prop] }}
								</span>
								<span v-else-if="prop === 'expiration'">
									<label>{{ headers[indexProp] }}:</label>
									{{ formatDate(certification_[prop]) }}
								</span>
								<span v-else-if="prop === 'depth'">
									<label>{{ headers[indexProp] }}:</label>
									{{ certification_[prop] }}
								</span>
								<span v-else-if="prop === 'name'">
									<label>{{ headers[indexProp] }}:</label>
									{{ certification_[prop] }}
								</span>
							</td>
							<td class="actions">
								<div class="actions-container">
									<item-edit
										:router-name="'scubaEdit'"
										:params="{ id: certification_.id }"
										:query="{}"
									/>
									<item-remove
										:on-click="() => inactiveCertification(certification_.id)"
									/>
								</div>
							</td>
						</tr>
					</template>
				</generic-table>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import filtersMixin from '../../../mixins/filtersMixin'
import { formatDate } from '../../../helpers/DateTime'
import BoxFilters from '../../shared/BoxFilters.vue'
import GenericTable from '../../shared/GenericTable.vue'
import ItemEdit from '../../shared/ItemEdit.vue'
import ItemRemove from '../../shared/ItemRemove.vue'

export default {
	name: 'ScubaHome',
	components: { BoxFilters, GenericTable, ItemEdit, ItemRemove },
	mixins: [filtersMixin],

	data() {
		return {
			headers: ['CEBS-ID', 'Expira em:', 'Profundidade', 'Empresa', 'Ações'],
			filters: {
				name: undefined
			}
		}
	},
	computed: {
		...mapState({
			certifications: state => state.certification.certifications
		})
	},
	mounted() {
		this.loadCertifications()
	},
	methods: {
		...mapActions(['loadCertifications', 'inactiveCertification']),
		async search() {
			console.log('Search')
		},
		filteredCells(object) {
			const include = ['cbesid', 'expiration', 'depth', 'name']
			const keys = Object.keys(object)
			const result = keys.filter(key => {
				return include.includes(key)
			})
			return result
		},
		formatDate(date) {
			return formatDate(date)
		}
	}
}
</script>

<style lang="scss" scoped>
#scuba-home-component-content {
	background-color: transparent;
}
</style>
