import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import cars from "../../db/cars.json";
import { StyleSheet } from "react-native";

const Cars = ({ navigation }) => {
  const [selectedCars, setSelectedCars] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const handleCarSelect = (car) => {
    // Maksimum 2 araç seçimini kontrol et
    if (selectedCars.length < 2) {
      setSelectedCars([...selectedCars, car]);
    }
  };

  const handleRemoveCar = (car) => {
    const updatedCars = selectedCars.filter(
      (selectedCar) => selectedCar.id !== car.id
    );
    setSelectedCars(updatedCars);
  };

  return (
    <SafeAreaView className=" m-3 ">
      <ScrollView showsHorizontalScrollIndicator={false}>
        {cars.map((car, index) => {
          const isSelected = selectedCars.some(
            (selectedCar) => selectedCar.id === car.id
          );
          const isDisabled = selectedCars.length === 2 && !isSelected;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleCarSelect(car)}
              disabled={isDisabled}
              style={[styles.shadow, { opacity: isDisabled ? 0.5 : 1 }]}
              className="flex flex-row items-center p-2 rounded-xl mb-4 w-full h-32 bg-white shadow-xl"
            >
              <View className="flex justify-center items-center w-24 h-24 bg-red-500 rounded-full mr-3 place-items-center">
                <Image
                  source={{ uri: car.image }}
                  className="w-[90%] h-[90%] rounded-full bg-white "
                />
              </View>
              <View className="flex-col">
                <Text className="font-semibold  text-xl">{car.name}</Text>
                <View className="flex-row gap-1 items-center">
                  <Text className="font-semibold text-red-500">
                    {car.brand}
                  </Text>
                  <Text className="" numberOfLines={2}>
                    {car.model}
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => handleRemoveCar(car)}
                className="flex justify-center items-center bg-gray-200 border border-gray-400 w-7 h-7 rounded-lg absolute top-2 right-2"
              >
                {isSelected && <Text>✓</Text>}
              </TouchableOpacity>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View>
        <TouchableOpacity
          className="absolute bottom-24 right-1 bg-red-200 p-4 px-5 rounded-full border border-red-400"
          disabled={disabled}
          onPress={() => {
            navigation.navigate("CarCompare", { selectedCars });
            setSelectedCars([]);
          }}
        >
          <Text className="text-2xl">➜</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cars;

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
