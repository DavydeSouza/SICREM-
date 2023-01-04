<template>
	<transition name="fade">
		<div v-if="visible" id="generic-table-component" class="component-root">
			<div v-if="headers.length > 0" class="table-wrapper">
				<div class="table">
					<table v-if="!loading">
						<thead>
							<tr>
								<th v-for="(header, index) in headers" :key="index">
									{{ header }}
								</th>
							</tr>
						</thead>

						<tbody>
							<slot name="rows" />
						</tbody>
					</table>
					<loader v-else />
				</div>

				<div>
					<new-pagination
						:total-items="totalItens"
						:page-size="pageSize"
						@paginate="data => $emit('generic-table-paginate', data)"
					/>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
/* eslint-disable vue/no-mutating-props */
import { mapState } from 'vuex'
import NewPagination from '@/components/shared/NewPagination'
import Loader from '@/components/shared/Loader'

export default {
	name: 'GenericTable',
	components: { NewPagination, Loader },
	props: {
		headers: {
			type: Array,
			required: true
		},
		query: {
			type: Object,
			required: true
		},
		loadData: {
			type: Function,
			required: true
		},
		totalItens: {
			type: Number,
			default: 0
		},
		pageSize: {
			type: Number,
			default: 3
		},
		visible: {
			type: Boolean,
			default: true
		},
		pagination: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			params: {},
			currentPage: 1
		}
	},
	computed: { ...mapState({ loading: state => state.loader.loading }) },
	mounted() {
		if (this.pagination) this.loadDataCurrentPage()
	},
	methods: {
		async loadDataCurrentPage() {
			const resp = await this.loadData(this.query)
			if (resp) {
				const items = resp.data
				this.totalItens = items[0].total
				this.$emit('table-load-data', items)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
#generic-table-component {
	.table-wrapper {
		width: 100%;
		text-align: left;
		border-collapse: separate;
		.table {
			min-height: 76vh;
			padding: 0px;
			table {
				border-radius: $border-radius;
				width: 100%;
				border-collapse: separate;
				border-spacing: 0 5px;
				padding: 5px 10px;
				th,
				td {
					padding: 5px;
				}
				thead {
					border-radius: $border-radius;
					background-color: $main-color;
					tr {
						th {
							text-align: center;
							color: #fff;
							font-family: $font-family;
							font-size: $font-size;
							font-weight: $font-weight-default-bolder;
							border: none;
							&:first-of-type {
								text-align: left;
							}
							i {
								margin-left: 5px;
								font-size: 12px;
								font-weight: 600;
							}
						}
					}
				}
				tbody {
					&::v-deep tr {
						text-align: center;
						background: $inputs-color;
						td {
							font-family: $font-family;
							font-size: $font-size;
							color: $font-color;
							font-weight: 100;
							border-radius: 0px;
							border: none;
							&:first-of-type {
								width: 200px;
								max-width: 300px;
								text-align: left;
								text-overflow: ellipsis;
								overflow: hidden;
								white-space: nowrap;
								word-break: break-all;
							}
							&.actions {
								.actions-container {
									display: flex;
									justify-content: center;
									gap: 10px;
								}
							}
							span {
								border-radius: 5px;
								padding: 5px;
								label {
									display: none;
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>

<style lang="scss" scoped>
@media (max-width: 1024px) {
	#generic-table-component {
		.table-wrapper {
			.table {
				min-height: 74vh;
				table {
					thead {
						display: none;
					}
					tbody {
						&::v-deep tr {
							display: flex;
							flex-wrap: wrap;
							margin-top: 5px;
							border-radius: 0;
							border-top: 1px solid $main-color;
							td {
								width: 100%;
								padding: 5px;
								display: flex;
								border-radius: 0;
								span {
									display: flex;
									align-items: center;
									label {
										font-weight: $font-weight-default-bolder;
										display: block;
										padding: 5px;
									}
								}
								&:first-of-type {
									width: 100%;
									border-top-left-radius: 0;
									border-bottom-left-radius: 0;
								}
								&:nth-last-child(2) {
									width: 50%;
								}
								&:last-of-type {
									width: 50%;
								}
								&:last-of-type {
									justify-content: flex-end;
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
