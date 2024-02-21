import { StyleSheet, Text } from "react-native";
import { View } from "@/components/Themed";
import i18n from "../../assets/translation/i18n";
import { useTranslation } from "react-i18next";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DataContext from "../components/Context/DataContext";
import { useContext, useEffect, useState } from "react";
import SourceCountryPicker from "../components/SourceCountryPicker/SourceCountryPicker";
import SelectDrugPicker from "../components/SelectDrugPicker/SelectDrugPicker";
import AppLoadingIndicator from "../components/AppLoadingIndicator/AppLoadingIndicator";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { CountryCodes, getMappedCountryCode } from "../../assets/models/country-codes.model";

// DO NOT DELETE THIS INITIALIZES I18N LIBRARY
const initI18n = i18n;

export default function Dashboard() {
  const { t } = useTranslation();
  const { sourceCountry } = useContext(DataContext);
  const { setAppLoading } = useContext(DataContext);
  const [selectCountryDrugNames, setSelectCountryDrugNames] = useState<{ label: string; value: string }[]>([]);

  const { data, isFetching } = useQuery<string[], AxiosError>(
    ["countryCodes", sourceCountry],
    () => getCountryDrugNames(sourceCountry || getMappedCountryCode(i18n.language)),
    {
      onSuccess: (availableDrugs: string[]) => {
        setAppLoading(false);
        console.log("here", availableDrugs);
        const newOptions = availableDrugs.map((name) => ({ label: name, value: name }));
        setSelectCountryDrugNames(() => Object.assign([...newOptions]));
      },
      enabled: !!sourceCountry,
    }
  );

  return (
    <View style={styles.container}>
      <View style={styles.selectSrcCountryContainer}>
        <View style={styles.selectSrcCountryTextContainer}>
          <Text style={styles.selectSrcCountryText}>Source Country:</Text>
          <Text style={styles.selectSrcCountryDescText}>Select Source Country of Medicine</Text>
        </View>
        <SourceCountryPicker />
      </View>
      {selectCountryDrugNames.length > 0 ? (
        <SelectDrugPicker key={"select"} selectCountryDrugNames={[...selectCountryDrugNames]} />
      ) : (
        <SelectDrugPicker key={"select1"} selectCountryDrugNames={[]} />
      )}
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
