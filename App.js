import React, { useState } from "react";
import Router from "./src/router/router";
import {
  getAuth,
  FacebookAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { AccessToken, LoginManager } from "react-native-fbsdk-next";
import app from "./firebaseSetup";
import Login from "./src/components/auth/login";
import { Button, TouchableOpacity, View } from "react-native";
import Register from "./src/components/auth/register";
import { Root as PopupRootProvider } from "react-native-popup-confirm-toast";

export default function App() {
  /*   const [user, setUser] = useState();

  const SignInWithFB = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      "public_profile",
      "email",
    ]);
    if (result.isCancelled) {
      throw "User cancelled the login process";
    }
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw "Something went wrong obtaining access token";
    }

    const auth = getAuth(app);

    // Create a Firebase credential with the AccessToken
    const facebookAuthProvider = FacebookAuthProvider.credential(
      data.accessToken
    );
    // console.log("provider ",facebookAuthProvider);
    // const credential = facebookAuthProvider.credential(data.accessToken);
    // Sign-in with credential from the Facebook user.
    signInWithCredential(auth, facebookAuthProvider)
      .then(() => {})
      .catch((error) => {
        // Handle Errors here.]
        console.log(error);
      });
  }; */

  return (
    <PopupRootProvider>
      <Router />
      {/* <Login /> */}
      {/* <Register /> */}
    </PopupRootProvider>
  );

}
