<template>
	<div id="multi-radio-component-content">
		<div class="form-container">
			<form novalidate="true" @submit.prevent="save">
				<div class="form-row">
					<div
						v-for="(radio, iR) in radios"
						:key="iR"
						class="form-group col-md-6 checks-container"
					>
						<label for="type">{{ radio.label }}</label>
						<div class="container">
							<div v-for="(value, iV) in radio.values" :key="iV" class="item">
								<input
									:id="_id(value.name, `${value.value}`)"
									:ref="_id(value.name, `${value.value}`)"
									class="form-check"
									type="radio"
									:name="radio.name"
									:value="value.value"
									@change="emit"
								/>
								<label :for="_id(value.name, `${value.value}`)">
									{{ value.label || value.value }}
								</label>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import addresValidation from '@/mixins/validations/address.js'

export default {
	name: 'MultiRadio',
	mixins: [addresValidation],
	props: {
		radios: {
			type: Array,
			default: () => [
				{
					label: null,
					values: []
				}
			]
		},
		clear: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		clear() {
			Object.keys(this.$refs).forEach(key => {
				this.$refs[key][0].checked = false
			})
		}
	},
	methods: {
		_id(label = '', sufix = '') {
			return `${label.toLowerCase()}_${sufix.toLowerCase()}`
		},
		emit(e) {
			const payload = {
				name: e.target.name,
				value: e.target.value
			}
			this.$emit('multi-radio-change', payload)
		}
	}
}
</script>

<style lang="scss" scoped>
#multi-radio-component-content {
	width: 100%;
	form {
		.form-row {
			.form-group {
				&.checks-container {
					&.invalid-field {
						.container {
							border: $default-border;
							border-color: $danger-color;
							border-radius: $border-radius;
						}
					}
					.container {
						height: $input-height-default;
						padding-left: 5px;
						display: flex;
						gap: 15px;
						.item {
							display: flex;
							align-items: center;
							input {
								position: relative;
								bottom: 1px;
								cursor: pointer;
							}
							label {
								margin-left: 5px;
								font-size: $font-size-mid-big;
								cursor: pointer;
							}
						}
					}
				}
			}
		}
	}
}
</style>
