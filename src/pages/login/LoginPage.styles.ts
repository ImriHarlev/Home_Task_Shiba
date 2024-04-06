import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
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
    fontSize: SIZES.xLarge,
    marginBottom: 20,
    color: COLORS.black,
  },
  errorText: {
    color: COLORS.error,
    fontSize: SIZES.medium,
    marginBottom: 5,
  },
});