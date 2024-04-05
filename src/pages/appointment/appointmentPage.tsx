import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import { DatePickerModal } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";
import appointments from "../../../assets/mocks/appointments.json";
import {
  Appointment,
  AppointmentSubKind,
} from "../../models/appointment.model";
import ModalSelector from "react-native-modal-selector";
import { appointmentPageStyles } from "./appointmentPage.styles";
import { useAtomValue } from "jotai";
import { userAtom } from "../../../app/index";
import { globalStyles } from "../../styles/global.styles";

const AppointmentPage = () => {
  const user = useAtomValue(userAtom);
  const [dateRange, setDateRange] = React.useState<{
    startDate: Date | undefined;
    endDate: Date | undefined;
  }>({
    startDate: undefined,
    endDate: undefined,
  });
  const [openDatePicker, setOpenDatePicker] = React.useState(false);
  const onDismiss = React.useCallback(() => {
    setOpenDatePicker(false);
  }, [setOpenDatePicker]);

  const onDateConfirm = React.useCallback(
    ({
      startDate,
      endDate,
    }: {
      startDate: Date | undefined;
      endDate: Date | undefined;
    }) => {
      setOpenDatePicker(false);
      setDateRange({ startDate, endDate });
    },
    [setOpenDatePicker, setDateRange]
  );

  const [selectedMedicalKind, setSelectedMedicalKind] = useState<
    Appointment | undefined
  >();
  const [subMedicalKinds, setSubMedicalKinds] =
    useState<AppointmentSubKind[]>();
  const [selectedSubMedicalKind, setSelectedSubMedicalKind] = useState<
    AppointmentSubKind | undefined
  >();

  // Function to handle medical kind selection 
  const handleMedicalKindChange = (appointment: Appointment | undefined) => {
    setSelectedMedicalKind(appointment);
    setSubMedicalKinds(appointment?.subKinds);
    setSelectedSubMedicalKind(undefined);
  };

  // Function to handle sub-medical kind selection
  const handleSubMedicalKindChange = (value: AppointmentSubKind) => {
    setSelectedSubMedicalKind(value);
  };
  const handleSearch = () => {
    //check for all the fields
    if (
      dateRange.startDate === undefined ||
      selectedMedicalKind === undefined ||
      selectedSubMedicalKind === undefined
    ) {
      alert(
        "נא למלא את כל השדות"
      );
      return;
    }
    alert(
      "ready to sent the 'appointmentSearchData' object to an API!"
    );
  };

  return (
    <SafeAreaView style={globalStyles.androidSafeArea}>
      <SafeAreaProvider>
        <View style={appointmentPageStyles.container}>
          <Text style={appointmentPageStyles.headerText}>
            שלום, {user?.firstName}
          </Text>
          <ModalSelector
            data={appointments.map((appointment: Appointment) => {
              return {
                key: appointment.id,
                label: appointment.value,
                appointment: appointment,
              };
            })}
            onChange={(option) => {
              handleMedicalKindChange(option.appointment);
            }}
          >
            <TextInput
              style={[globalStyles.input, { color: "black" }]}
              editable={false}
              placeholder="בחר סוג פגישה"
              value={selectedMedicalKind?.value}
            />
          </ModalSelector>
          <ModalSelector
            data={
              subMedicalKinds?.map((subAppointment: AppointmentSubKind) => {
                return {
                  key: subAppointment.id,
                  label: subAppointment.value,
                  subAppointment: subAppointment,
                };
              }) ?? []
            }
            onChange={(option) => {
              handleSubMedicalKindChange(option.subAppointment);
            }}
          >
            <TextInput
              style={[globalStyles.input, { color: "black" }]}
              editable={false}
              placeholder="בחר תת סוג"
              value={selectedSubMedicalKind?.value}
            />
          </ModalSelector>

          <View style={appointmentPageStyles.dateTimePickerContainer}>
            <Pressable onPress={() => setOpenDatePicker(true)}>
              <Image
                source={require("../../../assets/icons/calendar.png")}
                style={appointmentPageStyles.calendarLogo}
                resizeMode="contain"
              />
            </Pressable>
            {dateRange.startDate && dateRange.endDate && (
              <Text style={{ fontSize: 15 }}>
                {dateRange.startDate.toLocaleDateString("he")} -{" "}
                {dateRange.endDate.toLocaleDateString("he")}
              </Text>
            )}
            <DatePickerModal
              validRange={{ startDate: new Date() }}
              locale="he"
              mode="range"
              presentationStyle="pageSheet"
              visible={openDatePicker}
              onDismiss={onDismiss}
              startDate={dateRange.startDate}
              endDate={dateRange.endDate}
              onConfirm={onDateConfirm}
            />
          </View>
          <Pressable
            style={globalStyles.PrimaryButton}
            onPress={handleSearch}
          >
            <Text style={globalStyles.PrimaryButtonText}>
              חפש תורים
            </Text>
          </Pressable>
        </View>
      </SafeAreaProvider>
    </SafeAreaView>
  );
};

export default AppointmentPage;
