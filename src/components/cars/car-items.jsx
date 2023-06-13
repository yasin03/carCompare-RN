import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CarItems = ({ item, index, navigation }) => {
  return (
    <View></View>
/*     <TouchableOpacity
      className="flex flex-col justify-between p-4 rounded-xl mb-4
    w-full h-72 border border-pBlack-200"
      style={{ marginRight: index % 2 !== 0 ? 0 : 10 }}
    >

      <View className="flex-1 justify-center items-center w-full h-32">
        <Image
          source={{
            uri: item.image,
          }}
          className="w-56 h-32 object-cover "
        />
      </View>


      <Text className="font-semibold  text-xl">{item.name}</Text>


      <View className="flex-row gap-1 items-center">
        <Text className="font-semibold text-blue-600">{item.brand}</Text>
        <Text className="" numberOfLines={2}>
          {item.model}
        </Text>
      </View>


      <View className="flex-row gap-1 justify-between items-center">
        <Text className=" text-pBlack-950" numberOfLines={2}>
          <Text className=" font-semibold text-red-500">Fuel Type : </Text>
          {item?.fuel?.charAt(0)?.toUpperCase() + item?.fuel?.slice(1)}
        </Text>
        <Text className=" text-pBlack-950" numberOfLines={2}>
          <Text className=" font-semibold text-red-500">Transmission : </Text>
          {item?.transmission?.charAt(0)?.toUpperCase() +
            item?.transmission?.slice(1)}
        </Text>
      </View>
    </TouchableOpacity> */
  );
};

export default CarItems;
