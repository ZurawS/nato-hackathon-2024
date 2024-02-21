import { CommonDrug } from "@/assets/models/drug.model";
import { createContext } from "react";

interface ContextModel {
  sourceCountry: string | undefined;
  currentCountry: string | undefined;
  appLoading: boolean;
  drugsToSend: CommonDrug[];
  setCurrentCountry: (country: string) => void;
  setSourceCountry: (country: string) => void;
  setAppLoading: (isLoading: boolean) => void;
  setDrugsToSend: (drugs: CommonDrug[]) => void;
}

const DataContext = createContext<ContextModel>({
  sourceCountry: undefined,
  currentCountry: "POL", //country of operation
  appLoading: false,
  drugsToSend: [],
  setDrugsToSend: (drugs: CommonDrug[]) => {},
  setCurrentCountry: (country: string) => {},
  setSourceCountry: (country: string) => {},
  setAppLoading: (isLoading: boolean) => {},
});

export default DataContext;
