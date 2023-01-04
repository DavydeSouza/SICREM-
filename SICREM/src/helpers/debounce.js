let interval = 0
const debounce = cb => {
	clearTimeout(interval)
	interval = setTimeout(async () => {
		await cb()
	}, 600)
}
export default debounce
