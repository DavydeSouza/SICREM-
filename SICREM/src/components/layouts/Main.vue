<template>
	<div id="main-container">
		<side-menu v-if="$auth.check()" />
		<components-area />
	</div>
</template>

<script>
import SideMenu from './SideMenu'
import ComponentsArea from './ComponentsArea'

export default {
	name: 'MainLayout',
	components: { SideMenu, ComponentsArea },
	created() {
		if (!this.$auth.check()) this.$router.push({ name: 'login' })
	},
	methods: {}
}
</script>
