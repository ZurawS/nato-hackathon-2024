import { View } from "@/components/Themed";
import { ActivityIndicator, StyleSheet } from "react-native";

function AppLoadingIndicator() {
    return (
        <View style={styles.overlay}>
            <ActivityIndicator size="large" color="#fff"/>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default AppLoadingIndicator;