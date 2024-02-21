import { StyleSheet, Text } from "react-native";
import { View } from "@/components/Themed";
import i18n from "../../assets/translation/i18n";
import { useTranslation } from "react-i18next";
import DrugCard from "../components/DrugCard/DrugCard";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DataContext from "../components/Context/DataContext";
import { useContext, useEffect, useState } from "react";
import { getCountryTradeNames } from "../api/api";
import SourceCountryPicker from "../components/SourceCountryPicker/SourceCountryPicker";
import SelectDrugPicker from "../components/SelectDrugPicker/SelectDrugPicker";
import AppLoadingIndicator from "../components/AppLoadingIndicator/AppLoadingIndicator";

// DO NOT DELETE THIS INITIALIZES I18N LIBRARY
const initI18n = i18n;

export default function Dashboard() {
  const { t } = useTranslation();
  const { currentCountry, setCurrentCountry } = useContext(DataContext);
  const { sourceCountry } = useContext(DataContext);
  const {setAppLoading} = useContext(DataContext);
  const [selectCountryDrugNames, setSelectCountryDrugNames] = useState<{ label: string; value: string }[]>([]);

  // useEffect(() => {
  // getAlternativeDrugList();
  // }, []);

  function getCountryCodes() {
    if (!sourceCountry) {
      return;
    }
    setAppLoading(true);
    getCountryTradeNames(sourceCountry)
      .then((data) => {
        const selectedCountryNames = data.map((name) => ({ label: name, value: name }));
        setSelectCountryDrugNames([...selectedCountryNames]);
        setAppLoading(false);
        // console.log(selectedCountryNames, selectCountryDrugNames);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getCountryCodes();
  }, [sourceCountry])

  return (
    <View style={styles.container}>
      <View style={styles.selectSrcCountryContainer}>
        <View style={styles.selectSrcCountryTextContainer}>
          <Text style={styles.selectSrcCountryText}>Source Country:</Text>
          <Text style={styles.selectSrcCountryDescText}>Select Source Country of Medicine</Text>
        </View>
          <SourceCountryPicker />
      </View>
      {selectCountryDrugNames.length > 0 ?
        <SelectDrugPicker key={"key1"} selectCountryDrugNames={[...selectCountryDrugNames]} /> :
        <SelectDrugPicker key={"key2"} selectCountryDrugNames={[]} />}
      <KeyboardAwareScrollView style={styles.resultsContainer}>
        {/* //TODO REPLACE WITH API */}
        {/* {results.map((result, index) => (
          <DrugCard
            key={`result-${result.initialDrugName}-${index}`}
            initialDrugName={result.initialDrugName}
            initialDrugIngredient={result.initialDrugIngredient}
            alternativeDrugs={result.alternativeDrugs}
          />
        ))} */}
      </KeyboardAwareScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10
  },
  selectSrcCountryContainer: {
    flex: 0,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 26,
  },
  selectSrcCountryTextContainer: {
    flex: 0,
    justifyContent: "center",
  },
  selectSrcCountryText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  selectSrcCountryDescText: {
    fontSize: 10,
    color: "grey",
  },
  selectContainer: {
    alignItems: "center",
    paddingHorizontal: 26,
    marginVertical: 16,
  },
  resultsContainer: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 20,
  },
});
