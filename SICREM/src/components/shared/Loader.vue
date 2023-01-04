<template>
	<div class="loader">
		<div class="lds-dual-ring"></div>
	</div>
</template>

<script>
export default {
	name: 'Loader'
}
</script>

<style lang="scss" scoped>
.loader {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.lds-dual-ring {
	width: 120px;
	height: 120px;
	display: flex;
	align-items: center;
}
.lds-dual-ring:after {
	content: ' ';
	display: block;
	width: 50px;
	height: 50px;
	margin: 8px;
	border-radius: 50%;
	border: 6px solid $main-color;
	border-color: $main-color transparent $main-color transparent;
	animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
