import { ScrollView, StyleSheet, TextInput } from "react-native";

import { Text, View } from "@/components/Themed";

import i18n from "../../assets/translation/i18n";
import { useTranslation } from "react-i18next";

import DrugCard from "../components/DrugCard/DrugCard";

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
];

const initI18n = i18n;

export default function TabOneScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <TextInput placeholder={t("search")} onChangeText={(text) => {}} />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ScrollView>
        {results.map((result) => (
          <DrugCard
            key={result.drugName}
            drugName={result.drugName}
            dosage={result.dosage}
            description={result.description}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
