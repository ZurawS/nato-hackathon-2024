export enum CountryCodes {
  POL = "Poland",
  ROU = "Romania",
  USA = "USA",
  FRA = "France",
  ITA = "Italy",
  GBE = "United Kingdom",
}

export enum CountryCodeMapping {
  pl = "POL",
  ro = "ROU",
  us = "USA",
  fr = "FRA",
  it = "ITA",
  gb = "GBE",
}

export function getMappedCountryCode(countryCode: string): keyof typeof CountryCodes {
  return CountryCodeMapping[countryCode as keyof typeof CountryCodeMapping];
}
