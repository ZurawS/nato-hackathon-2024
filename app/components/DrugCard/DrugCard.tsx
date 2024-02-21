import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import DrugRow from "./DrugRow";
import { Drug } from "../../../assets/models/drug.model";
import { useTranslation } from "react-i18next";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

interface Props extends Drug{
  removeCard: (sourceDrugId: string) => void;
}

const DrugCard: FC<Props> = ({ sourceDrag, alternativeDrugs, removeCard }) => {
  const { t } = useTranslation();
  const [isAlternativeDrugsVisible, setIsAlternativeDrugsVisible] =
    useState<boolean>(false);
  const activeIngredients = Object.values(sourceDrag.activeIngredients).join(
    ", "
  );

  return (
    <View style={styles.card}>
      <View style={styles.cardHead}>
        <Text style={styles.title}>{sourceDrag.tradeName}</Text>
        <Pressable onPress={() => removeCard(sourceDrag.id)}>
          <AntDesign size={24} color={"gray"} name="close" />
        </Pressable>
      </View>
      <Text style={styles.text}>{activeIngredients}</Text>

      <Pressable
        style={styles.collapsiableToggle}
        onPress={() =>
          setIsAlternativeDrugsVisible(
            (isAlternativeDrugsVisible) => !isAlternativeDrugsVisible
          )
        }
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
        <Text style={styles.collapsiableToggleText}>
          {isAlternativeDrugsVisible
            ? t("drug.hideAlternativeDrugs")
            : t("drug.showAlternativeDrugs")}
        </Text>
      </Pressable>
      {isAlternativeDrugsVisible && (
        <View>
          <View style={styles.separator}></View>
          {alternativeDrugs.length > 0 &&
            alternativeDrugs.map((drugData) => (
              <DrugRow key={drugData.tradeName + drugData.id} {...drugData} />
            ))}
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
  cardHead: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
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
});

export default DrugCard;
