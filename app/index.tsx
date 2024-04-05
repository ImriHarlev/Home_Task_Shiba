import React, { useEffect } from "react";
import { router, useRootNavigationState } from "expo-router";
import { atom, useAtomValue } from "jotai";
import { User } from "../src/models/user.model";
import { I18nManager, View } from "react-native";
import { he, registerTranslation } from "react-native-paper-dates";

export const userAtom = atom<User | undefined>(undefined);
const App = () => {
  const user = useAtomValue(userAtom);
  registerTranslation("he", he);
  
  const shouldBeRTL = true;
  if (shouldBeRTL !== I18nManager.isRTL) {
    I18nManager.allowRTL(shouldBeRTL);
    I18nManager.forceRTL(shouldBeRTL);
  }
  
  const rootNavigationState = useRootNavigationState();
  const navigatorReady = rootNavigationState?.key != null;
  
  useEffect(() => {
    if (!navigatorReady) return;
    if (user) {
      router.push("/appointment");
    } else {
      router.push("/login");
    }
  }, [navigatorReady]);

  return <View></View>;
};

export default App;
