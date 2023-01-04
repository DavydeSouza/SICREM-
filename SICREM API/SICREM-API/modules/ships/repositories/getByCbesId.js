const {PreparedStatement: PS} = require('pg-promise')
const deallocate = require('../../../utils/deallocate')

module.exports = (pgpdb) => async (id) => {
	const columnsJSON = `
	jsonb_agg(
		json_build_object(
			'ship', s.*,
			'mtf', json_build_object(
				'mtf', mtf.*
			),
			'gtf', json_build_object(
				'id', gtf.id,
				'activitys', gtf.activitys,
				'navigationareas', gtf.navigationareas,
				'rtc', gtf.rtc,
				'propulsionandpower', gtf.propulsionandpower,
				'hullmaterial', hmt.*,
				'shiptype', stp.*,
				'shipyard', spy.*,
				'operationport', op.*,
				'registrationport', rp.*
			)
		 )
	)
	`
	const join = `
	LEFT JOIN maintechinicalfeatures mtf on mtf.id = s.mtf
	LEFT JOIN generaltechinicalfeatures gtf on gtf.id = s.gtf
		join hullmaterialtype hmt on hmt.id = gtf.hullmaterial
		join shiptype stp on stp.id  = gtf.shiptype
		join port rp on rp.id = gtf.registrationport
		join port op on op.id = gtf.operationport
		join shipyard spy on spy.id = gtf.shipyard
	`
	const query = `
	SELECT
		${columnsJSON}
	FROM
		Ship s
		${join}
	WHERE
		s.cbesid = $1;
	`
	const psName = `getShip_${id}`

	const get = new PS({name: psName, text: query})
	get.values = [id]

	const result = await pgpdb.oneOrNone(get)
	await deallocate(pgpdb, psName)
	return result
}
