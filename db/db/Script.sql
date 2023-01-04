	select
		json_build_object(
			'user', json_build_object(
					'id', u.id, 
					'name', u.name,
					'email', u.email,
					'contacts', u.contacts,
					'level', u.level,
					'clientId', u.clientid
			),
			'shipowner', json_build_object(
					'id', s.id, 
					'name', s.name,
					'register', s.register,
					'address', s.address
			),
			'company', json_build_object(
					'id', c.id, 
					'name', c.name,
					'fcem', c.fcem,
					'fcemExpiration', c.fcemexpiration,
					'register', c.register,
					'address', c.address,
					'mainDivesQtd', c.maindivesqtd,
					'reservesDivesQtd', c.reservesdivesqtd
			)
		)
	FROM
		users u
		left join shipowner s on s."user" = u.id
		left join company c on c."user" = u.id
	WHERE
		u.id = '0c0cc3e6-5776-c857-65bc-c61ba1822142';
		
	
	
select * from users ;

select * from shipowner;



	SELECT
		*
	FROM
		Shipowner 
		 join 
	WHERE
		LOWER(unaccent(u.name)) LIKE LOWER(unaccent('%${name}%'));`