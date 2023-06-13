import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

const GoogleLogin = () => {
  const [userInfo, setUserInfo] = useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId:
      "web-482109045484-v8r0ui0k2rn6dltqngnjd0cip9376k7k.apps.googleusercontent.com",
    androidClientId:
      "android-482109045484-g51ookn1gqke4mf9pi9l4re8pdd2lvlp.apps.googleusercontent.com",
  });

  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  async function handleSignInWithGoogle() {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if (response?.type === "success")
        await getUserInfo(response.authentication.accessToken);
    } else {
      setUserInfo(JSON.parse(user));
    }
  }

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        `https://www.googleapis.com/userinfo/v2/me`,
        { headers: { Authorization: "Bearer " + token } }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user" + JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      console.log("Error : " + error);
    }
  };
  return (
    <View>
      <Text>GoogleLogin</Text>
    </View>
  );
};

export default GoogleLogin;
