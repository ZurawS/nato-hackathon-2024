import { View } from "@/components/Themed";
import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

interface SettingItemProps {
  headText: string;
  descriptionText: string;
  children: ReactNode;
}

export default function SettingItem({
  headText,
  descriptionText,
  children,
}: SettingItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.menuItemHeadText}>{headText}</Text>
      <Text style={styles.menuItemDescriptionText}>{descriptionText}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  menuItemHeadText: {
    fontSize: 14,
    fontWeight: "bold",
    width: "100%",
    paddingHorizontal: 26,
  },
  menuItemDescriptionText: {
    marginTop: 1,
    fontSize: 10,
    color: "gray",
    width: "100%",
    paddingHorizontal: 26,
  },
});
