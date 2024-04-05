import { StyleSheet } from "react-native";
export const appointmentPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 10
  },
  headerText: {
    textAlign: "left",
    fontSize: 30,
    marginBottom: 20,
  },
  calendarLogo: {
    height: 40,
    width: 40,
  },
  dateTimePickerContainer: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  }
});