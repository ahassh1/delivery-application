import { View, Text, Image, SafeAreaView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserIcon, ChevronDownIcon } from 'react-native-heroicons/outline';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="bg-white pt-4">
      {/* Header */}
      <View className="flex-row items-center space-x-3 px-4 pb-3">
        {/* User Avatar */}
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className="h-8 w-8 rounded-full bg-gray-300"
        />

        {/* Location Info */}
        <View className="flex-1">
          <Text className="text-xs font-bold text-gray-500">Delivery Now!</Text>
          <View className="flex-row items-center">
            <Text className="mr-1 text-xl font-bold">Current Location</Text>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>

        {/* User Icon */}
        <UserIcon size={30} color="#00CCBB" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
