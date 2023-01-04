SELECT s."name" , s.callsign, s.cbesid, s.shipowner FROM ship s;
SELECT * FROM users u;
SELECT count(id) FROM ship s;
SELECT * FROM shipowner so ;

SELECT * FROM maintechinicalfeatures m ;
SELECT * FROM navigationareatype n;

/*
9a014d12-6e7a-6f9b-1fb4-df1af5ca26c5
4527f58a-c746-4b8e-812b-05511d6b5021
*/
SELECT 
	concat(u.clientid,'E', to_char((count(s.id) * 39), 'fm000'))
FROM 
	ship s
	JOIN shipowner so ON so.id = s.shipowner
	JOIN users u ON u.id = so."user"
WHERE
	u.id  = '4527f58a-c746-4b8e-812b-05511d6b5021'
GROUP BY u.clientid 



SELECT
	s."name", 
	so."name" 
FROM 
	ship s
	JOIN shipowner so ON so.id = s.shipowner;
--WHERE
--	u.id  = '4527f58a-c746-4b8e-812b-05511d6b5021';
--	u.id  = '9a014d12-6e7a-6f9b-1fb4-df1af5ca26c5';



SELECT 
	concat(u.clientid,'E', to_char((count(s.id) + 1), 'fm000'))
FROM 
	ship s
	JOIN shipowner so ON so.id = s.shipowner
	JOIN users u ON u.id = so."user"
WHERE
	so.id  = s.shipowner 
	-- AND so.id = '7694feaf-faed-f4fa-ebab-0c542bcc54e5'
GROUP BY u.clientid 