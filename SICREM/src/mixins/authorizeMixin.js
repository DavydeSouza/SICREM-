import { ROLES } from '../helpers/roles'
export default {
	methods: {
		isCbesUser() {
			return this.$auth.user().level === ROLES.user
		},
		isClient() {
			return this.$auth.user().level === ROLES.client
		},
		isAdmin() {
			return this.$auth.user().level === ROLES.admin
		},
		ismarinha() {
			return this.$auth.user().level === ROLES.marinha
		}
	}
}
