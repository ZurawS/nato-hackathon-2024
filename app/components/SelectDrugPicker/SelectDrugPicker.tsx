import { View } from "@/components/Themed";
import { OptionType, Select } from "@mobile-reality/react-native-select-pro";
import { StyleSheet, Text } from "react-native";
import { LabelValue } from "../../../assets/models/utils.model";
import { useTranslation } from "react-i18next";

interface SelectDrugPickerProps {
  selectCountryDrugNames: LabelValue[];
  setSelectedDrug: (value: LabelValue | undefined) => void;
}

function SelectDrugPicker({ selectCountryDrugNames, setSelectedDrug }: SelectDrugPickerProps) {
  const { t } = useTranslation();

  const handleSelect = (option: OptionType<unknown>) => {
    setSelectedDrug(option);
  };

  return (
    <View style={styles.selectContainer}>
      <Text numberOfLines={1} style={styles.selectDrugInput}>
        {t("dashboard.drugSelection")}:
      </Text>
      <Select
        key={"select" + selectCountryDrugNames.length}
        options={selectCountryDrugNames}
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
    paddingHorizontal: 26,
    marginVertical: 16,
    width: "100%",
    gap: 6,
  },
  selectDrugInput: {
    justifyContent: "flex-start",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default SelectDrugPicker;
