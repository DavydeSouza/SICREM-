/*SELECT
	jsonb_agg(json_build_object( 'ship', s.*))
FROM
	Ship s
WHERE
    s.name LIKE '%Teste%';*/



SELECT jsonb_agg(json_build_object('ship', s.*)) FROM Ship s WHERE s.name LIKE '%Teste%' AND s.solas = true;



select * from souls s ;



-- DELETE from souls where id = '';

INSERT INTO
	Users (id, password, name, nick, email, level, clientid)
VALUES
	('4527f58a-c746-4b8e-812b-05511d6b5021', '1aa8bd4ded5272bc2fc4fe3e77d951f0',
     'Rafael Ulisses', 'Jay', 'ruds.devel@gmail.com', '2', 'CLI-001');


INSERT INTO
	Shipowner (id, name, clientid)
VALUES
	('4527f58a-c746-4b8e-812b-05511d6b5021', 'Rafael Ulisses', 'CLI-001');