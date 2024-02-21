import { CountryCodes } from "./country-codes.model";

export interface DrugResponse {
  name: string | null;
  destinationCountryCode: CountryCodes;
  sourceCountryCode: CountryCodes;
  translationCountryCode: CountryCodes;
  drugs: Drug[];
}

export interface Drug {
  sourceDrag: SourceDrug;
  alternativeDrugs: AlternativeDrug[];
}

export interface SourceDrug {
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

export interface AlternativeDrug {
  id: string;
  activeIngredients: {
    [key: string]: string;
  };
  countryCode: CountryCodes | null;
  tradeName: string | null;
  pharmaceuticalForm: string | null;
  routeOfAdministration: string | null;
  dosage: string | null;
  additionalInfo: {
    [key: string]: string;
  };
}
