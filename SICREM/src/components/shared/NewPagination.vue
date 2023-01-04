<template>
	<div v-if="totalPages > 1" id="new-pagination-component-content">
		<v-pagination
			v-model="currentPage"
			:page-count="totalPages"
			:classes="bootstrapPaginationClasses"
			:labels="paginationAnchorTexts"
			@change="changed"
		/>
	</div>
</template>

<script>
import vPagination from 'vue-plain-pagination'

export default {
	components: { vPagination },
	props: {
		totalItems: {
			type: Number,
			default: 0,
			required: true
		},
		pageSize: {
			type: Number,
			default: 0,
			required: true
		}
	},
	data() {
		return {
			currentPage: 1,
			totalPages: this.calculatePage(),
			bootstrapPaginationClasses: {
				ul: 'pagination',
				li: 'page-item',
				liActive: 'active',
				liDisable: 'disabled',
				button: 'page-link'
			},
			paginationAnchorTexts: {
				first: 'Primeira',
				prev: '<',
				next: '>',
				last: 'Última'
			}
		}
	},
	watch: {
		totalItems: function() {
			this.totalPages = this.calculatePage()
		}
	},
	methods: {
		changed() {
			this.$emit('paginate', this.currentPage)
		},
		calculatePage() {
			const quoc = this.totalItems / this.pageSize
			const decimal = quoc % 1
			const calc = () => (decimal > 0 ? parseInt(quoc + 1) : quoc)
			const pages = decimal ? calc() : quoc
			return pages
		}
	}
}
</script>

<style lang="scss">
#new-pagination-component-content {
	display: flex;
	justify-content: center;
	.pagination {
		.page-item {
			&.page-item.active {
				.page-link {
					background-color: $success-color;
					border-color: $success-color;
				}
			}
			margin: 0 3px;
			.page-link {
				border-radius: $border-radius;
			}
		}
	}
}
</style>
