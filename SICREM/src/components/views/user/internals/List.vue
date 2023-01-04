<template>
	<div id="user-component-content" class="component-root">
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
								@click="() => $router.push({ name: 'userCreate' })"
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
					:total-itens="totalUsers"
					:visible="!!clients.length"
					:pageSize="12"
					@generic-table-paginate="data => changedPage(data)"
				>
					<template #rows>
						<tr v-for="(client, index) in clients.map(c => c)" :key="index">
							<td
								v-for="(prop, indexProp) in filteredCells(client)"
								:key="indexProp"
							>
								<item-inactive
									v-if="prop === 'clientid'"
									:allow="isAdmin()"
									:active="client.active"
									:text="promptText(client.active)"
									:on-click="() => inactive(client)"
								/>
								<span v-else-if="prop === 'name'" :title="client[prop]">
									<label>{{ headers[indexProp] }}:</label>
									{{ client[prop] }}
								</span>
								<span v-else-if="prop === 'level'">
									<label>{{ headers[indexProp] }}:</label>
									{{ levelNames(client[prop]) }}
								</span>
								<span v-else-if="prop === 'email'">
									<label>{{ headers[indexProp] }}:</label>
									{{ client[prop] }}
								</span>
							</td>
							<td class="actions">
								<div class="actions-container">
									<item-edit
										:router-name="'usersEdit'"
										:params="{ id: client.id }"
										:query="{}"
									/>
									<item-remove
										v-if="isAdmin()"
										:text="textDelete"
										:on-click="() => inactive(client)"
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
import filtersMixin from '@/mixins/filtersMixin'
import notification from '@/mixins/notificationsMixin.js'
import authorize from '@/mixins/authorizeMixin.js'
import BoxFilters from '@/components/shared/BoxFilters.vue'
import GenericTable from '@/components/shared/GenericTable.vue'
import ItemEdit from '@/components/shared/ItemEdit.vue'
import ItemRemove from '@/components/shared/ItemRemove.vue'
import ItemInactive from '@/components/shared/ItemInactive.vue'

export default {
	name: 'UsersList',
	components: { BoxFilters, GenericTable, ItemEdit, ItemRemove, ItemInactive },
	mixins: [filtersMixin, notification, authorize],

	data() {
		return {
			headers: ['Nome', 'Perfil', 'E-mail', 'Status', 'Ações'],
			textDelete: `
				Essa remoção não poderá ser desfeita.
				Confirma a operação?
			`,
			textInactivate: `
				Desativar um usuário suspende o acesso do mesmo ao sistema.
				Confirma a operação?
			`,
			textActivate: ` O cliente será re-ativado. Confirma a operação?`,
			filters: {
				active: 1,
				level: [0, 1],
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
			totalUsers: state => state.clients.total,
			clients: state => state.clients.clients
		})
	},
	mounted() {
		this.loadUsersByField_()
	},
	methods: {
		...mapActions([
			'loadUsersByField',
			'getClientsByName',
			'inactiveCliente',
			'removeCliente'
		]),
		async search() {
			await this.loadUsersByField_()
			this.$refs['text'].value = ''
		},
		filteredCells(object) {
			const include = ['clientid', 'name', 'level', 'email']
			const keys = Object.keys(object)
			const result = keys.filter(key => {
				return include.includes(key)
			})
			return result
		},
		levelNames(level) {
			const names = ['Adminstrador', 'CBES Usuário', 'Cliente']
			return names[level]
		},
		async inactive(client) {
			const resp = await this.inactiveCliente(client)
			this.apiResponseNotification(200, resp)
		},
		promptText(active) {
			return !active ? this.textActivate : this.textInactivate
		},
		async changedPage(page) {
			this.requestParams.page = page
			await this.loadUsersByField_()
		},
		async loadUsersByField_() {
			const params_ = { ...this.filters, ...this.requestParams }
			await this.loadUsersByField(this.sanatize(params_))
		}
	}
}
</script>

<style lang="scss" scoped>
#user-component-content {
	background-color: transparent;
}
</style>
