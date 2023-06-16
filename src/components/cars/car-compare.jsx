import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

const CarCompare = ({ route }) => {
  const { selectedCars } = route.params;
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-row w-90 justify-around gap-2 p-4 border border-gray-300 rounded">
          <View>
            <View className="flex justify-center items-center w-36 h-36 bg-red-500 rounded-full mb-4">
              <Image
                source={{ uri: selectedCars[0].image }}
                className="w-[90%] h-[90%] bg-white rounded-full bg-cover"
              />
            </View>
            <Text className=" font-bold mb-4">{selectedCars[0].name}</Text>

            <Text className="mb-2">Brand: {selectedCars[0].brand}</Text>
            <Text className="mb-2">Model: {selectedCars[0].model}</Text>
            <Text className="mb-2">Year: {selectedCars[0].year}</Text>
            <Text className="mb-2">Type: {selectedCars[0].type}</Text>
            <Text className="mb-2">Color: {selectedCars[0].color}</Text>
            <Text className="mb-2">Fuel: {selectedCars[0].fuel}</Text>
            <Text className="mb-2">
              Transmission: {selectedCars[0].transmission}
            </Text>
            <Text className="mb-2">Seat: {selectedCars[0].seat}</Text>
          </View>


        
          <View>
            <View className="flex justify-center items-center w-36 h-36 bg-red-500 rounded-full mb-4">
              <Image
                source={{ uri: selectedCars[1].image }}
                className="w-[90%] h-[90%] bg-white rounded-full bg-cover"
              />
            </View>
            <Text className=" font-bold mb-4">{selectedCars[1].name}</Text>

            <Text className="mb-2">Brand: {selectedCars[1].brand}</Text>
            <Text className="mb-2">Model: {selectedCars[1].model}</Text>
            <Text className="mb-2">Year: {selectedCars[1].year}</Text>
            <Text className="mb-2">Type: {selectedCars[1].type}</Text>
            <Text className="mb-2">Color: {selectedCars[1].color}</Text>
            <Text className="mb-2">Fuel: {selectedCars[1].fuel}</Text>
            <Text className="mb-2">
              Transmission: {selectedCars[1].transmission}
            </Text>
            <Text className="mb-2">Seat: {selectedCars[1].seat}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CarCompare;
