const findIObjectnArrayByArray = (arraySource = [], arrayTarget = []) => {
	let show = false
	arraySource.forEach(s => {
		const found = arrayTarget.find(t => t === s)
		if (found) {
			show = true
			return
		}
	})
	return show
}
export default findIObjectnArrayByArray
