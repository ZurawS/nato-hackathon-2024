import { StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import { useTranslation } from "react-i18next";
import LanguagePicker from "../components/LanguagePicker/LanguagePicker";
import SettingItem from "../components/SettingItem/SettingItem";
import CountryOperationPicker from "../components/CountryOperationPicker/CountryOperationPicker";

export default function TabTwoScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <SettingItem headText={t("settings.headTextLanguage")} descriptionText={t("settings.descriptionTextLanguage")}>
        <LanguagePicker />
      </SettingItem>
      <SettingItem headText={t("settings.headTextCountryOperation")} descriptionText={t("settings.descriptionTextCountryOperation")}>
        <CountryOperationPicker />
      </SettingItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
