const deallocate = async (pgpdb, psName) => {
	const deallocate_ = `deallocate ${psName}`
	try {
		await pgpdb.none(deallocate_)
	} catch (error) {
		// console.log('Nada para desalocar', error)
	}
}
module.exports = deallocate
