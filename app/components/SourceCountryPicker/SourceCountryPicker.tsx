import { Select } from "@mobile-reality/react-native-select-pro";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet } from "react-native";
import DataContext from "../Context/DataContext";
import { CountryCodes } from "../../../assets/models/country-codes.model";

const SourceCountryPicker = () => {
  const { t } = useTranslation();
  const { setSourceCountry } = useContext(DataContext);

  const countries = [
    { label: "All", value: "ALL" },
    ...Object.entries(CountryCodes).map((c) => ({ label: c[1], value: c[0] })),
  ];

  return (
    <View style={styles.container}>
      <Select
        options={countries}
        clearable={false}
        onSelect={(option) => setSourceCountry(option.value)}
        placeholderText={t("dashboard.selectSourceCountry")}
      />
    </View>
  );
};

export default SourceCountryPicker;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: 10,
  },
});
