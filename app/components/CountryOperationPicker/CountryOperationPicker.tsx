import { Select } from "@mobile-reality/react-native-select-pro";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet } from "react-native";
import DataContext from "../Context/DataContext";
import { CountryCodeMapping, CountryCodes } from "../../../assets/models/country-codes.model";

const CountryOperationPicker = () => {
  const { t } = useTranslation();
  const { currentCountry, setCurrentCountry } = useContext(DataContext);

  const countries = Object.entries(CountryCodes).map((c) => ({ label: c[1], value: c[0] }));

  return (
    <View style={styles.container}>
      <Select
        options={countries}
        clearable={false}
        onSelect={(option) => setCurrentCountry(option.value)}
        defaultOption={countries.filter((c) => c.value === currentCountry)[0] ?? {
          label: "Nederlands",
          value: CountryCodeMapping.nl,
        }}
      />
    </View>
  );
};

export default CountryOperationPicker;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 26,
    marginTop: 6,
    marginBottom: 8,
  },
});
