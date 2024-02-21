import { Select } from "@mobile-reality/react-native-select-pro";
import React from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet } from "react-native";

const LanguagePicker = () => {
  const { i18n } = useTranslation();

  const languages = [
    { value: "en", label: "English" },
    { value: "de", label: "Deutsch" },
    { value: "fr", label: "Français" },
    { value: "be", label: "Беларуская" },
    { value: "es", label: "Español" },
  ];

  return (
    <View style={styles.container}>
      <Select options={languages} 
      onSelect={(option) => i18n.changeLanguage(option.value)}
      clearable={false}
      defaultOption={languages[0]}/>
    </View>
  );
};

export default LanguagePicker;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 26,
    marginTop: 6,
  },
});
