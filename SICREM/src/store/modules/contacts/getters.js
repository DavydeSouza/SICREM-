export default {
	emptyContact() {
		return {
			id: undefined,
			name: undefined,
			email: undefined,
			cels: [undefined],
			phones: [undefined]
		}
	},
	contacts: state => {
		return state.contacts
	},
	editingContact: state => {
		return !!state.contacts.find(c => c.flag === 'editing')
	}
}
