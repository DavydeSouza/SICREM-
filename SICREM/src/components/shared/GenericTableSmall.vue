<template>
	<transition name="fade">
		<div
			v-if="visible"
			id="generic-table-small-component"
			class="component-root"
		>
			<div v-if="headers.length > 0" class="table-wrapper">
				<div class="table">
					<table>
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
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'GenericTableSmall',
	components: {},
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
		visible: {
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
	methods: {}
}
</script>

<style lang="scss" scoped>
#generic-table-small-component {
	max-height: 250px;
	overflow: auto;
	.table-wrapper {
		width: 100%;
		text-align: left;
		border-collapse: separate;
		.table {
			padding: 0px;
			margin: 0;
			table {
				border-radius: $border-radius;
				width: 100%;
				border-collapse: separate;
				border-spacing: 0 5px;
				th,
				td {
					padding: 3px 5px;
					font-family: $font-family;
					font-size: $font-size-small;
				}
				thead {
					border-radius: $border-radius;
					background-color: $main-color;
					tr {
						th {
							text-align: center;
							color: #fff;
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
			}
		}
	}
}
</style>

<style lang="scss">
@media (max-width: 1024px) {
	#generic-table-small-component {
		.table-wrapper {
			.table {
				table {
					thead {
						display: none;
					}
					tbody {
						tr {
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
