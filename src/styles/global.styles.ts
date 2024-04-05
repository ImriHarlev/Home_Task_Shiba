import { Platform, StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
    PrimaryButton: {
        padding: 15,
        backgroundColor: "#EA3E85",
        borderRadius: 5,
        marginTop: 20,
        alignSelf: "center",
    },
    PrimaryButtonText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
    },
    input: {
        padding: 10,
        textAlign: "right",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    androidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 30 : 0,
    },
});