import { StyleSheet } from "react-native";
export const loginPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        height: 150,
        width: 300,
    },
    contentContainer: {
        gap: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: "#333",
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginBottom: 5,
    },
});