import { View, Text } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="px-4 text-sm text-gray-500">{description}</Text>
    </View>
  );
};

export default FeaturedRow;
