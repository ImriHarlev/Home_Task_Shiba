import React, { useState } from "react";
import { Text, TextInput, View, Pressable, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { User, userCredentials } from "../../models/user.model";
import users from "../../../assets/mocks/users.json";
import { useSetAtom } from "jotai";
import { router } from "expo-router";
import { userAtom } from "../../../app/index";
import { loginPageStyles } from "./LoginPage.styles";
import { globalStyles } from "../../styles/global.styles";

const LoginPage = () => {
  const setUser = useSetAtom(userAtom);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validationError, setValidationError] = useState<string | null>(null);

  const checkUser = (userCredentials: userCredentials): User | undefined => {
    return users.find(
      (user) =>
        user.credentials.password === userCredentials.password &&
        user.credentials.username === userCredentials.username
    );
  };

  const handleLogin = () => {
    setValidationError(null); // Clear any previous error

    if (username.trim() === "") {
      setValidationError("Username cannot be empty");
      return;
    }

    if (password.trim() === "") {
      setValidationError("Password cannot be empty");
      return;
    }

    let user = checkUser({ username: username, password: password });
    if (user) {
      console.log(user.firstName);
      router.push("/appointment");
      setUser(user);
    } else {
      console.log("oof");
      setValidationError("Username or Password incorrect");
    }
    // Implement remaining login logic here
    //  - call API or perform authentication
    //  - navigate to home screen on success
  };

  const logoImage = require("../../../assets/ShebaLogo.png");

  return (
    <SafeAreaView style={globalStyles.androidSafeArea}>
      <View style={loginPageStyles.container}>
        <View style={loginPageStyles.logoContainer}>
          <Image
            source={logoImage}
            style={loginPageStyles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={loginPageStyles.contentContainer}>
          <Text style={loginPageStyles.title}>התחברות</Text>
          <TextInput
            style={[globalStyles.input, { width: "80%" }]}
            value={username}
            onChangeText={setUsername}
            placeholder="שם משתמש"
          />
          <TextInput
            style={[globalStyles.input, { width: "80%" }]}
            value={password}
            onChangeText={setPassword}
            placeholder="סיסמא"
            secureTextEntry={true}
          />
          {validationError && (
            <Text style={loginPageStyles.errorText}>{validationError}</Text>
          )}
          <Pressable
            style={[globalStyles.PrimaryButton, { width: "80%" }]}
            onPress={handleLogin}
          >
            <Text style={globalStyles.PrimaryButtonText}>התחבר</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
