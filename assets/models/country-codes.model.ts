export enum CountryCodes {
  POL = "Poland",
  ROU = "Romania",
  USA = "USA",
  FRA = "France",
  ITA = "Italy",
  HUN = "Hungary",
  ESP = "Spain",
  SVN = "Slovenia",
  CRO = "Croatia",
  TUR = "Turkey",
  GBR = "United Kingdom",
  LTU = "Lithuania",
  NLD = "Netherlands",
  BGR = "Bulgaria",
}

export enum CountryCodeMapping {
  pl = "POL",
  ro = "ROU",
  us = "USA",
  fr = "FRA",
  it = "ITA",
  gb = "GBR",
  hu = "HUN",
  es = "ESP",
  sv = "SVN",
  cr = "CRO",
  tr = "TUR",
  lt = "LTU",
  nl = "NLD",
  bg = "BGR",
}

export function getMappedCountryCode(countryCode: string): keyof typeof CountryCodes {
  return CountryCodeMapping[countryCode as keyof typeof CountryCodeMapping];
}

export function getMappedCountryCodeKey(countryCode: CountryCodeMapping): CountryCodes {
  const country = Object.entries(CountryCodes).find((c) => c[0] === countryCode);
  return country![1] as CountryCodes;
}
