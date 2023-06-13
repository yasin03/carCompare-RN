import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CarItem from "./car-item";
import cars from "../../db/cars.json";
import CarCreate from "./car-create";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isModalVisible, setModalVisible] = useState(true);

  const loadData = () => {
    setData(cars);
  };

  useEffect(() => {
    loadData();
  }, []);

  const toggleModal = () => {
    setModalVisible(() => !isModalVisible);
  };
  return (
    <SafeAreaView className="flex-1 mx-4 mb-24">
      <ScrollView showsVerticalScrollIndicator={false} className="my-2">
        <View className="flex-row justify-end my-2">
          <TouchableOpacity
            className="p-4 bg-red-500 rounded-2xl px-10 w-40"
            onPress={() => (
              <CarCreate
                toggleModal={() => toggleModal}
                isModalVisible={isModalVisible}
              />
            )}
          >
            <Text className="font-semibold text-white text-md">
              Create a Car
            </Text>
          </TouchableOpacity>
        </View>
        {data.map((car, index) => (
          <CarItem key={index} car={car} index={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
