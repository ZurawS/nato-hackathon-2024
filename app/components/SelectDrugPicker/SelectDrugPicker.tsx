import { View } from "@/components/Themed";
import { Select } from "@mobile-reality/react-native-select-pro";
import { StyleSheet } from "react-native";

interface SelectDrugPickerProps {
  selectCountryDrugNames: { label: string; value: string }[];
}

function SelectDrugPicker({ selectCountryDrugNames }: SelectDrugPickerProps) {
  return (
    <View style={styles.selectContainer}>
      <Select
        options={[...selectCountryDrugNames]}
        searchable
        hideArrow
        placeholderText="Insert at least 3 characters"
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
