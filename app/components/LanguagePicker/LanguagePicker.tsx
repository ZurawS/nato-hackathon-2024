import { Select } from "@mobile-reality/react-native-select-pro";
import React from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet } from "react-native";
import { CountryCodeMapping, getMappedCountryCodeKey } from "../../../assets/models/country-codes.model";

const LanguagePicker = () => {
  const { i18n } = useTranslation();

  const languages = Object.entries(CountryCodeMapping).map((c) => {
    return {
      label: getMappedCountryCodeKey(c[1]),
      value: c[0],
    };
  });

  return (
    <View style={styles.container}>
      <Select
        scrollToSelectedOption
        options={languages}
        onSelect={(option) => i18n.changeLanguage(option.value)}
        clearable={false}
        defaultOption={languages[0]}
      />
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
