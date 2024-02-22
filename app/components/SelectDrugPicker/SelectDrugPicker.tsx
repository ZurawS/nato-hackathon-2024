import { View } from "@/components/Themed";
import { OptionType, Select } from "@mobile-reality/react-native-select-pro";
import { Pressable, StyleSheet, Text } from "react-native";
import { LabelValue } from "../../../assets/models/utils.model";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import DataContext from "../Context/DataContext";
import { AntDesign, Ionicons } from "@expo/vector-icons";

interface SelectDrugPickerProps {
  selectCountryDrugNames: LabelValue[];
  setSelectedDrug: (value: LabelValue | undefined) => void;
}

function SelectDrugPicker({ selectCountryDrugNames, setSelectedDrug }: SelectDrugPickerProps) {
  const { sourceCountry } = useContext(DataContext);
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState<string>();
  const [error, setError] = useState<string>();

  const handleSelect = (option: OptionType<unknown>) => {
    setSelectedDrug(option);
  };

  const onInputChange = (inputValue: any) => {
    setInputValue(inputValue);
  };

  const submit = () => {
    if (inputValue && inputValue.length > 2) {
      setSelectedDrug({ label: inputValue, value: inputValue });
    } else {
      setError(t("dashboard.insertThreeCharacters"));
    }
  };

  return (
    <View style={styles.selectContainer}>
      <Text numberOfLines={1} style={styles.selectDrugInput}>
        {t("dashboard.drugSelection")}:
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.select}>
          <Select
            scrollToSelectedOption
            flatListProps={{ style: { maxHeight: 800 } }}
            key={"select" + selectCountryDrugNames.length}
            options={selectCountryDrugNames}
            searchable
            hideArrow
            onSelectChangeText={onInputChange}
            onSelect={handleSelect}
            placeholderText={t("dashboard.insertThreeCharacters")}
            disabled={selectCountryDrugNames.length === 0 && sourceCountry !== "ALL"}
          />
        </View>
        <Pressable style={styles.button} onPress={submit}>
          <Text>
            <Ionicons name="arrow-forward-circle-outline" size={24} color={"white"} />
          </Text>
        </Pressable>
      </View>
      <View style={styles.errorContainer}>
        <Text style={styles.error}>{error}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    marginTop: 4,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    borderRadius: 4,
    backgroundColor: "#ff000066",
  },
  error: {
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 0,
    width: "100%",
    height: 32,
  },
  select: {
    flex: 1,
  },
  button: {
    flex: 0,
    marginLeft: -40,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    backgroundColor: "#2f95dc",
    color: "white",
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
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
