CREATE TABLE Certification (
 id uuid NOT NULL,
 cbesid text NOT NULL,
 active bool default true,
 name text NOT NULL,
 "type" JSONB  NOT NULL,
 expiration TIMESTAMP,
 status bool default true,
 maxDepth INT,
 company UUID NOT NULL,
 issue  TIMESTAMP,
 dtInsert TIMESTAMP NOT NULL,
 dtUpdate TIMESTAMP,
 
 CONSTRAINT fk_certification_company FOREIGN KEY (company)
  	REFERENCES Company (id) ON DELETE NO ACTION,
  	
 CONSTRAINT certification_pkey PRIMARY KEY (id)
);

CREATE TABLE System (
 id uuid NOT NULL,
 depth INT,
 active bool default true,
 cbesid TEXT NOT NULL,
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
 dtInsert TIMESTAMP NOT NULL,
 dtUpdate TIMESTAMP,
 certification UUID NOT NULL,
 
 CONSTRAINT unique_system_cbesid UNIQUE (cbesid),
 
 CONSTRAINT fk_system_certification FOREIGN KEY (certification)
  	REFERENCES Certification (id) ON DELETE NO ACTION,
  	
 CONSTRAINT system_pkey PRIMARY KEY (id)
);

-- SET CONSTRAINTS ALL DEFERRED;

/*CREATE TABLE _Certification (
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
);*/