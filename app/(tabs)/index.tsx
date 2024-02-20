import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";

import i18n from "../../assets/translation/i18n";
import { useTranslation } from "react-i18next";

import DrugCard from "../components/DrugCard/DrugCard";
import { Select } from "@mobile-reality/react-native-select-pro";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DataContext from "../components/Context/DataContext";
import { useContext } from "react";
import { Drug } from "../../assets/models/drug.model";

const results: Drug[] = [
  {
    initialDrugName: "APAP",
    initialDrugIngredient: "Drug Ingredient",
    alternativeDrugs: [
      {
        drugName: "APAP1",
        dosage: "2,5mg",
        atcCodes: ["AAA12332"],
        routeOfAdministration: "AAA12332",
        pharmateuticalForm: "AAA12332",
        additionalInfo: {
          Ingredient: "Drug Ingredient",
          usageDescription: "Usage description",
        },
      },
      {
        drugName: "APAP2",
        dosage: "2,5mg",
        atcCodes: ["AAA12332"],
        routeOfAdministration: "AAA12332",
        pharmateuticalForm: "AAA12332",
        additionalInfo: {
          Ingredient: "Drug Ingredient",
          usageDescription: "Usage description",
        },
      },
      {
        drugName: "APAP3",
        dosage: "2,5mg",
        atcCodes: ["AAA12332"],
        routeOfAdministration: "AAA12332",
        pharmateuticalForm: "AAA12332",
        additionalInfo: {},
      },
      {
        drugName: "APAP4",
        dosage: "2,5mg",
        atcCodes: ["AAA12332"],
        routeOfAdministration: "AAA12332",
        pharmateuticalForm: "AAA12332",
        additionalInfo: {},
      },
      {
        drugName: "APAP5",
        dosage: "2,5mg",
        atcCodes: ["AAA12332"],
        routeOfAdministration: "AAA12332",
        pharmateuticalForm: "AAA12332",
        additionalInfo: {},
      },
      {
        drugName: "APAP6",
        dosage: "2,5mg",
        atcCodes: ["AAA12332"],
        routeOfAdministration: "AAA12332",
        pharmateuticalForm: "AAA12332",
        additionalInfo: {},
      },
    ],
  },
];

const data = [
  {
    label: "Option 1",
    value: "option1",
  },
  {
    label: "Option 2",
    value: "option2",
  },
  {
    label: "Option 3",
    value: "option3",
  },
  {
    label: "Option 4",
    value: "option4",
  },
];

// DO NOT DELETE THIS INITIALIZES I18N LIBRARY
const initI18n = i18n;

export default function Dashboard() {
  const { t } = useTranslation();
  const { currentCountry, setCurrentCountry } = useContext(DataContext);

  return (
    <View style={styles.container}>
      <View style={styles.selectContainer}>
        <Select options={data} searchable={true} />
      </View>
      <View style={styles.selectContainer}>
        <Select options={data} searchable={true} />
      </View>
      <KeyboardAwareScrollView style={styles.resultsContainer}>
        {results.map((result, index) => (
          <DrugCard
            key={`result-${result.initialDrugName}-${index}`}
            initialDrugName={result.initialDrugName}
            initialDrugIngredient={result.initialDrugIngredient}
            alternativeDrugs={result.alternativeDrugs}
          />
        ))}
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
  selectContainer: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 26,
    marginVertical: 20,
  },
  resultsContainer: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 20,
  },
});
