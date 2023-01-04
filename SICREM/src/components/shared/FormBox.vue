<template>
	<div class="form-box-component-content">
		<section class="header">
			<span>
				<slot name="header" />
			</span>
		</section>
		<section class="content">
			<slot name="content" />
		</section>
	</div>
</template>

<script>
export default {
	name: 'FormBox'
}
</script>

<style lang="scss" scoped>
$border-content: 1px solid #0000002e;
.form-box-component-content {
	background-color: #f7f7f7;
	width: 95%;
	margin-top: 20px;
	padding: 20px;
	padding-top: 15px;
	border: $border-content;
	border-radius: $border-radius;
	font-family: $font-family;
	.header {
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		font-size: 1.5rem;
		color: #000000ba;
		font-weight: 700;
	}
}
</style>
