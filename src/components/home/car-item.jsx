import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Popup } from "react-native-popup-confirm-toast";
import Icon from "react-native-vector-icons/FontAwesome5";

const CarItem = ({ navigation, car, index, data, setData }) => {
  const handleDelete = () => {
    Popup.show({
      type: "confirm",
      title: "Attention!",
      textBody: "Are you sure you want to delete this car?",
      buttonText: "Delete",
      okButtonStyle: { backgroundColor: "red" },
      confirmText: "Cancel",
      callback: () => {
        setData(data.filter((item) => item.id !== car.id));
        Popup.show({
          type: "success",
          title: "Success!",
          textBody: `${car.name}, car is deleted!`,
          okButtonStyle: { backgroundColor: "red" },
          callback: () => Popup.hide(),
        });
      },
      cancelCallback: () => {
        Popup.hide();
      },
    });
  };
  const handleUpdate = () => {
    Popup.show({
      type: "confirm",
      title: "Attention!",
      textBody: "Are you sure you want to update this car?",
      buttonText: "Update",
      okButtonStyle: { backgroundColor: "green" },
      confirmText: "Cancel",
      callback: () => {
        Popup.hide();
        navigation.navigate("CarUpdate", { car });
      },
      cancelCallback: () => {
        Popup.hide();
      },
    });
  };

  return (
    <View>
      <TouchableOpacity
        className="flex flex-col justify-between p-4 rounded-3xl mb-4
    w-full h-52 bg-white"
        style={[styles.shadow, { marginRight: index % 2 !== 0 ? 0 : 10 }]}
      >
        {/* Image Area */}
        <View className="flex-1 justify-center items-center w-full h-24">
          <Image
            source={{
              uri: car.image,
            }}
            className="w-36 h-20 object-fill "
          />
        </View>

        {/* Car Name Area */}
        <Text className="font-semibold  text-xl">{car.name}</Text>

        {/* Car Brand Area */}
        <View className="flex-row gap-1 items-center">
          <Text className="font-semibold text-blue-600">{car.brand}</Text>
          <Text className="" numberOfLines={2}>
            {car.model}
          </Text>
        </View>

        {/* Car Model Area */}
        <View className="flex-row gap-1 justify-between items-center">
          <Text className=" text-pBlack-950" numberOfLines={2}>
            <Text className=" font-semibold text-red-500">Year : </Text>
            {car?.year}
          </Text>
          <Text className=" text-pBlack-950" numberOfLines={2}>
            <Text className=" font-semibold text-red-500">Transmission : </Text>
            {car?.transmission?.charAt(0)?.toUpperCase() +
              car?.transmission?.slice(1)}
          </Text>
        </View>

        <View className="flex-row gap-1 justify-between items-center">
          <Text className=" text-pBlack-950" numberOfLines={2}>
            <Text className=" font-semibold text-red-500">Fuel Type : </Text>
            {car?.fuel?.charAt(0)?.toUpperCase() + car?.fuel?.slice(1)}
          </Text>
          <Text className=" text-pBlack-950" numberOfLines={2}>
            <Text className=" font-semibold text-red-500">Color : </Text>
            {car?.color?.charAt(0)?.toUpperCase() + car?.color?.slice(1)}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className="absolute top-3 left-3 bg-red-600 p-2 rounded-xl"
        onPress={handleDelete}
      >
        <Icon name={"trash-alt"} size={12} color={"white"} />
      </TouchableOpacity>
      <TouchableOpacity
        className="absolute top-3 left-12 bg-green-600 p-2  rounded-xl"
        onPress={handleUpdate}
      >
        <Icon name={"pen"} size={12} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};

export default CarItem;

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
