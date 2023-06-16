import React, { useState, useEffect } from "react";
import Router from "./src/router/router";
import Login from "./src/components/auth/login";
import { Root as PopupRootProvider } from "react-native-popup-confirm-toast";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as WebBrowser from "expo-web-browser";
import useUserStore from "./src/redux/user-store";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "1680492825744460",
  });

  useEffect(() => {
    if (response && response.type === "success" && response.authentication) {
      (async () => {
        const userInfoResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,email,phone,picture.type(large)`
        );
        const userInfo = await userInfoResponse.json();
        setUser({ user: userInfo });
      })();
    }
  }, [response]);

  const handlePressAsync = async () => {
    const result = await promptAsync();
    if (result.type !== "success") {
      alert("Uh oh, something went wrong");
      return;
    }
  };

  return (
    <PopupRootProvider>
      {user ? <Router /> : <Login handlePressAsync={handlePressAsync} />}
    </PopupRootProvider>
  );
}
