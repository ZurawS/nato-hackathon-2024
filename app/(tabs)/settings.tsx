import { StyleSheet, Switch } from "react-native";
import { View } from "@/components/Themed";
import { useTranslation } from "react-i18next";
import LanguagePicker from "../components/LanguagePicker/LanguagePicker";
import SettingItem from "../components/SettingItem/SettingItem";
import CountryOperationPicker from "../components/CountryOperationPicker/CountryOperationPicker";
import { useContext } from "react";
import DataContext from "../components/Context/DataContext";

export default function Settings() {
  const { t } = useTranslation();
  const { offlineMode, setOfflineMode } = useContext(DataContext);

  return (
    <View style={styles.container}>
      <SettingItem headText={t("settings.headTextLanguage")} descriptionText={t("settings.descriptionTextLanguage")}>
        <LanguagePicker />
      </SettingItem>
      <SettingItem
        headText={t("settings.headTextCountryOperation")}
        descriptionText={t("settings.descriptionTextCountryOperation")}
      >
        <CountryOperationPicker />
      </SettingItem>
      <SettingItem
        headText={t("settings.headTextOfflineMode")}
        descriptionText={t("settings.descriptionTextOfflineMode")}
      >
        <View style={styles.toggle}>
          <Switch
            trackColor={{ false: "#3e3e3e", true: "#76757766" }}
            thumbColor={offlineMode ? "#2e78b7" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setOfflineMode(!offlineMode)}
            value={offlineMode}
          />
        </View>
      </SettingItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
    gap: 12,
  },
  toggle: {
    marginTop: -40,
    marginRight: -292,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
  },
});
