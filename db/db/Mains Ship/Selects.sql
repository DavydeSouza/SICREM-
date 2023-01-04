-- SHIP
--SELECT * FROM Ship where solas = true;
SELECT * FROM Ship;	
--	select * from otherinfos;
	select * from radiotelephonecoverage;
	-- select * from propulsionandpower;
	SELECT * FROM Users order by "name";
	SELECT * FROM Company order by "name";
	SELECT * FROM "level";
	-- SELECT * FROM contact;


 -- GTF
SELECT * FROM generaltechinicalfeatures;
	SELECT * FROM shipyard;
	SELECT * FROM ShipType;
	SELECT * FROM hullmaterialtype;
	SELECT * FROM port;
	SELECT * FROM ActivityType;	
--		SELECT * FROM ActivityType_Gtf;
	SELECT * FROM NavigationAreaType;
-- 		SELECT * FROM NavigationAreaType_Gtf;

-- MFT
SELECT * FROM MainTechinicalFeatures;
--	select * from draft;
--	SELECT * FROM Souls;
--	select * from freeboard;
		-- select * from freeboardarea;

SELECT * FROM shipowner;

select 
	s."name" , s.registrationnumber, s.imonumber, s.hullcode, s.shipowner,
	m.id "MTF",
	sls.id "SOULS",
	d.id "DRAFT"
from
	maintechinicalfeatures m
	left join souls sls on sls.mtf = m.id
	left join draft d on d.mtf  = m.id 
	inner join ship s on s.id = m.ship
	