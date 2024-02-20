import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { KeyValue } from "../../../assets/models/utils.model";
import { DrugAlternatives } from "../../../assets/models/drug.model";
import { useTranslation } from "react-i18next";

const DrugRow: FC<DrugAlternatives> = ({
  drugName,
  dosage,
  atcCodes,
  routeOfAdministration,
  pharmateuticalForm,
  additionalInfo,
}: DrugAlternatives) => {
  const { t } = useTranslation();
  const aditionalInfoArray: KeyValue[] = Object.entries(additionalInfo).map((entry) => ({
    key: entry[0],
    value: entry[1],
  }));

  return (
    <View style={styles.drugContainer}>
      <Text style={styles.drugName}>{drugName}</Text>
      <View style={styles.detailContainer}>
        <Text style={{ ...styles.drugDetail, marginRight: 4 }}>{t("drug.drugDetails.dosage")}:</Text>
        <Text style={(styles.drugDetail, styles.drugDetailValue)}>{dosage}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={{ ...styles.drugDetail, marginRight: 4 }}>{t("drug.drugDetails.atcCodes")}:</Text>
        <Text style={(styles.drugDetail, styles.drugDetailValue)}>{atcCodes}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={{ ...styles.drugDetail, marginRight: 4 }}>{t("drug.drugDetails.routeOfAdministration")}:</Text>
        <Text style={(styles.drugDetail, styles.drugDetailValue)}>{routeOfAdministration}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={{ ...styles.drugDetail, marginRight: 4 }}>{t("drug.drugDetails.pharmateuticalForm")}:</Text>
        <Text style={(styles.drugDetail, styles.drugDetailValue)}>{pharmateuticalForm}</Text>
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
  drugName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
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
});
