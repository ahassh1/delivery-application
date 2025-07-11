import { View, Text, Image } from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View>
      <Text className="h-22 w-32 bg-green-600 font-bold">HomeScreen</Text>

      <Image className=" h-full w-full " source={require('../assets/images/night.jpg')} />
    </View>
  );
};

export default HomeScreen;
