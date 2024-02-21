import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { Text, View } from "@/components/Themed";
import ModalFormInput from "./components/ModalFormInput/ModalFormInput";
import { useTranslation } from "react-i18next";
import AddPhotoInput from "./components/AddPhotoInput/AddPhotoInput";
import { useContext, useState } from "react";
import DataContext from "./components/Context/DataContext";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { infoToSend } from "@/assets/models/infoTosend";

export default function ModalScreen() {
  const { t } = useTranslation();
  const { drugsToSend } = useContext(DataContext);
  const [ formInfo, setFormInfo ] = useState<infoToSend>({
    name: "",
    id: "",
    additionalInfo: "",
    drugs: [],
  });


  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
      <ModalFormInput header={t("modal.nameHeader")} description={t("modal.nameDescription")}>
        <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} placeholder={t("modal.namePlaceholder")} />
        </View>
      </ModalFormInput>
      <ModalFormInput header={t("modal.idHeader")} description={t("modal.idDescription")}>
        <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} placeholder={t("modal.idPlaceholder")} />
        </View>
      </ModalFormInput>
      <ModalFormInput header={t("modal.diagnosisHeader")} description={t("modal.diagnosisDescription")}>
        <View style={styles.textInputContainer}>
        <TextInput style={styles.diagnosisTextInput} placeholder={t("modal.diagnosisPlaceholder")} multiline numberOfLines={4} textAlignVertical="top"/>
        </View>
      </ModalFormInput>
      {/* <ModalFormInput header={t("modal.addPhotoHeader")} description={t("modal.addPhotoDescription")}>
        <AddPhotoInput />
      </ModalFormInput> */}
      <ModalFormInput header={t("modal.drugsHeader")} description={t("modal.drugsDescription")}>
        { drugsToSend.length === 0 && <Text style={styles.noDrugsText}>{t("modal.noDrugsText")}</Text> }
        {
          drugsToSend.map((drug, index) => (
            <View key={`drug.tradeName${index}`} style={styles.drugNameContainer}>
              <Text style={styles.drugName}>{drug.tradeName}</Text>
              <Text style={styles.countryCode}>{"  "}{drug.countryCode}</Text>
            </View>
          ))
        }
      </ModalFormInput>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
      <View style={styles.button}>
      <Entypo size={24} color={"white"} name="save" />
        <Text style={styles.buttonText}>{"  "}{t("modal.sendButton")}</Text>
      </View>
    </TouchableOpacity>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  inputsContainer: {
    flex: 0,
    width: "100%",
  },
  textInputContainer: {
    width: "100%",
    paddingHorizontal: 26,
  },
  textInput: {
    height: 40,
    marginVertical: 6,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: "100%"
  },
  diagnosisTextInput: {
    height: 90,
    marginVertical: 6,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: "100%"
  },
  noDrugsText: {
    color: "gray",
    fontSize: 14,
    marginBottom: 10,
    marginTop: 6,
    width: "100%",
    paddingLeft: 26,
  },
  drugNameContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginRight: 8,
    width: "100%",
    marginTop: 8,
  },
  drugName: {
    paddingLeft: 30,
    fontSize: 15,
    fontWeight: "bold",
  },
  countryCode: {
    fontSize: 8,
    color: "gray",
    marginBottom: 2,
  },
  buttonContainer: {
    flex:0,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 60,
    paddingHorizontal: 60,
    width: "100%",
  },
  button: {
    backgroundColor: '#000000', // Kolor szarego przycisku
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    minWidth: "60%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 50,
  },
  buttonText: {
    color: '#FFFFFF', // Kolor tekstu
    fontSize: 20,
    fontWeight: 'bold',
  },
});
