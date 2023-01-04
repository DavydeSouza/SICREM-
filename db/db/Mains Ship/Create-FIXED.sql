CREATE TABLE Level
(
  id uuid NOT NULL,
  name text NOT NULL,
  value text,
  CONSTRAINT level_pkey PRIMARY KEY (id)
);

/*---------------------------------------------------------------------------*/

CREATE TABLE Users
(
  id uuid NOT NULL,
  password character varying(150) NOT NULL,
  name text NOT NULL,
--  nick text,
  clientid text,
--  register text,
  email text NOT NULL,
  level text not null,
  contacts jsonb,
--  adress jsonb,
  active BOOLEAN DEFAULT TRUE,

  CONSTRAINT unique_email_user UNIQUE (email),
  CONSTRAINT unique_clientid_user UNIQUE (clientid),

  CONSTRAINT user_pkey PRIMARY KEY (id)
);

CREATE TABLE Company (
 id uuid NOT NULL,
 name text NOT NULL,
 FCEM text,
 fcemExpiration TIMESTAMP,
 dtInsert TIMESTAMP NOT NULL,
 dtUpdate TIMESTAMP,
 register text NOT NULL,
 active bool NOT null default true,
 address JSONB,
 mainDivesQtd INT,
 reservesDivesQtd INT,
 "user" uuid NOT NULL,
 
 CONSTRAINT fk_company_user FOREIGN KEY ("user")
  	REFERENCES Users (id) ON DELETE NO ACTION,
 
 CONSTRAINT company_pkey PRIMARY KEY (id)
);

/*---------------------------------------------------------------------------*/

CREATE TABLE ActivityType
(
  id uuid NOT NULL,
  name text NOT NULL,
  -- values jsonb NOT NULL,
  CONSTRAINT activity_type_pkey PRIMARY KEY (id)
);

CREATE TABLE NavigationAreaType
(
  id uuid NOT NULL,
  name text NOT NULL,
  -- values jsonb NOT NULL,
  CONSTRAINT navigation_area_type_pkey PRIMARY KEY (id)
);

CREATE TABLE ShipType
(
  id uuid NOT NULL,
  name text NOT NULL,
  CONSTRAINT ship_type_pkey PRIMARY KEY (id)
);

CREATE TABLE HullMaterialtype
(
  id uuid NOT NULL,
  name text NOT NULL,
  CONSTRAINT material_type_pkey PRIMARY KEY (id)
);

CREATE TABLE Port
(
  id uuid NOT NULL,
  name text NOT NULL,
  
  adress jsonb,

  CONSTRAINT port_pkey PRIMARY KEY (id)
);

CREATE TABLE Shipyard
(
  id uuid NOT NULL,
  name text NOT NULL,
  
  adress jsonb,

  CONSTRAINT shipyard_pkey PRIMARY KEY (id)
);

CREATE TABLE GeneralTechinicalFeatures --Before ship
(
  id uuid NOT NULL,
  activitys jsonb NOT NULL,
  navigationareas jsonb NOT NULL,
  propulsionAndPower jsonb,
  rtc jsonb,
  
  hullMaterial uuid,
  shipyard uuid,
  shiptype uuid,
  operationPort uuid,
  registrationPort uuid,

  CONSTRAINT fk_gtf_hull_material FOREIGN KEY (hullMaterial)
  	REFERENCES HullMaterialType (id) ON DELETE NO ACTION,

  CONSTRAINT fk_gtf_shipyard FOREIGN KEY (shipyard)
  	REFERENCES Shipyard (id) ON DELETE NO ACTION,

  CONSTRAINT fk_gtf_shiptype FOREIGN KEY (shiptype)
  	REFERENCES ShipType (id) ON DELETE NO ACTION,
  
  CONSTRAINT fk_gtf_operation_port FOREIGN KEY (operationPort)
  	REFERENCES Port (id) ON DELETE NO ACTION,

  CONSTRAINT fk_gtf_registration_port FOREIGN KEY (registrationPort)
  	REFERENCES Port (id) ON DELETE NO ACTION,
  	
  CONSTRAINT gtf_pkey PRIMARY KEY (id)
);

/*---------------------------------------------------------------------------*/

CREATE TABLE MainTechinicalFeatures --Before Ship
(
  id uuid NOT NULL,
  totalLength double precision NOT NULL,
  hullLength double precision NOT NULL,
  ruleLength double precision NOT NULL,
  lpp double precision NOT NULL,
  ligthDisplacement double precision NOT NULL,
  heavyDisplacement double precision NOT NULL,
  grossTonnage int4 NOT NULL,
  netTonnage int4 NOT NULL,
  moldedEnd double precision NOT NULL,
  moldedMouth double precision NOT NULL,
  countour double PRECISION DEFAULT NULL,
  tonnageLength double PRECISION DEFAULT NULL,
  deadweight double precision NOT NULL,

  drafts jsonb NOT NULL,
  freeBoards jsonb NOT NULL,
  souls jsonb NOT NULL,

  CONSTRAINT mtf_pkey PRIMARY KEY (id)
);

/*---------------------------------------------------------------------------*/

/*CREATE TABLE Shipowner
(
  id uuid NOT NULL,
  name text NOT NULL,
  register text NOT NULL,
  address jsonb,
  active bool not null default true,
  -- clientid text NOT NULL,
  "user" uuid NOT NULL,

  CONSTRAINT unique_name_shipowner UNIQUE (name),
  
  CONSTRAINT fk_shipowner_user FOREIGN KEY ("user")
  	REFERENCES Users (id) ON DELETE NO ACTION,

  CONSTRAINT shipowner_pkey PRIMARY KEY (id)
);*/

CREATE TABLE Ship
(
  id uuid NOT NULL,
  constructionYear integer NOT NULL,
  updateYear integer,
  charteredForeign bool NOT NULL,
  hasPropulsion bool NOT NULL,
  solas bool NOT NULL,
  name text NOT NULL,
  hullCode text NOT NULL,
  registrationNumber text NOT NULL,
  callSign text NOT NULL,
  imoNumber text NOT NULL,
  cbesid TEXT NOT NULL,
  otherinfos jsonb DEFAULT NULL,

  gtf uuid DEFAULT NULL,
  mtf uuid DEFAULT NULL,
  shipowner uuid DEFAULT NULL,
  
  CONSTRAINT unique_ship_cbesid UNIQUE (cbesid),

  CONSTRAINT fk_ship_gtf FOREIGN KEY (gtf)
  	REFERENCES GeneralTechinicalFeatures (id) ON DELETE CASCADE,
  	
  CONSTRAINT fk_ship_mtf FOREIGN KEY (mtf)
  	REFERENCES MainTechinicalFeatures (id) ON DELETE CASCADE,
  	
  CONSTRAINT fk_ship_shipowner FOREIGN KEY (shipowner)
  	REFERENCES Company (id) ON DELETE NO ACTION,
  	
  CONSTRAINT ship_pkey PRIMARY KEY (id)
);

/*---------------------------------------------------------------------------*/


-- CREATE EXTENSION unaccent;