import { StyleSheet, TextInput } from "react-native";

import { Text, View } from "@/components/Themed";
import { useTranslation } from "react-i18next";
import LanguagePicker from "../components/LanguagePicker/LanguagePicker";

export default function TabTwoScreen() {
  const { t } = useTranslation();

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
