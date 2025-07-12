import { View, Text, Image, SafeAreaView, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline'; // ✅ Updated icon imports for clarity
import Categories from 'components/Categories';
import FeaturedRow from 'components/FeaturedRow';

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
      <View className="flex-row items-center space-x-3 px-3 pb-3">
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

      {/* Search Bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-1 flex-row items-center space-x-2 rounded-md bg-gray-200 p-2">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
            className="flex-1 text-gray-700"
          />
        </View>
        <AdjustmentsHorizontalIcon color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView
        className="bg-gray-100 "
        contentContainerStyle={{
          paddingBottom: 100,
        }}>
        {/* categories */}
        <Categories />
        {/* featured rows  */}
        <FeaturedRow id="123" title="Featured" description="Paid placements from our partners" />
        {/* Teasty Discount */}
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Everyone's been enjoy these juicy discounts!"
        />
        {/* Offer near you */}
        <FeaturedRow
          id="12345"
          title="Offers near you"
          description="Why not support your local restaurant tonight"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
