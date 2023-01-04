CREATE TABLE Company
(
  id uuid NOT NULL,
  name text NOT NULL,
  fcemNumber text NOT NULL,
  validity text NOT NULL,
  maindivers integer  NOT NULL,
  reservedivers integer  NOT NULL,
  contacts jsonb,

  companyowner uuid DEFAULT NULL,

  CONSTRAINT fk_company_user FOREIGN KEY (companyowner)
  	REFERENCES Users (id) ON DELETE NO ACTION,

  CONSTRAINT company_pkey PRIMARY KEY (id)
);

CREATE TABLE ScubaSystem
(
  id uuid NOT NULL,
  name text NOT NULL,
  fcemNumber text NOT NULL,
  validity text NOT NULL,
  maindivers integer  NOT NULL,
  reservedivers integer  NOT NULL,
  contacts jsonb,

  companyowner uuid DEFAULT NULL,

  CONSTRAINT fk_company_user FOREIGN KEY (companyowner)
  	REFERENCES Users (id) ON DELETE NO ACTION,

  CONSTRAINT company_pkey PRIMARY KEY (id)
);