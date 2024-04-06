import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";
export const globalStyles = StyleSheet.create({
    PrimaryButton: {
        padding: 15,
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        marginTop: 20,
        alignSelf: "center",
    },
    PrimaryButtonText: {
        color: COLORS.lightWhite,
        fontSize: 16,
        textAlign: "center",
    },
    input: {
        padding: 10,
        textAlign: "right",
        borderWidth: 1,
        borderRadius: 5,
        color: COLORS.black,
        backgroundColor: COLORS.lightWhite,
    },
    androidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 30 : 0,
    },
});