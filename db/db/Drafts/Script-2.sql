select
 jsonb_agg(
	json_build_object(
		'ship', s.*
		--'id', s.id,
		--'name', s."name",
		--'constructionYear', s.constructionYear,
		--'updateYear', s.updateYear
		--'charteredForeign', s.charteredForeign,
		--'solas', s.solas,
		--'hullCode', json_agg(hullCode),
		--'registrationNumber', json_agg(registrationNumber),
		--'callSign', json_agg(callSign),
		--'imoNumber', json_agg(imoNumber),
		--'mtf', json_agg(mtf),
		--'props', json_agg(propulsionandpower),
		--'gtf', json_agg(gtf),
	 	--'oi', json_agg(oi) 
 	)
)
from 
	ship s
	/*join maintechinicalfeatures mtf on mtf.ship = s.id
	join otherinfos oi on oi.ship = s.id
	join generaltechinicalfeatures gtf on gtf.ship = s.id
		join hullmaterialtype h on h.id = gtf.hullmaterial
		join shiptype stp on stp.id  = gtf.shiptype
		join port rp on rp.id = gtf.registrationport
		join port op on op.id = gtf.operationport
		join shipyard spy on spy.id = gtf.shipyard
where 
	s."name" like 'Teste%'*/