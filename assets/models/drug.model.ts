export interface Drug {
  name: string;
  destinationCountryCode: string,
  sourceCountryCode: string,
  drugs: DrugAlternatives[];
}

export interface DrugAlternatives {
  id: string;
  activeIngredients: {
    [key: string]: string;
  };
  countryCode: string;
  atcCodes: string[];
  tradeName: string;
  pharmaceuticalForm: string;
  routeOfAdministration: string;
  dosage: string;
  additionalInfo: {
    [key: string]: string;
  };
}