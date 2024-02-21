import { Select } from "@mobile-reality/react-native-select-pro";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet } from "react-native";
import DataContext from "../Context/DataContext";

const SourceCountryPicker = () => {
  const { i18n } = useTranslation();
  const { sourceCountry, setSourceCountry } = useContext(DataContext);

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
      onSelect={(option) => setSourceCountry(option.value)}
      
      placeholderText="Select Country"/>
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