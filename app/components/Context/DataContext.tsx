import { CommonDrug } from "@/assets/models/drug.model";
import { infoToSend } from "@/assets/models/infoTosend";
import { createContext } from "react";

interface ContextModel {
  sourceCountry: string | undefined;
  currentCountry: string | undefined;
  appLoading: boolean;
  drugsToSend: CommonDrug[];
  infoToSend: infoToSend;
  setCurrentCountry: (country: string) => void;
  setSourceCountry: (country: string) => void;
  setAppLoading: (isLoading: boolean) => void;
  setDrugsToSend: (drugs: CommonDrug[]) => void;
  setInfoToSend: (info: infoToSend) => void;
}

const DataContext = createContext<ContextModel>({
  sourceCountry: undefined,
  currentCountry: "NLD", //country of operation
  appLoading: false,
  drugsToSend: [],
  infoToSend: {
    name: "",
    id: "",
    additionalInfo: "",
    drugsIds: [],
  },
  setDrugsToSend: (drugs: CommonDrug[]) => {},
  setCurrentCountry: (country: string) => {},
  setSourceCountry: (country: string) => {},
  setAppLoading: (isLoading: boolean) => {},
  setInfoToSend: (info: infoToSend) => {},
});

export default DataContext;
