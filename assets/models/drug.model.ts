export interface Drug {
  initialDrugName: string;
  initialDrugIngredient: string;
  alternativeDrugs: DrugAlternatives[];
}

export interface DrugAlternatives {
  drugName: string;
  dosage: string;
  atcCodes: string[];
  routeOfAdministration: string;
  pharmateuticalForm: string;
  additionalInfo: {
    [key: string]: string;
  };
}
