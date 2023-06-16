import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Popup } from "react-native-popup-confirm-toast";
import Icon from "react-native-vector-icons/FontAwesome5";
import useUserStore from "../../redux/user-store";

const Profile = ({ navigation }) => {

  const {user} = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const handleLogout = () => {
    Popup.show({
      type: "confirm",
      title: "Attention!",
      textBody: "Are you sure you want to logout?",
      buttonText: "Logout",
      okButtonStyle: { backgroundColor: "red" },
      confirmText: "Cancel",
      callback: () => {
        setUser({});
        Popup.hide(), navigation.navigate("Login");
      },
      cancelCallback: () => {
        Popup.hide();
      },
    });
  };


  return (
    <SafeAreaView className="mx-4 flex-1 items-center">
      <View className="flex justify-center items-center w-36 h-36 bg-red-400 rounded-full my-12">
        <Image
          source={{
            uri: user?.picture?.data?.url
              ? user?.picture?.data?.url
              : "https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y=",
          }}
          className="w-32 h-32 object-cover rounded-full"
        />
      </View>
      <View className="flex flex-row gap-2 justify-start items-center rounded-3xl p-3 w-72 border border-red-300 mb-6">
        <Text className="text-xl">Name : </Text>
        <Text className="text-xl">{user?.name} </Text>
      </View>

      <View className="flex flex-row gap-2 justify-start items-center  rounded-3xl p-3 w-72 border border-red-300 mb-6">
        <Text className="text-xl">Phone : </Text>
        <Text className="text-xl">+90555 112 34 56 </Text>
      </View>

      <View className="flex flex-row gap-2 justify-start items-center  rounded-3xl p-3 w-72 border border-red-300 mb-6">
        <Text className="text-xl">Email : </Text>
        <Text>{user?.email} </Text>
      </View>

      <TouchableOpacity
        className="flex-row gap-2 justify-center items-center rounded-3xl p-3 w-72 bg-red-500 border border-red-300"
        onPress={handleLogout}
      >
        <Icon name="arrow-down" size={22} color={"white"} />
        <Text className="text-xl text-white font-semibold">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
