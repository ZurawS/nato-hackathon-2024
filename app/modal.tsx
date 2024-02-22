import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import ModalFormInput from "./components/ModalFormInput/ModalFormInput";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import DataContext from "./components/Context/DataContext";
import { Entypo } from "@expo/vector-icons";
import { postPatientInfo } from "./api/api";
import { getMappedCountryCode } from "@/assets/models/country-codes.model";
import { useNavigation } from "expo-router";
import Toast from "react-native-toast-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function ModalScreen() {
  const { t, i18n } = useTranslation();
  const { drugsToSend, setDrugsToSend, infoToSend, setInfoToSend, clearInfoToSend } = useContext(DataContext);
  const [notValidForm, setNotValidForm] = useState(false);
  const navigation = useNavigation();

  const handleChange = (key: string, value: string) => {
    setNotValidForm(false);
    setInfoToSend({ ...infoToSend, [key]: value });
  };

  const validadte = (): boolean => {
    if (!infoToSend.name || !infoToSend.id || drugsToSend.length === 0) {
      return false;
    }
    return true;
  };

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: t("modal.toast.success"),
      text2: t("modal.toast.error"),
    });
  };

  const showToastErrorApi = () => {
    Toast.show({
      type: "error",
      text1: t("modal.toastErrorApi.header"),
      text2: t("modal.toastErrorApi.text"),
    });
  };

  const closeModal = () => {
    navigation.goBack();
    clearInfoToSend();
  };

  const saveInfo = async () => {
    const mappedLang = getMappedCountryCode(i18n.language);

    if (!validadte()) {
      setNotValidForm(true);
      return;
    }

    try {
      await postPatientInfo(infoToSend, drugsToSend, mappedLang);
      setDrugsToSend([]);
    } catch (error) {
      console.error("Saving patient info", error);
      showToastErrorApi();
      return;
    }

    closeModal();
    showToast();
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.inputsContainer}>
        <ModalFormInput header={t("modal.nameHeader")} description={t("modal.nameDescription")}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder={t("modal.namePlaceholder")}
              onChange={(e) => handleChange("name", e.nativeEvent.text)}
              value={infoToSend.name}
            />
          </View>
        </ModalFormInput>
        <ModalFormInput header={t("modal.idHeader")} description={t("modal.idDescription")}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder={t("modal.idPlaceholder")}
              onChange={(e) => handleChange("id", e.nativeEvent.text)}
              value={infoToSend.id}
            />
          </View>
        </ModalFormInput>
        <ModalFormInput header={t("modal.diagnosisHeader")} description={t("modal.diagnosisDescription")}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.diagnosisTextInput}
              placeholder={t("modal.diagnosisPlaceholder")}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              onChange={(e) => handleChange("additionalInfo", e.nativeEvent.text)}
              value={infoToSend.additionalInfo}
            />
          </View>
        </ModalFormInput>
        <ModalFormInput header={t("modal.drugsHeader")} description={t("modal.drugsDescription")}>
          {drugsToSend.length === 0 && <Text style={styles.noDrugsText}>{t("modal.noDrugsText")}.</Text>}
          {drugsToSend.map((drug, index) => (
            <View key={`drug.tradeName${index}`} style={styles.drugNameContainer}>
              <Text style={styles.drugName} numberOfLines={1}>
                {drug.tradeName}
              </Text>
              <Text style={styles.countryCode} numberOfLines={1}>
                {" "}
                {drug.countryCode}
              </Text>
            </View>
          ))}
        </ModalFormInput>
      </View>
      {notValidForm && <Text style={styles.errorText}>{t("modal.errorText")}</Text>}
      <TouchableOpacity style={styles.buttonContainer}>
        <Pressable onPress={saveInfo}>
          <View style={styles.button}>
            <Entypo size={24} color={"black"} name="save" />
            <Text style={styles.buttonText}>
              {"  "}
              {t("modal.sendButton")}
            </Text>
          </View>
        </Pressable>
      </TouchableOpacity>
      <StatusBar style={"light"} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    width: "100%",
    paddingTop: 10,
    backgroundColor: "white",
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
    width: "100%",
  },
  diagnosisTextInput: {
    height: 90,
    marginVertical: 6,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: "100%",
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
    paddingRight: 35,
  },
  drugName: {
    paddingLeft: 26,
    fontSize: 15,
    fontWeight: "bold",
  },
  countryCode: {
    fontSize: 8,
    color: "gray",
    marginBottom: 2,
  },
  buttonContainer: {
    flex: 0,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
    paddingHorizontal: 60,
    width: "100%",
  },
  button: {
    borderColor: "#000",
    borderWidth: 2,
    backgroundColor: "initial",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    minWidth: "60%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 50,
  },
  buttonText: {
    color: "#000000", // Kolor tekstu
    fontSize: 20,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    paddingLeft: 26,
  },
  resultsContainer: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "red",
    height: 400,
  },
});
