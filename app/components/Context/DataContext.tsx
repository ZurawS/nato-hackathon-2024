import { createContext } from "react";

interface ContextModel {
  sourceCountry: string | undefined;
  currentCountry: string | undefined;
  appLoading: boolean;
  setCurrentCountry: (country: string) => void;
  setSourceCountry: (country: string) => void;
  setAppLoading: (isLoading: boolean) => void;
}

const DataContext = createContext<ContextModel>({
  sourceCountry: undefined,
  currentCountry: "POL", //country of operation
  appLoading: false,
  setCurrentCountry: (country: string) => {},
  setSourceCountry: (country: string) => {},
  setAppLoading: (isLoading: boolean) => {},
});

export default DataContext;
