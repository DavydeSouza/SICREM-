SELECT id, name, level, active FROM Users order by "name";
SELECT * FROM company;
SELECT id, name, register, "user", active FROM shipowner;
SELECT * FROM "system";
SELECT * FROM certification;


SELECT id, certification, active, dtInsert FROM "system"  order by dtinsert;
SELECT id, active, dtInsert FROM certification  order by dtinsert;

SELECT
	c.id, c.name, u.clientid
FROM
	Company c
	JOIN Users u ON u.id = c.user
WHERE
    LOWER(unaccent(c.name)) LIKE LOWER(unaccent('%Escola%'));
    
   
   
   
-- INSERT INTO Shipowner (id, name, register, "user") VALUES ('81dd9a19-0ec0-c4b4-8654-80d09e850f79', 'Armador Teste', '123123123', 'd48713a5-f7c0-d6a7-9535-6d70e01ab2c6') RETURNING *;

-- INSERT INTO Shipowner (id, name, register, "user") VALUES ('83d1409c-370b-c00e-992a-a2249c6c5fce', 'Armador Teste', '123123123', 'e6cea318-a226-e58b-379e-bb22c2d820dd') RETURNING *;|
   
-- INSERT INTO Shipowner (id, name, register, "user") VALUES ('2fee97f3-43ce-4fed-3457-947baafff087', 'Armador Teste', '123123123', '87c674dc-fb86-b7b5-9913-8b48673cc874') RETURNING *;
   
-- UPDATE Shipowner SET active = FALSE WHERE "user" = '9a014d12-6e7a-6f9b-1fb4-df1af5ca26c5';