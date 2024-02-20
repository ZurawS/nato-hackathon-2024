import { StyleSheet, TextInput } from "react-native";

import { Text, View } from "@/components/Themed";
import { useTranslation } from "react-i18next";
import LanguagePicker from "../components/LanguagePicker/LanguagePicker";
import { useContext } from "react";
import DataContext from "../components/Context/DataContext";

export default function TabTwoScreen() {
  const { t } = useTranslation();

  // TODO dodać select na listę krajów
  const { currentCountry, setCurrentCountry } = useContext(DataContext);

  return (
    <View style={styles.container}>
      <LanguagePicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
