import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Cars from "../components/cars";
import Home from "../components/home";
import Profile from "../components/profile";
import Icon from "react-native-vector-icons/FontAwesome5";
import Login from "../components/auth/login";
import Register from "../components/auth/register";
import { StyleSheet, View } from "react-native";
import CarCompare from "../components/cars/car-compare";

const HomeStack = createNativeStackNavigator();
const CarsStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);

const CarsStackScreen = () => {
  return (
    <CarsStack.Navigator>
      <CarsStack.Screen name="Cars" component={Cars} />
      <CarsStack.Screen name="CarCompare" component={CarCompare} />
    </CarsStack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      {/*       <Stack.Navigator initialRouteName="CarStackScreen">
        <Stack.Screen
          name="CarStackScreen"
          component={CarStackScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Cars" component={Cars} />
        <Stack.Screen name="CarCompare" component={CarCompare} />
        <Stack.Screen name="CarDetails" component={CarDetails} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            borderRadius: 20,
            elevation: 0,
            height: 80,
            ...styles.shadow,
          },
        }}
      >
        <Tab.Screen
          name="HomeStackScreen"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="car" size={32} color={color} />
            ),
            headerShown: false,
            tabBarActiveTintColor: "coral",
          }}
        />
        <Tab.Screen
          name="CarsStackScreen"
          component={CarsStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <View
                style={styles.shadow}
                className="absolute bottom-4 shadow-xl"
              >
                <View className="flex justify-center items-center bg-red-500 rounded-full w-20 h-20 shadow-lg">
                  <Icon name="retweet" size={32} color={color} />
                </View>
              </View>
            ),
            tabBarActiveTintColor: "white",
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="user" size={32} color={color} />
            ),
            tabBarActiveTintColor: "coral",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
