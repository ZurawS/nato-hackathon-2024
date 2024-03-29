import { CommonDrug } from "@/assets/models/drug.model";
import { createContext } from "react";
import { CountryCodeMapping, CountryCodes } from "../../../assets/models/country-codes.model";
import { infoToSend } from "@/assets/models/infoTosend";

interface ContextModel {
  sourceCountry: string | undefined;
  currentCountry: CountryCodeMapping | undefined;
  appLoading: boolean;
  drugsToSend: CommonDrug[];
  infoToSend: infoToSend;
  offlineMode: boolean;
  setCurrentCountry: (country: CountryCodeMapping) => void;
  setSourceCountry: (country: string) => void;
  setAppLoading: (isLoading: boolean) => void;
  setDrugsToSend: (drugs: CommonDrug[]) => void;
  setInfoToSend: (info: infoToSend) => void;
  clearInfoToSend: () => void;
  setOfflineMode: (mode: boolean) => void;
}

const DataContext = createContext<ContextModel>({
  sourceCountry: undefined,
  currentCountry: CountryCodeMapping.en,
  appLoading: false,
  drugsToSend: [],
  infoToSend: {
    name: "",
    id: "",
    additionalInfo: "",
    drugsIds: [],
  },
  offlineMode: false,
  setDrugsToSend: (drugs: CommonDrug[]) => {},
  setCurrentCountry: (country: CountryCodeMapping) => {},
  setSourceCountry: (country: string) => {},
  setAppLoading: (isLoading: boolean) => {},
  setInfoToSend: (info: infoToSend) => {},
  clearInfoToSend: () => {},
  setOfflineMode: (mode: boolean) => {},
});

export default DataContext;
