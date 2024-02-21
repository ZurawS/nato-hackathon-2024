import { View } from "@/components/Themed";
import { Select } from "@mobile-reality/react-native-select-pro";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

interface SelectDrugPickerProps {
  selectCountryDrugNames: { label: string; value: string }[];
}

function SelectDrugPicker({ selectCountryDrugNames }: SelectDrugPickerProps) {
    const [selectList, setSelectList] = useState(selectCountryDrugNames);

    useEffect(() => {
        setSelectList([...selectCountryDrugNames])
        console.log("RERANDERED")
    }, [selectCountryDrugNames])

  return (
    <View style={styles.selectContainer}>
      <Select
        options={selectList}
        searchable
        hideArrow
        placeholderText="Start typing medicine name"
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
  }
})

export default SelectDrugPicker;
