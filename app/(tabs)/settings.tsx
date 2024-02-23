import { Platform, StyleSheet, Switch } from "react-native";
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
      <View style={styles.toggleContainer}>
        <SettingItem
          headText={t("settings.headTextOfflineMode")}
          descriptionText={t("settings.descriptionTextOfflineMode")}
        >
          <View
            style={[
              styles.toggle,
              Platform.OS === "ios"
                ? { marginTop: -33 }
                : {
                    marginTop: -40,
                  },
            ]}
          >
            <Switch onValueChange={() => setOfflineMode(!offlineMode)} value={offlineMode} />
          </View>
        </SettingItem>
      </View>
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
  toggleContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
  toggle: {
    marginRight: -268,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
  },
});
