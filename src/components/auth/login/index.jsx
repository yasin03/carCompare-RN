import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome5";
import auth from "@react-native-firebase/auth";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FbLogin from "./fb-login";
import GoogleLogin from "./google-login";

WebBrowser.maybeCompleteAuthSession();

function Login({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);
  const [userInfo, setUserInfo] = useState();

  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "1680492825744460",
  });

  _handleSubmit = (values) => {
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        alert("Giriş Başarılı");
        navigation.navigate("Home");
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          alert("Wrong Password");
          return;
        }

        if (error.code === "auth/user-not-found") {
          alert("User Not Found");
          return;
        }

        console.error(error);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, [response]);

  async function handleSignInWithFacebook() {
    const result = await promptAsync();

    if (result?.type !== "success") {
      Alert.alert("Something went wrong");
      return;
    }
  }

  const getUserInfo = async (token) => {
    if (response && response.type === "success" && response.authentication) {
      async = async () => {
        const userInfoResponse = await fetch(
          `https://www.graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`,
          { headers: { Authorization: "Bearer " + token } }
        );
        const userInfo = await userInfoResponse.json();
        setUserInfo(userInfo);
      };
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Sign in to continue!</Text>
      </View>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={_handleSubmit}
        validationSchema={Yup.object().shape({
          email: Yup.string().required("Email is required"),
          password: Yup.string().required("Password is required"),
        })}
      >
        {({
          values,
          errors,
          handleSubmit,
          isSubmitting,
          handleChange,
          isValid,
        }) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input1}
              placeholder={"Email"}
              keyboardType={"email-address"}
              value={values.email}
              onChangeText={handleChange("email")}
            />
            {errors.email && <Text style={styles.errors}>{errors.email}</Text>}
            <View>
              <TextInput
                style={styles.input2}
                placeholder={"Password"}
                secureTextEntry={hidePassword ? true : false}
                value={values.password}
                onChangeText={handleChange("password")}
              />
              <TouchableOpacity
                onPress={() => setHidePassword(!hidePassword)}
                style={{ position: "absolute", top: 10, right: 15 }}
              >
                <Icon name={hidePassword ? "eye-slash" : "eye"} size={25} />
              </TouchableOpacity>
              {errors.password && (
                <Text style={styles.errors}>{errors.password}</Text>
              )}
            </View>
            <TouchableOpacity style={styles.forgot}>
              <Text>Forgot Your Password!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              disabled={!isValid}
              onPress={handleSubmit}
            >
              <Text style={styles.button_text}>Sign in my account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              className="flex-row justify-center items-center bg-gray-400"
              disabled={!isValid}
              onPress={() => <GoogleLogin promptAsync={promptAsync} />}
            >
              <Icon name="google" size={22} color="white" />
              <Text className="ml-2" style={styles.button_text}>
                Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              className="flex-row justify-center items-center bg-gray-400"
              disabled={!isValid}
              onPress={() => handleSignInWithFacebook}
            >
              <Icon name="facebook" size={22} color="white" />
              <Text className="ml-2" style={styles.button_text}>
                Facebook
              </Text>
            </TouchableOpacity>

            <Text>{JSON.stringify(userInfo)}</Text>

            <View style={styles.signUp}>
              <Text style={styles.signUpText}>Don’t have an account? -</Text>
              <TouchableOpacity
                style={styles.signUpButton}
                onPress={() => navigation.navigate("Register")}
              >
                <Text style={styles.signUpButtonText}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default Login;

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingVertical: 50,
    marginHorizontal: 50,
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },
  title: { fontSize: 30, fontWeight: "bold" },
  subtitle: { fontSize: 16 },
  formContainer: { justifyContent: "center" },
  input1: {
    backgroundColor: "rgba(255,127,80,0.1)",

    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "coral",
    marginBottom: 10,
  },
  input2: {
    backgroundColor: "#E7E7E7",
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    marginBottom: 10,
  },
  errors: {
    color: "red",
    marginBottom: 10,
  },
  forgot: { alignItems: "flex-end", marginBottom: 50 },
  button: {
    backgroundColor: "coral",
    padding: 10,
    borderRadius: 25,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  button2: {
    padding: 8,
    borderRadius: 25,
    paddingVertical: 15,
    marginBottom: 5,
  },
  button_text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  signUp: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  signUpText: {
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton: {},
  signUpButtonText: { fontWeight: "bold" },
});
