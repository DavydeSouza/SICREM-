
CREATE TABLE Adress
(
  id uuid NOT NULL,
  country text NOT NULL,
  state text NOT NULL,
  city text NOT NULL,
  adress text NOT NULL,
  number text,
  postalCode text,
  complement text,
  CONSTRAINT adress_pkey PRIMARY KEY (id)
);

CREATE TABLE Level
(
  id uuid NOT NULL,
  name text NOT NULL,
  value text,
  CONSTRAINT level_pkey PRIMARY KEY (id)
);

/*CREATE TABLE Contact
(
  id uuid NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  CONSTRAINT contact_pkey PRIMARY KEY (id)
);*/

/*CREATE TABLE Contact
(
  id uuid NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone jsonb NOT NULL,
  cell jsonb NOT NULL,
  CONSTRAINT contact_pkey PRIMARY KEY (id)
);*/

/*---------------------------------------------------------------------------*/

CREATE TABLE Users
(
  id uuid NOT NULL,
  password character varying(150) NOT NULL,
  name text NOT NULL,
  nick text,
  clientid text,
  register text,
  email text NOT NULL,
  level text not null,
  contacts jsonb,
  active BOOLEAN DEFAULT TRUE,
  -- level uuid not null,
  -- contact uuid default null,

  CONSTRAINT unique_email_user UNIQUE (email),

  CONSTRAINT user_pkey PRIMARY KEY (id)
  
  /*CONSTRAINT fk_user_level FOREIGN KEY(level)
      REFERENCES Level (id) ON DELETE NO ACTION,*/

  -- A tabela Usuários subistituirá ShipOwner
  /*CONSTRAINT fk_user_contact FOREIGN KEY (contact)
	REFERENCES Contact (id) ON DELETE CASCADE*/
);

/*---------------------------------------------------------------------------*/

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

  shipowner uuid DEFAULT NULL,

  CONSTRAINT fk_ship_user FOREIGN KEY (shipowner)
  	REFERENCES Users (id) ON DELETE NO ACTION,

  CONSTRAINT ship_pkey PRIMARY KEY (id)
);

/*CREATE TABLE RadiotelephoneCoverage
(
  id uuid NOT NULL,
  -- name text NOT NULL,
  values jsonb NOT NULL,
  
  ship uuid NOT NULL,
  
  CONSTRAINT fk_rtc_ship FOREIGN KEY (ship)
  	REFERENCES Ship (id) ON DELETE CASCADE,
  
  CONSTRAINT radio_pkey PRIMARY KEY (id)
);*/

/*CREATE TABLE PropulsionAndPower
(
  id uuid NOT NULL,
  manufacturer text NOT NULL,
  model text NOT NULL,
  mcp text NOT NULL,
  serial_number text NOT NULL,
  power double precision,
  
  ship uuid NOT NULL,

  CONSTRAINT fk_prop_power_ship FOREIGN KEY (ship)
  	REFERENCES Ship (id) ON DELETE CASCADE,

  CONSTRAINT propulsion_pkey PRIMARY KEY (id)
);*/

CREATE TABLE OtherInfos
(
  id uuid NOT NULL,
  cargoOnDeck bool NOT NULL,
  tank bool NOT NULL,
  toxicChemicalsOrGas bool NOT NULL,
  glowLess60 bool NOT NULL,
  dangerousCargo bool NOT NULL,
  standBy bool NOT NULL,
  convoy bool NOT NULL,
  crossingsOperator bool NOT NULL,

  ship uuid NOT NULL,

  CONSTRAINT fk_other_infos_ship FOREIGN KEY (ship)
  	REFERENCES Ship (id) ON DELETE CASCADE,


  CONSTRAINT other_infos_pkey PRIMARY KEY (id)
);

/*---------------------------------------------------------------------------*/


CREATE TABLE MainTechinicalFeatures --After Ship
(
  id uuid NOT NULL,
  totalLength double precision NOT NULL,
  hullLength double precision NOT NULL,
  ruleLength double precision NOT NULL,
  lpp double precision NOT NULL,
  ligthDisplacement double precision NOT NULL,
  heavyDisplacement double precision NOT NULL,
  grossTonnage double precision NOT NULL,
  moldedEnd double precision NOT NULL,
  moldedMouth double precision NOT NULL,
  countour double precision NOT NULL,
  tonnageLength double precision NOT NULL,
  deadweight double precision NOT NULL,

  ship uuid NOT NULL,

  CONSTRAINT fk_mtf_ship FOREIGN KEY (ship)
  	REFERENCES Ship (id) ON DELETE CASCADE,

  CONSTRAINT mtf_pkey PRIMARY KEY (id)
);

