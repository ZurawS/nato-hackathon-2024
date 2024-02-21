import { CommonDrug } from "@/assets/models/drug.model";
import { createContext } from "react";
import { CountryCodeMapping, CountryCodes } from "../../../assets/models/country-codes.model";

interface ContextModel {
  sourceCountry: string | undefined;
  currentCountry: CountryCodeMapping | undefined;
  appLoading: boolean;
  drugsToSend: CommonDrug[];
  setCurrentCountry: (country: CountryCodeMapping) => void;
  setSourceCountry: (country: string) => void;
  setAppLoading: (isLoading: boolean) => void;
  setDrugsToSend: (drugs: CommonDrug[]) => void;
}

const DataContext = createContext<ContextModel>({
  sourceCountry: undefined,
  currentCountry: CountryCodeMapping.en,
  appLoading: false,
  drugsToSend: [],
  setDrugsToSend: (drugs: CommonDrug[]) => {},
  setCurrentCountry: (country: CountryCodeMapping) => {},
  setSourceCountry: (country: string) => {},
  setAppLoading: (isLoading: boolean) => {},
});

export default DataContext;
