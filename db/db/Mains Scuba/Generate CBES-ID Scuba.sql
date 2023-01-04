SELECT * FROM "system" s;
SELECT * FROM users u;
SELECT count(id) FROM "system" sys;


SELECT 
	concat(u.clientid,'M', to_char((count(s.id) + 1), 'fm000'))
FROM 
	"system" s
	JOIN certification c ON c.id = s.certification
	JOIN company cp ON cp.id = c.company
	JOIN users u ON u.id = cp."user"
WHERE
	cp.id  = u.id 
GROUP BY u.clientid ;