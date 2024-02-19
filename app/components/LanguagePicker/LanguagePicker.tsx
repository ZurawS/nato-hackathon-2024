// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

// const LanguagePicker = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const { i18n } = useTranslation(); //i18n instance

//   //array with all supported languages
//   const languages = [
//     { name: "de", label: "Deutsch" },
//     { name: "en", label: "English" },
//     { name: "fr", label: "Français" },
//     { name: "be", label: "Беларуская" },
//     { name: "es", label: "Español" },
//   ];

//   const LanguageItem = ({ name, label }: { name: string; label: string }) => (
//     <Pressable
//       style={styles.button}
//       onPress={() => {
//         i18n.changeLanguage(name); //changes the app language
//         setModalVisible(!modalVisible);
//       }}
//     >
//       <Text style={styles.textStyle}>{label}</Text>
//     </Pressable>
//   );

//   return (
//     <View>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             {languages.map((lang) => (
//               <LanguageItem {...lang} key={lang.name} />
//             ))}
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>{i18n.language}</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default LanguagePicker;
