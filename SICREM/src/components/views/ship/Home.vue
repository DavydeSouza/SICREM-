<template>
	<div id="ship-home-component-content" class="component-root">
		<div class="content">
			<div class="row">
				<box-filters>
					<template #fields>
						<div class="search-section">
							<input
								ref="text"
								v-model="filters.name"
								type="text"
								placeholder="Filtro por nome"
							/>
							<label class="label-search" for="search">
								<i class="fas fa-search" />
							</label>
						</div>
						<div class="actions">
							<button class="btn-custom primary" @click="search">
								BUSCAR
							</button>
							<button
								class="btn-custom main-action"
								@click="() => $router.push({ name: 'shipCreate' })"
							>
								NOVO
							</button>
						</div>
					</template>
				</box-filters>
			</div>

			<div class="row">
				<generic-table
					:headers="headers"
					:load-data="() => {}"
					:query="$route.query"
					:total-itens="totalShips"
					:visible="!!ships.length"
					:pagination="false"
					:pageSize="12"
					@generic-table-paginate="data => changedPage(data)"
				>
					<template #rows>
						<tr v-for="(ship, index) in ships" :key="index">
							<td
								v-for="(prop, indexProp) in filteredCells(ship)"
								:key="indexProp"
							>
								<span v-if="prop === 'name'">
									<label>{{ headers[indexProp] }}:</label>
									{{ ship[prop] }}
								</span>
								<span v-else-if="prop === 'callsign'">
									<label>{{ headers[indexProp] }}:</label>
									{{ ship[prop] }}
								</span>
								<span v-else-if="prop === 'constructionyear'">
									<label>{{ headers[indexProp] }}:</label>
									{{ ship[prop] }}
								</span>
								<span v-else-if="prop === 'registrationnumber'">
									<label>{{ headers[indexProp] }}:</label>
									{{ ship[prop] }}
								</span>
							</td>
							<td class="actions">
								<div class="actions-container">
									<item-edit
										:router-name="'shipEdit'"
										:params="{ id: ship.cbesid }"
										:query="{}"
									/>
									<item-remove
										:text="exclusionText(ship)"
										:on-click="() => inactive(ship)"
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
import notification from '@/mixins/notificationsMixin.js'
import BoxFilters from '../../shared/BoxFilters.vue'
import GenericTable from '../../shared/GenericTable.vue'
import ItemEdit from '../../shared/ItemEdit.vue'
import ItemRemove from '../../shared/ItemRemove.vue'

export default {
	name: 'ShipHome',
	components: { BoxFilters, GenericTable, ItemEdit, ItemRemove },
	mixins: [filtersMixin, notification],

	data() {
		return {
			headers: [
				'Nome',
				'Ano de construção',
				'Callsign',
				'Nº de registro',
				'Ações'
			],
			filters: {
				active: 1,
				name: undefined
			},
			requestParams: {
				page: 1,
				sorter: 'name',
				direction: 'asc'
			}
		}
	},
	computed: {
		...mapState({
			totalShips: state => state.ships.total,
			ships: state => state.ships.ships
		})
	},
	mounted() {
		this.loadShipsByField_()
	},
	methods: {
		...mapActions(['loadShipsByField', 'loadShips', 'inactiveShip']),
		async search() {
			await this.loadShipsByField_()
			this.$refs['text'].value = ''
		},
		filteredCells(object) {
			const include = [
				'name',
				'callsign',
				'constructionyear',
				'registrationnumber'
			]
			const keys = Object.keys(object)
			const result = keys.filter(key => {
				return include.includes(key)
			})
			return result
		},
		async inactive(ship) {
			const resp = await this.inactiveShip(ship.id)
			this.apiResponseNotification(200, resp)
		},
		async changedPage(page) {
			this.requestParams.page = page
			await this.loadShipsByField_()
		},
		exclusionText(s) {
			return `Confirma a exclusão da embarcação ${s.name || ''}?`
		},
		async loadShipsByField_() {
			const params_ = { ...this.filters, ...this.requestParams }
			await this.loadShipsByField(this.sanatize(params_))
		}
	}
}
</script>

<style lang="scss" scoped>
#ship-home-component-content {
	background-color: transparent;
}
</style>
