<template>
	<sidebar-menu
		:show-one-child="true"
		:menu="menu"
		:hide-toggle="true"
		:width="'250px'"
	>
		<div slot="header" class="header">
			<user-infos />
		</div>
		<div slot="footer" class="footer">
			<div class="logout">
				<span @click="logout">
					Sair
					<i class="fas fa-sign-out-alt" />
				</span>
			</div>
		</div>
	</sidebar-menu>
</template>

<script>
/* eslint-disable */
import { SidebarMenu } from 'vue-sidebar-menu'
import UserInfos from './UserInfos'
import authorizeMixin from '@/mixins/authorizeMixin'
export default {
	name: 'SideMenu',
	components: { SidebarMenu, UserInfos },
	mixins: [authorizeMixin],
	data () {
		return {
			menu: this.createMenu()
		}
	},

	methods: {
		logout () {
			this.$auth.logout({ makeRequest: false, redirect: '/' })
		},
		createMenu() {
			const hiddenToExternals = !this.isAdmin() && !this.isCbesUser()
			return [
				{
					href: { name: hiddenToExternals ? 'externals' : 'internals' },
					icon: 'fas fa-chart-line',
					title: 'Dashboard'
				},
				{
					title: 'Usuários',
					icon: 'fas fa-users',
					hidden: hiddenToExternals,
					child: [
						/* {
							href: { name: 'userCreate' },
							icon: 'fas fa-user-plus',
							title: 'Cadastrar'
						}, */
						{
							href: { name: 'clientList' },
							icon: 'fas fa-user-tie',
							title: 'Clientes'
						},
						{
							href: { name: 'usersList' },
							icon: 'fas fa-user',
							title: 'Internos'
						},
					]
				},
				{
					title: 'Embarcações',
					icon: 'fas fa-ship',
					child: [
						/* {
							href: { name: 'shipCreate' },
							title: 'Cadastrar'
						}, */
						{
							href: { name: 'shipHome' },
							title: 'Listar'
						}
					]
				},
				/* {
					title: 'Sistemas de Mergulho',
					icon: 'fas fa-water',
					child: [
						{
							href: { name: 'scubaHome' },
							title: 'Listar'
						},
						{
							href: { name: 'scubaCreate' },
							title: 'Cadastrar Sistema'
						},
						// {
							// href: { name: 'hyperbaricCreate' },
							// title: 'Cadastrar câmara hiperbálica'
						// }
					]
				} */
			]
		}
	}
}

</script>

<style lang="scss" scoped>
	@import url('../../../node_modules/vue-sidebar-menu/dist/vue-sidebar-menu.css');
</style>

<style lang="css">

.v-sidebar-menu {
	position: relative;
	height: 100%;
}

.v-sidebar-menu .vsm--header {
	height: 80px;
}

.v-sidebar-menu .vsm--item.vsm--item_open .vsm--link.vsm--link_level-1,
.v-sidebar-menu .vsm--item.vsm--item_open .vsm--link.vsm--link_level-1 i {
	background-color: #3367d6;
}

.v-sidebar-menu .vsm--link.vsm--link_level-1.vsm--link_active {
	-webkit-box-shadow: 3px 0px 0px 0px #3367d6 inset;
	box-shadow: 3px 0px 0px 0px #3367d6 inset;
}

/*
.v-sidebar-menu .vsm--item {}
.v-sidebar-menu.vsm_collapsed {}
.v-sidebar-menu.vsm_expanded {}
.v-sidebar-menu.vsm_expanded {}
.v-sidebar-menu.vsm_collapsed {}
.v-sidebar-menu.vsm_rtl {}
.v-sidebar-menu .vsm--item.vsm--item_open {}
.v-sidebar-menu .vsm--link {}
.v-sidebar-menu .vsm--link.vsm--link_active {}
.v-sidebar-menu .vsm--link.vsm--link_exact-active {}
.v-sidebar-menu .vsm--link.vsm--link_mobile-item {}
.v-sidebar-menu .vsm--link.vsm--link_level-[n] {}
.v-sidebar-menu .vsm--link.vsm--link_disabled {}
.v-sidebar-menu .vsm--title {}
.v-sidebar-menu .vsm--icon {}
.v-sidebar-menu .vsm--arrow.vsm--arrow_open {}
.v-sidebar-menu .vsm--arrow {}
.v-sidebar-menu .vsm--badge {}
.v-sidebar-menu .vsm--header {}
.v-sidebar-menu .vsm--list {}
.v-sidebar-menu .vsm--dropdown>.vsm--list {}
.v-sidebar-menu .vsm--mobile-item {}
.v-sidebar-menu .vsm--mobile-bg {}
.v-sidebar-menu .vsm--toggle-btn {}
*/

</style>

<style lang="scss" scoped>
.v-sidebar-menu {
	.header {
		padding: 25px 35px;
	}
	.footer {
		.logout {
			height: 40px;
    	display: flex;
    	justify-content: center;
			span {
				width: fit-content;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				column-gap: 5px;
				font-size: $font-size-mid-big;
				user-select: none;
				text-transform: uppercase;
				cursor: pointer;
				&:hover {
					color: $font-color-btn;
				}
			}
		}
	}
}
</style>
