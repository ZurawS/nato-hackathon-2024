import { createContext } from "react";

interface ContextModel {
  currentCountry: string | undefined;
  setCurrentCountry: (country: string) => void;
}

const DataContext = createContext<ContextModel>({
  currentCountry: "POL",
  setCurrentCountry: (country: string) => {},
});

export default DataContext;
