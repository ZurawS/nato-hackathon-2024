import { Select } from "@mobile-reality/react-native-select-pro";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet } from "react-native";
import DataContext from "../Context/DataContext";

const CountryOperationPicker = () => {
  const { i18n } = useTranslation();
  const { currentCountry, setCurrentCountry } = useContext(DataContext);

  const countires = [
    { label: "Poland", value: "POL" },
    { label: "Romania", value: "ROU" },
    { label: "USA", value: "USA" },
    { label: "France", value: "FRA" },
    { label: "Italy", value: "ITA" },
    { label: "United Kingdom", value: "GBE" },
  ];

  return (
    <View style={styles.container}>
      <Select options={countires} 
      clearable={false}
      onSelect={(option) => setCurrentCountry(option.value)}
      defaultOption={countires.filter((c) => c.value === currentCountry)[0] ?? "POL"}/>
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
