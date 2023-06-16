import React, { useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import SelectDropdown from "react-native-select-dropdown";
import { Popup } from "react-native-popup-confirm-toast";
import cars from "../../db/cars.json";

const CarUpdate = ({ navigation, route }) => {
  const { car } = route.params;
  const [name, setName] = useState(car.name);
  const [brand, setBrand] = useState(car.brand);
  const [model, setModel] = useState(car.model);
  const [type, setType] = useState(car.type);
  const [color, setColor] = useState(car.color);
  const [transmission, setTransmission] = useState(car.transmission);
  const [seat, setSeat] = useState(car.seat);
  const [fuel, setFuel] = useState(car.fuel);
  const [year, setYear] = useState(car.year);
  const [image, setImage] = useState(car.image);

  const transmissionData = ["Automatic", "Manuel", "Triptonik"];
  const seatData = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ];
  const fuelData = ["Diesel", "Gasoline", "LPG", "Hybrid", "Electric"];
  const yearData = [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
  ];

  const handleUpdate = () => {
    Popup.show({
      type: "confirm",
      title: "Attention!",
      textBody: "Are you sure you want to update this car?",
      buttonText: "Update",
      okButtonStyle: { backgroundColor: "green" },
      confirmText: "Cancel",
      callback: () => {
        const newCar = {
          id: car.id,
          name: name,
          brand: brand,
          model: model,
          type: type,
          color: color,
          transmission: transmission,
          seat: seat,
          fuel: fuel,
          year: year,
        };
        updateCar(car.id, newCar);
      },
      cancelCallback: () => {
        Popup.hide();
      },
    });
  };

  const updateCar = (carId, updatedCar) => {
    const carIndex = cars.findIndex((car) => car.id === carId);

    if (carIndex !== -1) {
      cars[carIndex] = { ...cars[carIndex], ...updatedCar };
      Popup.show({
        type: "success",
        title: "Success!",
        textBody: `${car.name}, car is updated!`,
        okButtonStyle: { backgroundColor: "green" },
        callback: () => Popup.hide(),
      });
    } else {
      console.log("Car not found");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex mb-32 mx-8">
          <View>
            <View className="flex justify-center items-center w-32 h-32 my-10 bg-red-500 rounded-full mx-auto ">
              <Image
                source={{ uri: image }}
                className="w-[90%] h-[90%] rounded-full bg-white "
              />
            </View>

            <View className="mt-2 flex justify-center items-center rounded-2xl border border-dashed border-gray-900/25 px-6 py-6 bg-white mb-10">
              <View className="flex-col items-center">
                <Icon name={"image"} size={24} />
                <View className="mt-4 flex text-sm leading-6 text-gray-600">
                  <View className="flex-row  rounded-md bg-white ">
                    <TouchableOpacity>
                      <Text className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer">
                        Upload a file
                      </Text>
                    </TouchableOpacity>

                    <Text className="pl-1">or drag and drop</Text>
                  </View>
                </View>
                <Text className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-col gap-2">
            <View className="mb-3">
              <Text style={styles.label}>Car Name</Text>
              <TextInput
                className=" focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                style={[styles.input, styles.shadow]}
                value={name}
                onChangeText={setName}
              />
            </View>
            <View className="mb-3">
              <Text style={styles.label}>Brand</Text>
              <TextInput
                style={[styles.input, styles.shadow]}
                value={brand}
                onChangeText={setBrand}
              />
            </View>
            <View className="mb-3">
              <Text style={styles.label}>Model</Text>
              <TextInput
                style={[styles.input, styles.shadow]}
                value={model}
                onChangeText={setModel}
              />
            </View>
            <View className="mb-3">
              <Text style={styles.label}>Type</Text>
              <TextInput
                style={[styles.input, styles.shadow]}
                value={type}
                onChangeText={setType}
              />
            </View>
            <View className="mb-3">
              <Text style={styles.label}>Color</Text>
              <TextInput
                style={[styles.input, styles.shadow]}
                value={color}
                onChangeText={setColor}
              />
            </View>

            <View className="mb-3 flex-row justify-between items-center">
              <Text style={styles.label}>Transmission</Text>
              <SelectDropdown
                data={transmissionData}
                buttonStyle={[styles.shadow, styles.dropdownButton]}
                dropdownStyle={styles.dropdown}
                renderDropdownIcon={(isOpened) => {
                  return (
                    <Icon
                      name={isOpened ? "chevron-up" : "chevron-down"}
                      color={"grey"}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={"right"}
                onSelect={(selectedItem, index) => {
                  setTransmission(selectedItem);
                }}
              />
            </View>
            <View className="mb-3 flex-row justify-between items-center">
              <Text style={styles.label}>Seat</Text>
              <SelectDropdown
                data={seatData}
                buttonStyle={[styles.shadow, styles.dropdownButton]}
                dropdownStyle={styles.dropdown}
                renderDropdownIcon={(isOpened) => {
                  return (
                    <Icon
                      name={isOpened ? "chevron-up" : "chevron-down"}
                      color={"grey"}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={"right"}
                onSelect={(selectedItem, index) => {
                  setSeat(selectedItem);
                }}
              />
            </View>
            <View className="mb-3 flex-row justify-between items-center">
              <Text style={styles.label}>Fuel</Text>
              <SelectDropdown
                data={fuelData}
                buttonStyle={[styles.shadow, styles.dropdownButton]}
                dropdownStyle={styles.dropdown}
                renderDropdownIcon={(isOpened) => {
                  return (
                    <Icon
                      name={isOpened ? "chevron-up" : "chevron-down"}
                      color={"grey"}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={"right"}
                onSelect={(selectedItem, index) => {
                  setFuel(selectedItem);
                }}
              />
            </View>
            <View className="mb-3 flex-row justify-between items-center">
              <Text style={styles.label}>Year</Text>
              <SelectDropdown
                data={yearData.reverse()}
                buttonStyle={[styles.shadow, styles.dropdownButton]}
                dropdownStyle={styles.dropdown}
                renderDropdownIcon={(isOpened) => {
                  return (
                    <Icon
                      name={isOpened ? "chevron-up" : "chevron-down"}
                      color={"grey"}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={"right"}
                onSelect={(selectedItem, index) => {
                  setYear(selectedItem);
                }}
              />
            </View>

            <View className="flex-row ">
              <TouchableOpacity
                style={styles.shadow}
                className="grow p-2 bg-green-500 rounded-xl mr-4"
                onPress={handleUpdate}
              >
                <Text className="text-white text-center font-semibold text-xl">
                  Update
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="p-2 bg-gray-300 rounded-xl"
                onPress={() => navigation.navigate("Home")}
              >
                <Text className="text-white text-center font-semibold text-xl">
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CarUpdate;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
  dropdown: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
  },
  dropdownButton: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  shadow: {
    shadowColor: "#444444",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
