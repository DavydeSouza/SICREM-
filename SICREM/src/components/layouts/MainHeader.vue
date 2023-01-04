<template>
	<header id="master-header">
		<h1>
			<router-link class="routerLink home" :to="{ path: `/user` }">
				<div>SICREM</div>
			</router-link>
		</h1>
	</header>
</template>

<style lang="scss" scoped>
#master-header {
	width: 100%;
	height: 80px;
	h1 {
		padding: 15px;
		height: inherit;
		font-weight: 600;
		.home {
			color: white;
			text-decoration: none;
		}
	}
}
</style>
