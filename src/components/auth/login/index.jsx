import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,

} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as WebBrowser from "expo-web-browser";
import GoogleLogin from "./google-login";

WebBrowser.maybeCompleteAuthSession();

function Login({ navigation, handlePressAsync }) {
  const [hidePassword, setHidePassword] = useState(true);

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
              className="flex-row justify-center items-center bg-blue-900"
              disabled={!isValid}
              onPress={handlePressAsync}
            >
              <Icon name="facebook" size={22} color="white" />
              <Text className="ml-2" style={styles.button_text}>
                Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              className="flex-row justify-center items-center bg-gray-400"
              disabled={true}
              onPress={() => <GoogleLogin />}
            >
              <Icon name="google" size={22} color="white" />
              <Text className="ml-2" style={styles.button_text}>
                Google
              </Text>
            </TouchableOpacity>

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
    paddingVertical: 30,
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
    backgroundColor: "rgba(255,0,0,0.1)",
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "red",
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
    backgroundColor: "red",
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
