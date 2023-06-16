import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Facebook from "expo-auth-session/providers/facebook";
import useUserStore from "../../../redux/user-store";


WebBrowser.maybeCompleteAuthSession();

const FbLogin = () => {
  
/*  const user = useUserStore((state) => state.user);
 const setUser = useUserStore((state) => state.setUser);

 const [request, response, promptAsync] = Facebook.useAuthRequest({
   clientId: "1680492825744460",
 });

 useEffect(() => {
   if (response && response.type === "success" && response.authentication) {
     (async () => {
       const userInfoResponse = await fetch(
         `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,email,picture.type(large)`
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
 }; */

  return (
    <View>
      <Text>FbLogin</Text>
    </View>
  );
};

export default FbLogin;
