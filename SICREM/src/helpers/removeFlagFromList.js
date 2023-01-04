const removeFlagFromList = list => {
	return list.map(item => {
		if (item.flag) item.flag = undefined
		return item
	})
}
export default removeFlagFromList
