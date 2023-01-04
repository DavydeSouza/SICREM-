<template>
	<div id="generic-list-component-content" class="component-root">
		<div class="content">
			<!-- <div class="row">
				<box-filters>
					<template v-slot:fields>
						<div class="search-section">
							<input type="text" placeholder="Filtro por nome" v-model="filters.name"/>
							<label class="label-search" for="search">
								<i class="fas fa-search"></i>
							</label>
						</div>
							<div class="actions">
								<button class="btn-custom primary" @click="search">BUSCAR</button>
						</div>
					</template>
				</box-filters>
			</div> -->

			<div class="row">
				<generic-table-small
					:headers="headers_"
					:load-data="() => {}"
					:query="$route.query"
					:total-itens="10"
					:visible="!!items.length"
					:pagination="false"
				>
					<template #rows>
						<tr v-for="(item, iI) in items" :key="iI">
							<td v-for="(keys, iP) in listKeys" :key="iP">
								<span>{{ renderValue(getPropValue(item, keys)) }}</span>
							</td>
							<td class="generic-list-actions">
								<div class="actions-container">
									<item-edit
										:active="!editing"
										:on-click="() => edit(item)"
										:router-name="''"
										:params="{ id: item.id }"
									/>
									<item-remove
										:active="!editing"
										:on-click="() => remove(item.id)"
									/>
								</div>
							</td>
						</tr>
					</template>
				</generic-table-small>
			</div>
		</div>
	</div>
</template>

<script>
// import filtersMixin from '../../../mixins/filtersMixin'
// import BoxFilters from '../../shared/BoxFilters.vue'
import store from '@/store/store'
import GenericTableSmall from '@/components/shared/GenericTableSmall.vue'
import ItemEdit from '@/components/shared/ItemEdit.vue'
import ItemRemove from '@/components/shared/ItemRemove.vue'

export default {
	name: 'GenericList',
	components: { /* BoxFilters,  */ GenericTableSmall, ItemEdit, ItemRemove },
	mixins: [
		/* filtersMixin */
	],
	props: {
		items: {
			type: Array,
			required: true
		},
		dataMap: {
			type: Array,
			required: true
		},
		editing: {
			type: Boolean,
			default: false
		},
		editFunction: {
			type: String,
			required: true
		},
		removeFunction: {
			type: String,
			default: undefined
		}
	},
	data() {
		return {
			filters: {
				name: undefined
			}
		}
	},
	computed: {
		headers_() {
			return this.dataMap.map(h => h.header)
		},
		listKeys() {
			return this.dataMap.map(h => h.keys).filter(h => h.length)
		}
	},
	methods: {
		async search(params) {
			console.log(params)
		},
		getPropValue(item, keys = []) {
			let value = item
			keys.forEach(key => (value = value[key]))
			return value
		},
		edit(item) {
			if (!this.editing) {
				this.editFunction ? store.dispatch(this.editFunction, item) : () => {}
			}
		},
		remove(param) {
			this.removeFunction
				? store.dispatch(this.removeFunction, param)
				: () => {}
		},
		renderValue(value) {
			const isArray = Array.isArray(value)
			const join = values => values.join(' - ')
			return isArray ? join(value) : value
		}
	}
}
</script>

<style lang="scss" scoped>
#generic-list-component-content {
	background-color: transparent;
	.content {
		.row {
			&::v-deep tr {
				text-align: center;
				td {
					height: inherit;
					color: $font-color;
					font-weight: 100;
					border-radius: 0px;
					border: none;
					border-bottom: 1px solid $font-color;
					&:first-of-type {
						text-align: left;
					}
					&.generic-list-actions {
						margin: 0;
						width: 100%;
						display: flex;
						justify-content: center;
						.actions-container {
							width: 100%;
							display: flex;
							justify-content: center;
							column-gap: 10px;
						}
					}
				}
			}
		}
	}
}
</style>
