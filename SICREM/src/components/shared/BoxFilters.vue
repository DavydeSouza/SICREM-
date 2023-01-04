<template>
	<transition name="fade">
		<div id="box-filters-component" class="component-root">
			<div class="search-box">
				<span class="label"><i class="fas fa-filter" /> FILTROS</span>

				<div class="fields">
					<slot name="fields" />
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'BoxFilters',
	components: {},
	data() {
		return {}
	},
	methods: {}
}
</script>

<style lang="scss">
#box-filters-component {
	background-color: transparent;
	.search-box {
		background-color: $main-color;
		border-radius: $border-radius;
		padding: 15px;

		.label {
			font-size: $font-size;
			color: #fff;
			font-weight: $font-weight-buttons;
			margin-bottom: 15px;
		}

		.fields {
			display: flex;
			flex-wrap: wrap;
			gap: 15px;
			margin-top: 15px;
			justify-content: flex-start;

			.search-section,
			.select-section {
				padding: 0px 10px 0px 0px;
				width: 32.1%;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 45px;
				border-radius: $border-radius;
				background: #ffffff;
			}

			.search-section {
				label {
					font-family: $font-family;
					color: $font-color;
					font-size: $font-size;
					margin: 0;
				}

				input {
					width: 100%;
					margin-left: 12px;
					&::placeholder {
						font-style: italic;
					}
				}
			}

			.search-section-date {
				padding: 0 10px 0 10px;
				width: 32.1%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 45px;
				border-radius: $border-radius;
				background: #ffffff;
			}
			.select-section {
				padding-left: 10px;
				label {
					font-family: $font-family;
					color: $font-color;
					font-size: $font-size;
				}
			}
		}
		.actions {
			gap: 15px;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: flex-end;
			flex-grow: 1;
		}
	}
}
</style>

<style lang="scss">
@media (max-width: 820px) {
	#box-filters-component {
		.search-box {
			.fields {
				justify-content: center;
				gap: 20px;
				padding: 10px 0;
				.search-section,
				.select-section {
					width: 48%;
				}
			}
		}
	}
}
</style>
