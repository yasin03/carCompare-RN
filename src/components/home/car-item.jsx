import React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { Popup } from "react-native-popup-confirm-toast";
import Icon from "react-native-vector-icons/FontAwesome5";

const CarItem = ({ navigation, car, index, data, setData }) => {
  const handleDelete = () => {
    Popup.show({
      type: "confirm",
      title: "Attention!",
      textBody: "Are you sure you want to delete this car?",
      buttonText: "Delete",
      okButtonStyle:{backgroundColor:"red"},
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

  return (
    <View>
      <TouchableOpacity
        className="flex flex-col justify-between p-4 rounded-xl mb-4
    w-full h-72 border border-pBlack-200"
        style={{ marginRight: index % 2 !== 0 ? 0 : 10 }}
        onPress={() => navigation.navigate("CarUpdate", { car })}
      >
        {/* Image Area */}
        <View className="flex-1 justify-center items-center w-full h-32">
          <Image
            source={{
              uri: car.image,
            }}
            className="w-56 h-32 object-fill "
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
            <Text className=" font-semibold text-red-500">Fuel Type : </Text>
            {car?.fuel?.charAt(0)?.toUpperCase() + car?.fuel?.slice(1)}
          </Text>
          <Text className=" text-pBlack-950" numberOfLines={2}>
            <Text className=" font-semibold text-red-500">Transmission : </Text>
            {car?.transmission?.charAt(0)?.toUpperCase() +
              car?.transmission?.slice(1)}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className="absolute top-3 right-3 bg-red-200 p-2 border border-red-400 rounded-lg"
        onPress={handleDelete}
      >
        <Icon name={"trash-alt"} size={16} />
      </TouchableOpacity>
    </View>
  );
};

export default CarItem;
