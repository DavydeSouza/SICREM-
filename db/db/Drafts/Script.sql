INSERT INTO Level (id, name, value)
	VALUES
('e4a29dec-24a9-428d-beb6-fdb6f2b257d7', 'ADMINISTRADOR', '0');

INSERT INTO Level (id, name, value)
	VALUES
('fea52140-6faa-47b2-ad8a-da1713668996', 'CBES Usuário', '1');

INSERT INTO Level (id, name, value)
	VALUES
('cbbc65de-784d-41ea-9b6a-57d13c77422e', 'Cliente', '2');

/*INSERT INTO
	contact (id, name, email, phone)
VALUES
	('3787df98-37ef-42e0-be0d-50089fdcadbb', 'Rafael Ulisses', 'ruds.devel@gmail.com', '+55981262079');

INSERT INTO
	contact (id, name, email, phone)
VALUES
	('e581fe0d-a1ec-4eb1-8526-aa3ad051d2a4', 'Aline Viviane', 'alineevivianee@gmail.com', '+55981262078');*/

INSERT INTO
	Users (id, password, name, nick, email, level)
VALUES
	('721e075b-82aa-4c24-9d40-30dddc3dc730', '91b4b89bb78847f5479eb71092d45376',
     'Aline Viviane', 'Vivi', 'alineevivianee@gmail.com', '0');
   	
INSERT INTO
	Users (id, password, name, nick, email, level)
VALUES
	('443298f9-89f3-4466-8e86-011f3c86cd0b', '91b4b89bb78847f5479eb71092d45376',
     'Alexandre Trinas', 'Chefe', 'trinas@cbes-cert.com.br', '0');

INSERT INTO
	Users (id, password, name, nick, email, level)
VALUES
	('4527f58a-c746-4b8e-812b-05511d6b5021', '1aa8bd4ded5272bc2fc4fe3e77d951f0',
     'Rafael Ulisses', 'Jay', 'ruds.devel@gmail.com', '1');

/*
INSERT INTO ship
  (
  	id, constructionYear, updateYear,
  	charteredForeign, hasPropulsion, solas,
  	name, hullCode, registrationNumber, callSign, imoNumber,
    shipowner
  )
VALUES
  (
  	'42ac47f8-4a59-41a3-9e57-9687df5f2b06', 1984, 1988,
    FALSE, TRUE, TRUE,
    'Simone', 'EPICA-2007', '20201221', 'Simone-42', '21122020',
    '4527f58a-c746-4b8e-812b-05511d6b5021'
  );

INSERT INTO MainTechinicalFeatures
  (
  	id,
    totalLength, hullLength, ruleLength, lpp, ligthDisplacement,
    heavyDisplacement, grossTonnage, moldedEnd, moldedMouth, countour,
    tonnageLength, deadweight, ship
  )
VALUES
  (
  	'352e7827-c4a8-4d93-a8cd-4684128741b4',
    50.4, 23.4, 21.5, 5.45, 12.1,
    89.0, 90.1, 2.7, 3.44, 66.7,
    4.2, 5.1,
    '42ac47f8-4a59-41a3-9e57-9687df5f2b06'
  );
*/


INSERT INTO ActivityType (id, name)
  VALUES ('8d09713d-52f3-4155-a083-5ec68a3639e3', 'Dragagem');

INSERT INTO ActivityType (id, name)
  VALUES ('41cdd660-b437-4e3b-a538-25ab467d1626', 'Monitoramento Ambiental');


INSERT INTO HullMaterialType (id, name)
  VALUES ('b3753863-2529-4ece-9b10-360646f26298', 'Aço');

INSERT INTO HullMaterialType (id, name)
  VALUES ('116b9ac4-00cc-4c04-967d-74edd27440e4', 'Madeira');


INSERT INTO NavigationAreaType (id, name)
  VALUES ('664c5acc-22fc-41d6-b184-cc5c3ce63ae5', 'Longo Curso');

INSERT INTO NavigationAreaType (id, name)
  VALUES ('4c3780d0-ddbf-4041-993d-546ad957edbb', 'Cabotagem');


INSERT INTO ShipType (id, name)
  VALUES ('2dbe9750-d8bb-4221-aaa6-52460d4fb6c2', 'Bote');

INSERT INTO ShipType (id, name)
  VALUES ('4c9944ba-e6fc-4c6c-bfbb-af3a1b0c16ae', 'Lancha');

INSERT INTO Port (id, name) VALUES ('f590f333-4cc6-4956-8413-59d4bf1d9c68', 'Pier Maua');
INSERT INTO Port (id, name) VALUES ('6744f0ac-92bc-4939-a298-c17d4689f2bc', 'Angra');
INSERT INTO Port (id, name) VALUES ('e24ba5e6-746c-47b7-9734-5fb03fb70bc1', 'Porto de Santos');
INSERT INTO Port (id, name) VALUES ('5ccb9073-257c-4c5a-9394-85d8987dcdfe', 'Niterói');
INSERT INTO Port (id, name) VALUES ('b171768d-6cb0-4d8a-a0f8-a1587e10932b', 'Salvador');

INSERT INTO
	Adress (id, adress, number, complement, city, state, country, postalCode)
  VALUES
  	('cb22d667-5477-4a9c-a2a7-914d5b010660', 'Rua do Laranjal', '5', '',
     'Rio de Janeiro', 'RJ', 'Brasil', '2155-820');

INSERT INTO
	Adress (id, adress, number, complement, city, state, country, postalCode)
  VALUES
  	('dc15c239-c41f-4820-ae93-432cad75d554', 'Av. Ipanema', '1257', 'Setor F',
     'Januário', 'RS', 'Brasil', '2135-120');

INSERT INTO
	Adress (id, adress, number, complement, city, state, country, postalCode)
  VALUES
  	('d4ab1de5-1517-4086-8457-d7b89e4c7ff2', 'Est. do Caminho', '50', '',
     'Paraná', 'PR', 'Brasil', '2155-820');

INSERT INTO
	Adress (id, adress, number, complement, city, state, country, postalCode)
  VALUES
  	('e6fb5706-17c0-4088-a161-516212ecc845', 'Rua do Bem-me-quer', '51', '',
     'Tamborim', 'LA', 'Brasil', '2558-989');
     
    
insert into 
	shipyard (id, "name", adress)
values
	('6fb67cf8-232c-4778-bc95-77fac90ffcd7', 'Estaleiro Teste', 'e6fb5706-17c0-4088-a161-516212ecc845');
	
insert into 
	shipyard (id, "name", adress)
values
	('625c62fc-c111-44ca-a85e-b21b3258f4f7', 'Estaleiro Arno', 'e6fb5706-17c0-4088-a161-516212ecc845');