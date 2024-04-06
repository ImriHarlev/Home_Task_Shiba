import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
export const appointmentPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 30,
    justifyContent: "space-between"
  },
  headerText: {
    textAlign: "left",
    fontSize: SIZES.xxLarge,
    marginBottom: 20,
  },
  formContainer: {
    gap: 15
  },
  calendarLogo: {
    height: 40,
    width: 40,
  },
  dateText: {
    fontSize: SIZES.medium
  },
  dateTimePickerContainer: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 10,
  }
});