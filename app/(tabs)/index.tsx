import { StyleSheet, Text } from "react-native";
import { View } from "@/components/Themed";
import i18n from "../../assets/translation/i18n";
import { useTranslation } from "react-i18next";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DataContext from "../components/Context/DataContext";
import { useContext, useEffect, useState } from "react";
import SourceCountryPicker from "../components/SourceCountryPicker/SourceCountryPicker";
import SelectDrugPicker from "../components/SelectDrugPicker/SelectDrugPicker";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { getMappedCountryCode } from "../../assets/models/country-codes.model";
import { getAlternativeDrugList, getCountryDrugNames } from "../api/api";
import { Drug, DrugResponse } from "../../assets/models/drug.model";
import { LabelValue } from "../../assets/models/utils.model";
import DrugCard from "../components/DrugCard/DrugCard";

// DO NOT DELETE THIS INITIALIZES I18N LIBRARY
const initI18n = i18n;

export default function Dashboard() {
  const { t } = useTranslation();
  const { sourceCountry, setAppLoading, currentCountry } = useContext(DataContext);
  const [selectCountryDrugNames, setSelectCountryDrugNames] = useState<{ label: string; value: string }[]>([]);

  const [selectedDrug, setSelectedDrug] = useState<LabelValue>();
  const [foundDrugs, setFoundDrugs] = useState<Drug[]>([]);

  const { isFetching } = useQuery<string[], AxiosError>(
    ["countryCodes", sourceCountry],
    () => getCountryDrugNames(sourceCountry || getMappedCountryCode(i18n.language)),
    {
      onSuccess: (availableDrugs: string[]) => {
        const newOptions = availableDrugs.map((name) => ({ label: name, value: name }));
        setSelectCountryDrugNames(() => [...newOptions]);
      },
      enabled: !!sourceCountry,
    }
  );

  const { data: drugData, isFetching: isFetchingDrugs } = useQuery<DrugResponse, AxiosError>(
    ["alternativeDrugList", selectedDrug, currentCountry, sourceCountry, i18n.language],
    () =>
      getAlternativeDrugList(
        selectedDrug!.value,
        currentCountry as string,
        sourceCountry as string,
        getMappedCountryCode(i18n.language)
      ),
    {
      onSuccess: (availableDrugs: DrugResponse) => {
        console.log(availableDrugs);
        foundDrugs.push(...availableDrugs.drugs);
      },
      enabled: !!sourceCountry && !!selectedDrug && !!currentCountry,
    }
  );

  useEffect(() => {
    setAppLoading(isFetching || isFetchingDrugs);
  }, [isFetching, isFetchingDrugs]);

  useEffect(() => {
    console.log({ drugData });
  }, [drugData]);

  const removeCard = (id: string) => {
    setFoundDrugs((foundDrugs) => foundDrugs.filter((drug) => drug.sourceDrug.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectSrcCountryContainer}>
        <View style={styles.selectSrcCountryTextContainer}>
          <Text numberOfLines={1} style={styles.selectSrcCountryText}>
            {t("dashboard.sourceCountry")}:
          </Text>
          <Text numberOfLines={1} style={styles.selectSrcCountryDescText}>
            {t("dashboard.sourceCountryPlaceholder")}
          </Text>
        </View>
        <SourceCountryPicker />
      </View>
      {selectCountryDrugNames.length > 0 ? (
        <SelectDrugPicker
          key={"select"}
          setSelectedDrug={setSelectedDrug}
          selectCountryDrugNames={[...selectCountryDrugNames]}
        />
      ) : (
        <SelectDrugPicker key={"select1"} setSelectedDrug={setSelectedDrug} selectCountryDrugNames={[]} />
      )}

      <KeyboardAwareScrollView style={styles.resultsContainer}>
        {foundDrugs.length ? (
          foundDrugs.map((result, index) =>
            result ? (
              <DrugCard
                key={`result-${result?.sourceDrug?.tradeName}-${result?.sourceDrug?.id}`}
                sourceDrug={result.sourceDrug}
                alternativeDrugs={result.alternativeDrugs}
                removeCard={removeCard}
              />
            ) : (
              <></>
            )
          )
        ) : (
          <View style={styles.noReultsFoundContainer}>
            <Text style={styles.noReultsFoundText}>{t("dashboard.noResults")}</Text>
          </View>
        )}
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  selectSrcCountryContainer: {
    flex: 0,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 26,
  },
  selectSrcCountryTextContainer: {
    flex: 0,
    justifyContent: "center",
  },
  selectSrcCountryText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  selectSrcCountryDescText: {
    fontSize: 10,
    color: "grey",
  },
  selectContainer: {
    alignItems: "center",
    paddingHorizontal: 26,
    marginVertical: 16,
  },
  resultsContainer: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 20,
  },
  noReultsFoundContainer: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  noReultsFoundText: {
    fontSize: 14,
    color: "gray",
  },
});