CREATE TABLE Draft
(
  id uuid NOT NULL,
  av double precision NOT NULL,
  ar double precision NOT NULL,
  average double precision NOT NULL,
  isLigth bool DEFAULT TRUE,
  
  mtf uuid NOT NULL,

  CONSTRAINT fk_draft_mtf FOREIGN KEY (mtf)
  	REFERENCES MainTechinicalFeatures (id) ON DELETE CASCADE,

  CONSTRAINT draft_pkey PRIMARY KEY (id)
);

CREATE TABLE Souls
(
  id uuid NOT NULL,
  qtdPaxCabin8Bunks integer NOT NULL,
  qtdOtherPax integer NOT NULL,
  qtdUnmannedProfessionals integer NOT NULL,
  crew integer NOT NULL,
  
  mtf uuid NOT NULL,

  CONSTRAINT fk_souls_mtf FOREIGN KEY (mtf)
  	REFERENCES MainTechinicalFeatures (id) ON DELETE CASCADE,

  CONSTRAINT souls_pkey PRIMARY KEY (id)
);

CREATE TABLE FreeBoard
(
  id uuid NOT NULL,
  openSeaSize double precision,
  isDraft bool NOT NULL,
  areas jsonb NOT NULL,
  
  mtf uuid NOT NULL,

  CONSTRAINT fk_free_board_mtf FOREIGN KEY (mtf)
  	REFERENCES MainTechinicalFeatures (id) ON DELETE CASCADE,

  CONSTRAINT free_board_pkey PRIMARY KEY (id)
);

/*CREATE TABLE FreeBoardArea
(
  id uuid NOT NULL,
  areaOrder text,
  size double precision NOT NULL,
  
  freeBoard uuid NOT NULL,

  CONSTRAINT fk_area_free_board FOREIGN KEY (freeBoard)
  	REFERENCES FreeBoard (id) ON DELETE CASCADE,

  CONSTRAINT area_pkey PRIMARY KEY (id)
);*/

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
  
  adress uuid,

  CONSTRAINT port_pkey PRIMARY KEY (id),

  CONSTRAINT fk_port_adress FOREIGN KEY (adress)
  	REFERENCES Adress (id) ON DELETE NO ACTION
);

CREATE TABLE Shipyard
(
  id uuid NOT NULL,
  name text NOT NULL,
  
  adress uuid,

  CONSTRAINT shipyard_pkey PRIMARY KEY (id),

  CONSTRAINT fk_shipyard_adress FOREIGN KEY (adress)
  	REFERENCES Adress (id) ON DELETE CASCADE
);

CREATE TABLE GeneralTechinicalFeatures --After ship
(
  id uuid NOT NULL,
  hullMaterial uuid,
  operationPort uuid,
  registrationPort uuid,
  shipyard uuid,
  shiptype uuid,
  ship uuid NOT NULL,
  activitys jsonb NOT NULL,
  navigationareas jsonb NOT NULL,
  propulsionAndPower jsonb,
  rtc jsonb,

  CONSTRAINT gtf_pkey PRIMARY KEY (id),

  CONSTRAINT fk_gtf_hull_material FOREIGN KEY (hullMaterial)
  	REFERENCES HullMaterialType (id) ON DELETE NO ACTION,

  CONSTRAINT fk_gtf_operation_port FOREIGN KEY (operationPort)
  	REFERENCES Port (id) ON DELETE NO ACTION,

  CONSTRAINT fk_gtf_registration_port FOREIGN KEY (registrationPort)
  	REFERENCES Port (id) ON DELETE NO ACTION,

  CONSTRAINT fk_gtf_shipyard FOREIGN KEY (shipyard)
  	REFERENCES Shipyard (id) ON DELETE NO ACTION,

  CONSTRAINT fk_gtf_shiptype FOREIGN KEY (shiptype)
  	REFERENCES ShipType (id) ON DELETE NO ACTION,

  CONSTRAINT fk_gtf_ship FOREIGN KEY (ship)
  	REFERENCES Ship (id) ON DELETE CASCADE
);

/*CREATE TABLE ActivityType_Gtf
(
  activityType uuid NOT NULL,
  gtf uuid NOT NULL,

  CONSTRAINT fk_gtf_activity FOREIGN KEY (gtf)
  	REFERENCES GeneralTechinicalFeatures (id) ON DELETE CASCADE,

  CONSTRAINT fk_activity_gtf FOREIGN KEY (activityType)
  	REFERENCES ActivityType (id) ON DELETE CASCADE
);*/

/*CREATE TABLE NavigationAreaType_Gtf
(
  gtf uuid NOT NULL,
  navigationAreaType uuid NOT NULL,

  CONSTRAINT fk_gtf_navigation FOREIGN KEY (gtf)
  	REFERENCES GeneralTechinicalFeatures (id) ON DELETE CASCADE,

  CONSTRAINT fk_navigation_gtf FOREIGN KEY (navigationAreaType)
  	REFERENCES NavigationAreaType (id) ON DELETE CASCADE
);*/

/*---------------------------------------------------------------------------*/

-- CREATE EXTENSION unaccent;