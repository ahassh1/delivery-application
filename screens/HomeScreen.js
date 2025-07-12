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
      <Text className="text-red-400">
        {/* header  */}
        <View>
          <Image
            source={{
              uri: 'https://links.papareact.com/wru',
            }}
            className="h-7 w-7 rounded-full bg-gray-300 p-3"
          />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
