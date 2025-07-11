import { View, Text, Image } from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View className="relative flex-1">
      <Image className="absolute  h-full w-full " source={require('../assets/images/night.jpg')} />
      <Text className="h-22 w-32 bg-red-600 font-bold">HomeScreen</Text>
      <Text>Polash</Text>
    </View>
  );
};

export default HomeScreen;
