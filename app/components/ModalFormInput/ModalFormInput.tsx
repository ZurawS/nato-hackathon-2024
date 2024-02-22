import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    header: string;
    description: string;
    children: React.ReactNode;
}

const ModalFormInput = ({header, description, children}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={{width: "100%", marginBottom: 8}}>
      {children}
      </View>
    </View>
  )
}

export default ModalFormInput

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
      },
      header: {
        fontSize: 14,
        fontWeight: "bold",
        width: "100%",
        paddingHorizontal: 26,
      },
      description: {
        marginTop: 1,
        fontSize: 10,
        color: "gray",
        width: "100%",
        paddingHorizontal: 26,
      },
})