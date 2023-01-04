CREATE TABLE Company (
 id uuid NOT NULL,
 name text NOT NULL,
 FCEM text,
 fcemExpiration DATE NOT NULL,
 register text NOT NULL,
 address JSONB,
 mainDivesQtd INT,
 reservesDivesQtd INT,
 clientid text NOT NULL,
 
 CONSTRAINT fk_company_user FOREIGN KEY (clientid)
  	REFERENCES Users (clientid) ON DELETE NO ACTION,
 
 CONSTRAINT company_pkey PRIMARY KEY (id)
);

CREATE TABLE System (
 id uuid NOT NULL,
 depth INT,
 generalSystemItems JSONB NOT NULL,
 compressors JSONB NOT NULL,
 masksHelmets JSONB NOT NULL,
 compressedsAirTanks JSONB NOT NULL,
 cylindersFrames JSONB,
 comunicators JSONB,
 umbilicals JSONB,
 emergencyCylinders JSONB,
 controlPanels JSONB,
 signets JSONB,
 winchs JSONB,
 hyperbaricsChambers JSONB,
 baskets JSONB,
 porticos JSONB,
 company UUID NOT NULL,
 
 CONSTRAINT fk_system_company FOREIGN KEY (company)
  	REFERENCES Company (id) ON DELETE NO ACTION,
  	
 CONSTRAINT system_pkey PRIMARY KEY (id)
);

CREATE TABLE _Certification (
 id uuid NOT NULL,
 cbesid text NOT NULL,
 cssm20Meters bool,
 cssm30Meters bool,
 cssm30MetersDecompressionStop bool,
 cssmBetween30And50 bool,
 cssmBetween50And90 bool,
 cssmBetween90And300 bool,
 hyperbaricChamberDeclarationConformity bool,
 basketsSignetsDeclarationConformity bool,
 system UUID NOT NULL,
 
 CONSTRAINT fk__certification_system FOREIGN KEY (system)
  	REFERENCES System (id) ON DELETE NO ACTION,
  	
 CONSTRAINT _certification_pkey PRIMARY KEY (id)
);

CREATE TABLE Certification (
 id uuid NOT NULL,
 cbesid text NOT NULL,
 type JSONB  NOT NULL,
 system UUID NOT NULL,
 
 CONSTRAINT fk_certification_system FOREIGN KEY (system)
  	REFERENCES System (id) ON DELETE NO ACTION,
  	
 CONSTRAINT certification_pkey PRIMARY KEY (id)
);