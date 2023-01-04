module.exports = (pgpdb) => (obj, tx) => {
	const query = `UPDATE
										generaltechinicalfeatures
									SET
										hullmaterial = $<hullmaterial>,
										operationport = $<operationport>,
										registrationport = $<registrationport>,
										shipyard = $<shipyard>,
										shiptype = $<shiptype>,
										activitys = $<activitys>,
										navigationareas = $<navigationareas>,
										propulsionandpower = $<propulsionandpower>,
										rtc = $<rtc>
									WHERE
										id = $<id>
									RETURNING
									id;`
	const pgOrTX = tx || pgpdb
	return pgOrTX.one(query, obj)
}
