import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome5";

const Profile = () => {
  return (
    <SafeAreaView className="mx-4 flex-1 items-center">
      <View className="flex justify-center items-center w-36 h-36 bg-red-400 rounded-full my-12">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          }}
          className="w-32 h-32 object-cover rounded-full"
        />
      </View>
      <View className="flex flex-row gap-2 justify-start items-center rounded-3xl p-3 w-72 border border-red-300 mb-6">
        <Text className="text-xl">Name : </Text>
        <Text className="text-xl">Waren Campbell </Text>
      </View>

      <View className="flex flex-row gap-2 justify-start items-center  rounded-3xl p-3 w-72 border border-red-300 mb-6">
        <Text className="text-xl">Phone : </Text>
        <Text className="text-xl">+90555 112 34 56 </Text>
      </View>

      <View className="flex flex-row gap-2 justify-start items-center  rounded-3xl p-3 w-72 border border-red-300 mb-6">
        <Text className="text-xl">Email : </Text>
        <Text>waren.campbell@gmail.com </Text>
      </View>

      <TouchableOpacity className="flex-row gap-2 justify-center items-center rounded-3xl p-3 w-72 bg-red-500 border border-red-300">
        <Icon name="arrow-down" size={22} color={"white"}/>
        <Text className="text-xl text-white font-semibold">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
