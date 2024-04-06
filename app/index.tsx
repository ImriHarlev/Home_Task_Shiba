import React, { useEffect } from "react";
import { Redirect, router, useRootNavigationState } from "expo-router";
import { atom, useAtomValue } from "jotai";
import { User } from "../src/models/user.model";
import { I18nManager, View } from "react-native";
import { he, registerTranslation } from "react-native-paper-dates";

export const userAtom = atom<User | undefined>(undefined);
const App = () => {
  const user = useAtomValue(userAtom);
  registerTranslation("he", he);
  //const shouldBeRTL = true;
  // if (shouldBeRTL !== I18nManager.isRTL) {
  //   I18nManager.allowRTL(shouldBeRTL);
  //   I18nManager.forceRTL(shouldBeRTL);
  // }
  if (user) {
    return <Redirect href="/appointment" />;
  } else {
    return <Redirect href="/login" />;
  }

};

export default App;
