import { View, Text, Image, SafeAreaView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: 'TESTING',
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <Text>
        {/* header  */}
        <View className="item-center mx-3 flex-row space-x-2 pb-3">
          <Image
            source={{
              uri: 'https://links.papareact.com/wru',
            }}
            className="h-8 w-8 rounded-full bg-gray-300 p-4"
          />
          <View>
            <Text className="text-xs font-bold text-gray-500">Delivery Now!</Text>
            <Text className="text-xl font-bold">Current Location</Text>
          </View>
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
