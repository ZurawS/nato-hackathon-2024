import { CountryCodes } from "./country-codes.model";

export interface DrugResponse {
  name: string | null;
  destinationCountryCode: CountryCodes;
  sourceCountryCode: CountryCodes;
  translationCountryCode: CountryCodes;
  drugs: Drug[];
}

export interface Drug {
  sourceDrug: SourceDrug;
  alternativeDrugs: AlternativeDrug[];
}

export interface CommonDrug {
  id: string;
  activeIngredients: {
    [key: string]: string;
  };
  countryCode: CountryCodes | null;
  tradeName: string;
  pharmaceuticalForm: string;
  routeOfAdministration: string;
  dosage: string;
  additionalInfo: {
    [key: string]: string;
  };
}

export interface SourceDrug extends CommonDrug {
}

export interface AlternativeDrug extends CommonDrug {
}
