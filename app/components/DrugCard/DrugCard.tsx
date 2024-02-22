import React, { FC, useContext, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import DrugRow from "./DrugRow";
import { AlternativeDrug, Drug } from "../../../assets/models/drug.model";
import { useTranslation } from "react-i18next";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import DataContext from "../Context/DataContext";

interface Props extends Drug {
  removeCard: (sourceDrugId: string) => void;
}

const DrugCard: FC<Props> = ({ sourceDrug, alternativeDrugs, removeCard }: Props) => {
  const {
    id,
    countryCode,
    tradeName,
    pharmaceuticalForm,
    routeOfAdministration,
    dosage,
    additionalInfo,
    activeIngredients,
  } = sourceDrug;
  const { t } = useTranslation();
  const [isAlternativeDrugsVisible, setIsAlternativeDrugsVisible] = useState<boolean>(false);
  const activeIngredientsList = Object.values(activeIngredients).join(", ");
  const { drugsToSend, setDrugsToSend } = useContext(DataContext);
  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.cardHead}>
        <View style={styles.drugNameContainer}>
          <Pressable
            onPress={() => {
              if (selected) {
                setDrugsToSend(drugsToSend.filter((drug) => drug.id !== sourceDrug.id));
                setSelected(!selected);
              } else {
                setDrugsToSend([...drugsToSend, sourceDrug]);
                setSelected(!selected);
              }
            }}
          >
            <Text numberOfLines={1} style={[styles.title, selected && { color: "green" }]}>
              {tradeName}
            </Text>
          </Pressable>
          <Text numberOfLines={1} style={styles.countryCode}>
            {countryCode}
          </Text>
        </View>
        {selected ? (
          <AntDesign style={{ ...styles.iconButton, paddingTop: 4 }} size={24} name="check" color={"green"} />
        ) : null}
        <Pressable style={styles.iconButton} onPress={() => removeCard(sourceDrug.id)}>
          <AntDesign size={24} color={"gray"} name="close" />
        </Pressable>
      </View>
      <Text numberOfLines={1} style={styles.text}>
        {activeIngredientsList}
      </Text>

      <Pressable
        style={styles.collapsiableToggle}
        onPress={() => setIsAlternativeDrugsVisible((isAlternativeDrugsVisible) => !isAlternativeDrugsVisible)}
      >
        {!isAlternativeDrugsVisible && (
          <View style={styles.chevron}>
            <FontAwesome size={14} name="chevron-down" />
          </View>
        )}
        {isAlternativeDrugsVisible && (
          <View style={styles.chevron}>
            <FontAwesome size={14} name="chevron-up" />
          </View>
        )}
        <Text numberOfLines={1} style={styles.collapsiableToggleText}>
          {isAlternativeDrugsVisible ? t("drug.hideAlternativeDrugs") : t("drug.showAlternativeDrugs")} (
          {alternativeDrugs.length})
        </Text>
      </Pressable>
      {isAlternativeDrugsVisible && (
        <View>
          <View style={styles.separator}></View>
          {alternativeDrugs.length > 0 ? (
            alternativeDrugs.map((drugData: AlternativeDrug) =>
              drugData ? <DrugRow key={drugData?.tradeName + drugData?.id} {...drugData} /> : <></>
            )
          ) : (
            <></>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    overflow: "visible",
  },
  text: {
    fontSize: 12,
    marginTop: -6,
    color: "gray",
  },
  separator: {
    height: 2,
    marginTop: 8,
    backgroundColor: "lightgray",
  },
  collapsiableToggle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
  },
  collapsiableToggleText: {
    fontSize: 14,
    fontStyle: "italic",
  },
  chevron: {
    paddingRight: 8,
  },
  cardHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  drugNameContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  countryCode: {
    paddingLeft: 4,
    fontSize: 8,
    color: "gray",
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DrugCard;
