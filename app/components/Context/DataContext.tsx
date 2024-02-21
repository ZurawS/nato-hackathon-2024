import { createContext } from "react";

interface ContextModel {
  sourceCountry: string | undefined;
  currentCountry: string | undefined;
  
  setCurrentCountry: (country: string) => void;
  setSourceCountry: (country: string) => void;
}

const DataContext = createContext<ContextModel>({
  sourceCountry: undefined,
  currentCountry: "POL", //country of operation
  setCurrentCountry: (country: string) => {},
  setSourceCountry: (country: string) => {},
});

export default DataContext;
