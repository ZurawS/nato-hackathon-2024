import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, TextInput } from "react-native";

import { Text, View } from "@/components/Themed";
import ModalFormInput from "./components/ModalFormInput/ModalFormInput";
import { useTranslation } from "react-i18next";
import AddPhotoInput from "./components/AddPhotoInput/AddPhotoInput";

export default function ModalScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
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
      <ModalFormInput header={t("modal.addPhotoHeader")} description={t("modal.addPhotoDescription")}>
        <AddPhotoInput />
      </ModalFormInput>
      <ModalFormInput header={t("modal.drugsHeader")} description={t("modal.drugsDescription")}>
        <Text>TODO</Text>
      </ModalFormInput>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
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
  }
});
