import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { KeyValue } from "../../../assets/models/utils.model";
import { AlternativeDrug } from "../../../assets/models/drug.model";
import { useTranslation } from "react-i18next";

const DrugRow: FC<AlternativeDrug> = (alternativeDrug: AlternativeDrug) => {
  const {
    id,
    activeIngredients,
    countryCode,
    tradeName,
    pharmaceuticalForm,
    routeOfAdministration,
    dosage,
    additionalInfo,
  } = alternativeDrug;
  const { t } = useTranslation();
  const aditionalInfoArray: KeyValue[] = Object.entries(alternativeDrug.additionalInfo).map((entry) => ({
    key: entry[0],
    value: entry[1],
  }));
  const atcCodes: string[] = Object.keys(activeIngredients);
  const activeIngredientsList: string[] = Object.values(activeIngredients);

  return (
    <View style={styles.drugContainer}>
      <View style={styles.drugNameContainer}>
        <Text style={styles.drugName}>{tradeName}</Text>
        <Text style={styles.countryCode}>{countryCode}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={{ ...styles.drugDetail, marginRight: 4 }}>{t("drug.drugDetails.activeIngredientsList")}:</Text>
        <Text style={(styles.drugDetail, styles.drugDetailValue)}>{activeIngredientsList}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={{ ...styles.drugDetail, marginRight: 4 }}>{t("drug.drugDetails.routeOfAdministration")}:</Text>
        <Text style={(styles.drugDetail, styles.drugDetailValue)}>{routeOfAdministration}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={{ ...styles.drugDetail, marginRight: 4 }}>{t("drug.drugDetails.dosage")}:</Text>
        <Text style={(styles.drugDetail, styles.drugDetailValue)}>{dosage}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={{ ...styles.drugDetail, marginRight: 4 }}>{t("drug.drugDetails.atcCodes")}:</Text>
        <Text style={(styles.drugDetail, styles.drugDetailValue)}>{atcCodes}</Text>
      </View>
    </View>
  );
};

export default DrugRow;

const styles = StyleSheet.create({
  drugContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "lightgray",
    paddingVertical: 8,
  },
  detailContainer: {
    marginBottom: 4,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  drugDetail: {
    fontSize: 14,
    color: "gray",
  },
  drugDetailValue: {
    fontWeight: "bold",
  },
  drugNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  countryCode: {
    fontSize: 8,
    color: "gray",
  },
  drugName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    marginRight: 4,
    flexWrap: "wrap",
  },
});
