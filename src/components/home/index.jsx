import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CarItem from "./car-item";
import cars from "../../db/cars.json";

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
        {data.map((car, index) => (
          <View key={index}>
            <CarItem
              data={data}
              setData={setData}
              car={car}
              index={index}
              navigation={navigation}
            />
          </View>
        ))}
      </ScrollView>

      <View>
        <TouchableOpacity
          className="absolute bottom-4 right-1 bg-red-200 p-3 px-5 rounded-full border border-red-400"
          onPress={() => {
            navigation.navigate("CarCreate");
          }}
        >
          <Text className="text-3xl">+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;


