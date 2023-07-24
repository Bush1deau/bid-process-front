export interface TCPartsCountryBidProductCategory {
  id?:              ID;
  country?:         Country;
  bid?:             Bid;
  productCategory?: Country;
  tcparts?:         Country;
}

export interface Bid {
  id?:                       number;
  name?:                     string;
  customerName?:             string;
  opportunityType?:          string;
  opportunityMargin?:        number;
  contractStart?:            string;
  pricingModel?:             string;
  scopeQuery?:               string;
  bidAndTendersRead?:        string;
  additionalContent?:        string;
  attachements?:             string;
  hibernateLazyInitializer?: HibernateLazyInitializer;
  contractDuration?:         number;
}

export interface HibernateLazyInitializer {
}

export interface Country {
  id?:                       number;
  name?:                     string;
  hibernateLazyInitializer?: HibernateLazyInitializer;
}

export interface ID {
  idTCParts?:         number;
  idCountry?:         number;
  idBid?:             number;
  idProductCategory?: number;
}
