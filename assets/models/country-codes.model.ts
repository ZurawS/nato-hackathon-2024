export enum CountryCodes {
  POL = "Poland",
  ROU = "Romania",
  USA = "USA",
  FRA = "France",
  ITA = "Italy",
  HUN = "Hungary",
  ESP = "Spain",
  SVN = "Slovenia",
  TUR = "Turkey",
  GBR = "United Kingdom",
  LTU = "Lithuania",
  NLD = "Netherlands",
  BGR = "Bulgaria",
  BEL = "Belgium",
  PRT = "Portugal",
  EST = "Estonia",
  LVA = "Latvia",
  HRV = "Croatia",
  CZE = "Czech Republic",
  NOR = "Norway",
  ISL = "Iceland",
}

export enum CountryCodeMapping {
  en = "GBR",
  bg = "BGR",
  es = "ESP",
  fr = "FRA",
  hu = "HUN",
  it = "ITA",
  lt = "LTU",
  nl = "NLD",
  pl = "POL",
  ro = "ROU",
  sv = "SVN",
  tr = "TUR",
  us = "USA",
  bl = "BEL",
  pt = "PRT",
  et = "EST",
  lv = "LVA",
  hv = "HRV",
  cz = "CZE",
  no = "NOR",
  is = "ISL",
}

export function getMappedCountryCode(countryCode: string): keyof typeof CountryCodes {
  return CountryCodeMapping[countryCode as keyof typeof CountryCodeMapping];
}

export function getMappedCountryCodeKey(countryCode: CountryCodeMapping): CountryCodes {
  const country = Object.entries(CountryCodes).find((c) => c[0] === countryCode);
  return country![1] as CountryCodes;
}
