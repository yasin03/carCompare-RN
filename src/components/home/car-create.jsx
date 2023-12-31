import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

const CarCreate = ({ toggleModal }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Car Create Page</Text>

      <TouchableOpacity title="Hide modal" onPress={toggleModal} />
    </View>
  );
};

export default CarCreate;
