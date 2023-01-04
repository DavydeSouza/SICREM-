SELECT

        jsonb_agg(
                json_build_object(
                        'ship', s.*,
                         'otherInfos', oi,
                        'mtf', json_build_object(
                                'mtf', mtf.*,
                                'lightDraft', ldft.*,
                                'heavyDraft', hdft.*,
                                'souls', sou.*,
                                'freeBoard', fb.*,
                                'freeBoardDraft', fbd.*
                        ),
                        'gtf', json_build_object(
                                'activitys', gtf.activitys,
                                'navigationareas', gtf.navigationareas,
                                'rtc', gtf.rtc,
                                'propulsionandpower', gtf.propulsionandpower,
                                'hullMaterial', hmt.*,
                                'shiptype', stp.*,
                                'shipyard', spy.*,
                                'operationport', op.*,
                                'registrationport', rp.*
                        )
                 )
        )

        FROM
                Ship s

        LEFT JOIN otherinfos oi on oi.ship = s.id
        LEFT JOIN maintechinicalfeatures mtf on mtf.ship = s.id
                join draft ldft on ldft.mtf = mtf.id and ldft.isligth = true
                join draft hdft on hdft.mtf = mtf.id and hdft.isligth = false
                join souls sou on sou.mtf = mtf.id
                join freeboard fb on fb.mtf = mtf.id and fb.isdraft = false
                join freeboard fbd on fbd.mtf = mtf.id and fbd.isdraft = true
        LEFT JOIN generaltechinicalfeatures gtf on gtf.ship = s.id
                join hullmaterialtype hmt on hmt.id = gtf.hullmaterial
                join shiptype stp on stp.id  = gtf.shiptype
                join port rp on rp.id = gtf.registrationport
                join port op on op.id = gtf.operationport
                join shipyard spy on spy.id = gtf.shipyard

        WHERE
                s.id = '24fe2cf4-145a-ba90-e521-ac5ec56585ce';