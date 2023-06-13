import React from 'react'
import { Button, Modal, Text, TouchableOpacity, View } from 'react-native';

const CarCreate = ({ toggleModal, isModalVisible }) => {
  return (
    <Modal isVisible={isModalVisible}>
      <View style={{ flex: 1 }}>
        <Text>Hello!</Text>

        <TouchableOpacity title="Hide modal" onPress={toggleModal} />
      </View>
    </Modal>
  );
};

export default CarCreate