import { Button, StyleSheet, Text } from "react-native";
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
import { getAlternativeDrugListOffline, getCountryDrugNamesOffline } from "../db/offlineApi";

// DO NOT DELETE THIS, IT INITIALIZES I18N LIBRARY
const initI18n = i18n;

export default function Dashboard() {
  const { t } = useTranslation();
  const { sourceCountry, setAppLoading, currentCountry, offlineMode, setOfflineMode } = useContext(DataContext);
  const [selectCountryDrugNames, setSelectCountryDrugNames] = useState<{ label: string; value: string }[]>([]);
  const [initialDrugNames, setinitialDrugNames] = useState<{ label: string; value: string }[]>([]);

  const [selectedDrug, setSelectedDrug] = useState<LabelValue>();
  const [foundDrugs, setFoundDrugs] = useState<Drug[]>([]);

  const offlineQueryCountryDrugNames = () => {
    getCountryDrugNamesOffline(sourceCountry || getMappedCountryCode(i18n.language)).then((availableDrugs) => {
      const newOptions = availableDrugs.map((name) => ({ label: name, value: name }));
      setSelectCountryDrugNames(newOptions);
      setinitialDrugNames(newOptions);
      setAppLoading(false);
    })
  }

  const { isFetching } = useQuery<string[], AxiosError>(
    ["countryCodes", sourceCountry],
    () => getCountryDrugNames(sourceCountry || getMappedCountryCode(i18n.language)),
    {
      onSuccess: (availableDrugs: string[]) => {
        const newOptions = availableDrugs.map((name) => ({ label: name, value: name }));
        setSelectCountryDrugNames(newOptions);
        setinitialDrugNames(newOptions);
      },
      onError: () => {
        setOfflineMode(true);
        offlineQueryCountryDrugNames();
      },
      enabled: !!sourceCountry && !offlineMode,
    }
  );

  useEffect(() => {
    if (offlineMode) {
      setAppLoading(true);
      if(!!sourceCountry){
        offlineQueryCountryDrugNames();
      }
    }
  }, [sourceCountry])

  const { isFetching: isFetchingDrugs } = useQuery<DrugResponse, AxiosError>(
    ["alternativeDrugList", selectedDrug],
    () =>
      getAlternativeDrugList(
        selectedDrug!.value,
        currentCountry as string,
        sourceCountry as string,
        getMappedCountryCode(i18n.language)
      ),
    {
      onSuccess: (availableDrugs: DrugResponse) => {
        foundDrugs.push(...availableDrugs.drugs);
      },
      enabled: !!sourceCountry && !!selectedDrug && !!currentCountry,
    }
  );

  useEffect(() => {
    setAppLoading(isFetching || isFetchingDrugs);
  }, [isFetching, isFetchingDrugs]);

  const removeCard = (id: string) => {
    setFoundDrugs((foundDrugs) => foundDrugs.filter((drug) => drug.sourceDrug.id !== id));
  };

  function handleDrugSelection(selectedDrug: LabelValue | undefined) {
    setSelectedDrug(selectedDrug);
    setSelectCountryDrugNames((data) => data.filter((drug) => drug.label !== selectedDrug?.label));
  }

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

      <SelectDrugPicker
        key={selectCountryDrugNames[0]?.label + selectCountryDrugNames.length || "no-drugs"}
        setSelectedDrug={handleDrugSelection}
        selectCountryDrugNames={selectCountryDrugNames || []}
      />

      <KeyboardAwareScrollView style={styles.resultsContainer}>
        {foundDrugs.length ? (
          foundDrugs.map((result) =>
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
          <></>
        )}
        {!foundDrugs.length && sourceCountry ? null : ( // </View> //   <Text style={styles.noReultsFoundText}>{t("dashboard.pleaseSelectDrug")}</Text> // <View style={styles.noReultsFoundContainer}>
          <></>
        )}
      </KeyboardAwareScrollView>
      <Button title="test Sqlite" onPress={async () => await getCountryDrugNamesOffline('%BGR%')} />
      {/* <Button title="test Sqlite" onPress={async () => await getAlternativeDrugListOffline('%POL%', '%Fervex%')} /> */}
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
