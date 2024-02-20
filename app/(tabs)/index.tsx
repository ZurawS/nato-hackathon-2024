import { StyleSheet } from "react-native";

import { View, Text } from "@/components/Themed";

import i18n from "../../assets/translation/i18n";
import { useTranslation } from "react-i18next";

import DrugCard from "../components/DrugCard/DrugCard";
import { Select } from "@mobile-reality/react-native-select-pro";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DataContext from "../components/Context/DataContext";
import { useContext } from "react";

const results = [
  {
    drugName: "APAP1",
    dosage: "2mg",
    description: "APAP to lek na ogólnie przyjęty ból, np. ból dupy",
  },
  {
    drugName: "APAP2",
    dosage: "2,5mg",
    description: "APAP to lek na ogólnie przyjęty ból, np. ból dupy",
  },
  {
    drugName: "APAP3",
    dosage: "10mg",
    description: "APAP to lek na ogólnie przyjęty ból, np. ból dupy",
  },
  {
    drugName: "APAP4",
    dosage: "10mg",
    description: "APAP to lek na ogólnie przyjęty ból, np. ból dupy",
  },
  {
    drugName: "APAP5",
    dosage: "10mg",
    description: "APAP to lek na ogólnie przyjęty ból, np. ból dupy",
  },
  {
    drugName: "APAP6",
    dosage: "10mg",
    description: "APAP to lek na ogólnie przyjęty ból, np. ból dupy",
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

export default function TabOneScreen() {
  const { t } = useTranslation();
  //prettier-ignore
  const { currentCountry, setCurrentCountry } = useContext(DataContext);

  return (
    <View style={styles.container}>
      <View style={styles.selectContainer}>
        <Select options={data} searchable={true} />
      </View>
      <View style={styles.selectContainer}>
        <Select options={data} searchable={true} />
      </View>
      <View>
        <Text>{i18n.languages}</Text>
      </View>
      <KeyboardAwareScrollView style={styles.resultsContainer}>
        {results.map((result) => (
          <DrugCard
            key={result.drugName}
            drugName={result.drugName}
            dosage={result.dosage}
            description={result.description}
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
