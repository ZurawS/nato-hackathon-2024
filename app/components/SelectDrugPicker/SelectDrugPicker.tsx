import { View } from "@/components/Themed";
import { OptionType, Select, SelectRef } from "@mobile-reality/react-native-select-pro";
import { StyleSheet } from "react-native";
import { LabelValue } from "../../../assets/models/utils.model";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

interface SelectDrugPickerProps {
  selectCountryDrugNames: LabelValue[];
  setSelectedDrug: (value: LabelValue | undefined) => void;
}

function SelectDrugPicker({
  selectCountryDrugNames,
  setSelectedDrug,
}: SelectDrugPickerProps) {
  const { t } = useTranslation();

  const handleSelect = (option: OptionType<unknown>) => {
    setSelectedDrug(option);
  };

  return (
    <View style={styles.selectContainer}>
      <Select
        options={[...selectCountryDrugNames]}
        searchable
        hideArrow
        onSelect={handleSelect}
        placeholderText={t("dashboard.insertThreeCharacters")}
        disabled={selectCountryDrugNames.length === 0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  selectContainer: {
    alignItems: "center",
    paddingHorizontal: 26,
    marginVertical: 16,
  },
});

export default SelectDrugPicker;
